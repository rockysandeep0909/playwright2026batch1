import {test,expect} from '@playwright/test';

test('Login to SauceDemo', async ({page})=>{

await page.goto("https://www.saucedemo.com/");
await expect(page).toHaveTitle("Swag Labs");
await page.locator("//input[@id='user-name']").fill("standard_user");
await page.locator("//input[@name='password']").fill("secret_sauce");
await page.locator("//input[@name='login-button']").click();
await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html")
console.log("we just completed one simple login flow using playwright - Awesome")
await page.waitForTimeout(5000);
await expect(page.locator("//button[@data-test='add-to-cart-sauce-labs-backpack']")).toBeVisible();
await page.locator("//button[@data-test='add-to-cart-sauce-labs-backpack']").click();
await page.waitForTimeout(2000);
await page.goBack();
await page.waitForTimeout(2000);
await page.goForward();
await page.waitForTimeout(2000);
await page.reload();
})


test('Login to amazon and click on sell', async ({page})=>{

await page.goto("https://www.amazon.in/");
await page.locator("//a[text()='Sell']").click();

await page.waitForTimeout(5000);

})



test('Paytm navigation', async ({page})=>{

await page.goto("https://paytm.com/");
await page.pause();
await page.locator("//li[text()='Ticket Booking']").hover();
await page.locator("//span[text()='Sign In']").click();



})


test('Selecting different dropdowns', async ({page})=>{

await page.goto("https://www.saucedemo.com/");
await expect(page).toHaveTitle("Swag Labs");
await page.locator("//input[@id='user-name']").fill("standard_user");
await page.locator("//input[@name='password']").fill("secret_sauce");
await page.locator("//input[@name='login-button']").click();
await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html")
console.log("we just completed one simple login flow using playwright - Awesome")
await page.waitForTimeout(5000);

let dropDown=page.locator("//select[@data-test='product-sort-container']");
await dropDown.selectOption("hilo");
await page.waitForTimeout(5000);

await dropDown.selectOption("lohi")
await page.waitForTimeout(5000);
await dropDown.selectOption("za");
await page.waitForTimeout(5000);
await dropDown.selectOption("az");
})


test("File upload for heruko application ", async ({page})=>{

    await page.goto("https://the-internet.herokuapp.com/upload");
    await page.locator("//input[@id='file-upload']").setInputFiles("C:\\Users\\Sandeep\\Desktop\\sample.txt");
    await page.locator("//input[@id='file-submit']").click();
    await page.waitForTimeout(5000);
    await expect(page.locator("//h3")).toHaveText("ile Uploaded!");


})

test("Visual testing for instagram", async ({page})=>{


    await page.goto("https://www.instagram.com/");
    await page.waitForTimeout(5000);
    expect(await page.screenshot()).toMatchSnapshot("insta.png")
})