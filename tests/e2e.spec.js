import {test,expect} from '@playwright/test';
import 'dotenv/config';
import logger from '../utils/logger';
import { Logger } from 'winston';
import {LoginPage} from '../POM/LoginPage';

test('TC 01:Login to SauceDemo', async ({page})=>{
const lp=new LoginPage(page);
// implementing the login flow using POM
await lp.gotoLoginPage();
await lp.validLogin();




//console.log("we just completed one simple login flow using playwright - Awesome")
logger.info("we just completed one simple login flow using playwright - Awesome")
await page.waitForTimeout(5000);
await expect(page.locator("//button[@data-test='add-to-cart-sauce-labs-backpack']")).toBeVisible();
await page.locator("//button[@data-test='add-to-cart-sauce-labs-backpack']").click();
await page.waitForTimeout(2000);
await page.goBack();
await page.waitForTimeout(2000);
await page.goForward();
await page.waitForTimeout(2000);
await page.reload();

//console.log("TC01 is completed")
logger.info("TC01 is completed")
})


