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
    await expect(page.locator("//h3")).toHaveText("File Uploaded!");


})

test("Visual testing for instagram", async ({page})=>{


    await page.goto("https://www.instagram.com/");
    await page.waitForTimeout(5000);
    expect(await page.screenshot()).toMatchSnapshot("insta.png")
})

test('Verify error message text', async ({ page }) => {
 await page.goto('https://www.saucedemo.com/');
 await page.locator('#user-name').fill('standard_user');
 await page.locator('#password').fill('wrong_password');
 await page.locator('#login-button').click();

 await expect(page.locator('[data-test="error"]'))
   .toContainText('Username and password do not match');
});


test('Verify products count', async ({ page }) => {
 await page.goto('https://www.saucedemo.com/');
 await page.locator('#user-name').fill('standard_user');
 await page.locator('#password').fill('secret_sauce');
 await page.locator('#login-button').click();

 await expect(page.locator('.inventory_item')).toHaveCount(6);
});


test('Soft assertion example', async ({ page }) => {
 await page.goto('https://www.saucedemo.com/');

 await expect.soft(page).toHaveTitle('Swag Labs');
 await expect.soft(page.locator('.login_logo')).toHaveText('Swag Labs');
 await expect.soft(page.locator('#login-button')).toBeVisible();
 await expect.soft(page).toHaveTitle('Swag Labs');
 console.log('Soft assertions completed');
});

// launch sauce demo using browser fixture

test("launch using browser fixtures", async ({browser})=>{

   let context=await browser.newContext();
   let page= await context.newPage();
   await page.goto("https://www.instagram.com")
   await page.waitForTimeout(5000);


})


// to handle table using playwright 

test("handling tables using playwright", async ({page})=>{
 
 await page.goto("https://demo.guru99.com/test/web-table-element.php");
 let rows=await page.locator("//tbody/tr").count();
 console.log("row count is " + rows)

 for(let i=1;i<rows;i++){
   ////tbody/tr[i]/td[5].textContent
   let companyName= await page.locator("//tbody/tr["+i+"]/td[1]").textContent();
   let currentPrice=await page.locator("//tbody/tr["+i+"]/td[4]").textContent();
   let percentageChange=await page.locator("//tbody/tr["+i+"]/td[5]").textContent();

   console.log("Company name :" +companyName + "Current Price :"+ currentPrice +"Percetnage change :" +percentageChange);
 }


})


// test to handle javascripts 

test("Handle JS alert", async ({page})=>{
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts");
    
    

    page.on('dialog', async dialog=>{
        console.log(dialog.message())
        await dialog.accept();
    })
   await page.locator("//button[text()='Click for JS Alert']").click();
})

// test to handle js confirm alert in playwright 

test("Handle JS confirm alert", async ({page})=>{
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts");
    
    

    page.on('dialog', async dialog=>{
        console.log(dialog.message())
        await dialog.dismiss();
    })
   await page.locator("//button[text()='Click for JS Confirm']").click();
   await page.waitForTimeout(5000);
})


// test to handle js prompt alert in playwright
test.only("Handle JS prompt alert", async ({page})=>{
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts");
    
    

    page.on('dialog', async dialog=>{
        console.log(dialog.message())
        await dialog.accept("Sandeep is entering something")
    })
   await page.locator("//button[text()='Click for JS Prompt']").click();
   await page.waitForTimeout(5000);
})
