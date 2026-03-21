import {test} from '@playwright/test';

test.only('Login to SauceDemo', async ({page})=>{

await page.goto("https://www.saucedemo.com/");
await page.locator("//input[@id='user-name']").fill("standard_user");
await page.locator("//input[@name='password']").fill("secret_sauce");
await page.locator("//input[@name='login-button']").click();
console.log("we just completed one simple login flow using playwright - Awesome")
await page.waitForTimeout(5000);

})