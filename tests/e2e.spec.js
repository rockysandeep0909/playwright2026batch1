import {test,expect} from '@playwright/test';
import 'dotenv/config';
import logger from '../utils/logger';
import {LoginPage} from '../POM/LoginPage';
import { InventoryPage } from '../POM/InventoryPage';
import { CartPage } from '../POM/CartPage';

test('TC 01:Login to SauceDemo', async ({page})=>{
let lp=new LoginPage(page);
let ip=new InventoryPage(page);
let cp=new CartPage(page);
// implementing the login flow using POM
await lp.gotoLoginPage();
logger.info("navigated to login page successfully")
// await lp.enterUsername();
// logger.info("entered username successfully")
// await lp.enterPassword();
// logger.info("entered password successfully")
// await lp.clickLoginButton();
// logger.info("clicked on login button successfully")     
// logger.info("Login  page is now done")

await lp.validLogin(process.env.sauce_username, process.env.sauce_password);
logger.info("we just completed one simple login flow using playwright - Awesome")
await page.waitForTimeout(5000);
await expect(ip.addToCartBackPack).toBeVisible();
await ip.addBackPackToCart();
await ip.clickCartImage();
logger.info("Clicked on cart image")
logger.info("Inventory page is now done")
await cp.clickonCheckout();
logger.info("Cart Page is now done")
logger.info("TC01 is completed")
})


