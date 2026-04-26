import {test,expect,request} from '@playwright/test';
import 'dotenv/config';
import logger from '../utils/logger';
import { Logger } from 'winston';

test('@Smoke TC 01:Login to SauceDemo', async ({page})=>{

await page.goto(process.env.Sauce_BASE_URL);
await page.pause();
await expect(page).toHaveTitle("Swag Labs");
await page.locator("//input[@id='user-name']").fill("standard_user");
await page.locator("//input[@name='password']").fill("secret_sauce");
await page.locator("//input[@name='login-button']").click();
await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html")
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


test('@Smoke TC 02: Login to amazon and click on sell', async ({page})=>{

await page.goto("https://www.amazon.in/");
await page.locator("//a[text()='Sell']").click();

await page.waitForTimeout(5000);
logger.warn("TC02 is completed")
})



test('TC 03: Paytm navigation', async ({page})=>{

await page.goto("https://paytm.com/");
//await page.pause();
await page.locator("//li[text()='Ticket Booking']").hover();
logger.error("Hover didnt happen properly")
await page.locator("//span[text()='Sign In']").click();

logger.error("TC03 is completed")

})


test('@Regression TC 04: Selecting different dropdowns', async ({page})=>{

await page.goto(process.env.Sauce_BASE_URL);
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


test('TC 05: File upload for heruko application ', async ({page})=>{

    await page.goto("https://the-internet.herokuapp.com/upload");
    await page.locator("//input[@id='file-upload']").setInputFiles("C:\\Users\\Sandeep\\Desktop\\sample.txt");
    await page.locator("//input[@id='file-submit']").click();
    await page.waitForTimeout(5000);
    await expect(page.locator("//h3")).toHaveText("File Uploaded!");


})

test('@Smoke TC 06: Visual testing for instagram', async ({page})=>{


    await page.goto("https://www.instagram.com/");
    await page.waitForTimeout(5000);
    expect(await page.screenshot()).toMatchSnapshot("insta.png")
})

test('TC 07: Verify error message text', async ({ page }) => {
 await page.goto(process.env.Sauce_BASE_URL);
 await page.locator('#user-name').fill('standard_user'); // id attribute
 await page.locator('#password').fill('wrong_password');
 await page.locator('.submit-button').click(); // class attribute

 await expect(page.locator('[data-test="error"]'))
   .toContainText('Username and password do not match');
});

// product count and css usage in script
test('TC 08: Verify products count', async ({ page }) => {
 await page.goto(process.env.Sauce_BASE_URL);
 await page.locator('#user-name').fill('standard_user');
 await page.locator('#password').fill('secret_sauce');
 await page.locator('#login-button').click();

 await expect(page.locator('.inventory_item')).toHaveCount(6);
});


test('TC 09: Soft assertion example', async ({ page }) => {
 await page.goto(process.env.Sauce_BASE_URL);

 await expect.soft(page).toHaveTitle('Swag Labs');
 await expect.soft(page.locator('.login_logo')).toHaveText('Swag Labs');
 await expect.soft(page.locator('#login-button')).toBeVisible();
 await expect.soft(page).toHaveTitle('Swag Labs');
 console.log('Soft assertions completed');
});

// launch sauce demo using browser fixture

test('TC 10: launch using browser fixtures', async ({browser})=>{

   let context=await browser.newContext();
   let page= await context.newPage();
   await page.goto("https://www.instagram.com")
   await page.waitForTimeout(5000);


})


// to handle table using playwright 

test('@Regression TC 11: handling tables using playwright', async ({page})=>{
 
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

test('TC 12: Handle JS alert', async ({page})=>{
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts");
    
    

    page.on('dialog', async dialog=>{
        console.log(dialog.message())
        await dialog.accept();
    })
   await page.locator("//button[text()='Click for JS Alert']").click();
})

// test to handle js confirm alert in playwright 

test('TC 13: Handle JS confirm alert', async ({page})=>{
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts");
    
    

    page.on('dialog', async dialog=>{
        console.log(dialog.message())
        await dialog.dismiss();
    })
   await page.locator("//button[text()='Click for JS Confirm']").click();
   await page.waitForTimeout(5000);
})


// test to handle js prompt alert in playwright
test('TC 15: Handle JS prompt alert', async ({page})=>{
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts");
    
    

    page.on('dialog', async dialog=>{
        console.log(dialog.message())
        await dialog.accept("Sandeep is entering something")
    })
   await page.locator("//button[text()='Click for JS Prompt']").click();
   await page.waitForTimeout(5000);
})


// inbuild playwright locators for https://www.testmuai.com/selenium-playground/simple-form-demo/

test('TC 16: Handle simple form demo', async ({page})=>{
    await page.goto("https://www.testmuai.com/selenium-playground/simple-form-demo/");
    // Locating ELements by role
    //await page.pause();
    // using get by title locator to click on selenium grid online link
    ///await expect(page.getByTitle().toHaveText('Selenium Grid Online | Run Selenium Test On Cloud'));
    await page.getByRole('button',{name:'Get Sum'}).click();

    //Locating ELements by text

    await expect(page.getByText('simple form demo')).toBeVisible();

    await page.getByRole('link',{name:'Login'}).click();

    //Locating Elements by Label
    await page.getByLabel('Email Address').fill('sandeep@mail.com')
    await page.getByPlaceholder('password').fill('Test@123')

    await page.getByAltText('TestMu AI').click();

    

})


test('TC 17: Login to SauceDemo using test id attribute', async ({page})=>{

await page.goto(process.env.Sauce_BASE_URL);
await expect(page).toHaveTitle("Swag Labs");
await page.getByTestId('username').fill("standard_user");
await page.getByTestId('password').fill("secret_sauce");
await page.getByTestId('login-button').click();
await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html")
})


test('TC 18@paytm TC 18: Paytm multiple tabs example', async ({browser})=>{

const paytmcontext=await browser.newContext();
const page= await paytmcontext.newPage();

await page.goto(process.env.paytmurl);
await page.locator("//li[text()='Recharge & Bills']").hover();

const mobileRechargeLink=await page.locator("//li[text()='Recharge & Bills']/..//a[text()='Mobile Recharge']");

const [newPage]=await Promise.all([

    paytmcontext.waitForEvent('page'),
    mobileRechargeLink.click()
])

// this will come into picture only when a new tab is opened 
await newPage.waitForLoadState();
await newPage.locator("//label[normalize-space()='Postpaid']").click();


logger.info("TC18 is completed")

})



test('TC 19@abc admin and user interaction', async ({ browser }) => {
  // Create two completely isolated "incognito" sessions
  const adminContext = await browser.newContext();
  const userContext = await browser.newContext();

  // Create tabs in those sessions
  const adminPage = await adminContext.newPage();
  const userPage = await userContext.newPage();

  // Admin performs an action
  await adminPage.goto('https://www.instagram.com/');
  
  // User sees the result
  await userPage.goto('https://paytm.com/');

  // Clean up
  await adminContext.close();
  await userContext.close();
});

test('TC 20 @abc handling http authentication', async ({browser})=>{

const context=await browser.newContext({
    httpCredentials:{
        username:'admin',
        password:'admin'
    }
});
const page= await context.newPage();
await page.goto("https://the-internet.herokuapp.com/basic_auth");
await expect(page.locator("//h3/../p")).toHaveText("Congratulations! You must have the proper credentials.")



})

test('TC 21 File download', async ({page})=>{
    await page.goto("https://www.selenium.dev/downloads/");

    const [download]= await Promise.all([
        page.waitForEvent('download'),
        page.locator("//div[@class='row justify-content-center px-5 pb-5']//div[3]//div[1]//div[2]//p[2]//a[1]").click()
    ])

    // save downloaded file to desired location
   const downloadPath='C:\\Users\\Sandeep\\Desktop\\Codetobepushed\\downloadedfiles\\'+ download.suggestedFilename();

   await download.saveAs(downloadPath);
   console.log("Download saved to "+ downloadPath)
   


})

test('@keyboard TC 22 keyboard events', async ({page})=>{
    await page.goto("https://www.saucedemo.com/");
    const UsernameVisible =await page.locator("#user-name").getAttribute('placeholder') 
    const UsernameTextField=await page.locator("#user-name").fill("standard_user");

    const enteredTxt=await page.locator("#user-name").inputValue();
    const swaglabstext=await page.locator("//div[@class='login_logo']").textContent();

    console.log(UsernameVisible)
    console.log(enteredTxt)
    console.log(swaglabstext)
  
    await page.keyboard.press('ArrowLeft');
    await page.keyboard.press('ArrowLeft');
    await page.keyboard.press('Backspace')
    await page.keyboard.press('Delete')

    await page.keyboard.type('D')
    await page.keyboard.press('Tab')
    await page.waitForTimeout(4000)
    await page.keyboard.press('Enter')

})

// to handle api testing using playwright 

//CRUD - Create , Read , Update , Delete
test('TC 23: API testing using playwright', async ({page})=>{
        const apicontext = await request.newContext();
        const response= (await apicontext).get("https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41")
        console.log((await response).status());
        console.log((await response).statusText());
})


test('@Frame TC 24 - Handling Iframes', async ({ page }) => {
    await page.goto("https://the-internet.herokuapp.com/iframe");
    
    // 1. Close the modal if it exists (use a more resilient selector)
    const closeButton = page.locator('div[aria-label="Close"]');
    if (await closeButton.isVisible()) {
        await closeButton.click();
    }

    // 2. Define the Frame and Editor locators
    const iframe = page.frameLocator("#mce_0_ifr");
    const editorBody = iframe.locator("#tinymce");

    // 3. FIX: Ensure the editor is ready and editable
    // We click it first, then use evaluate to clear it, then type.

    
    // This bypasses the strict 'fill' check if the library is still 'initializing'
    await editorBody.evaluate(node => node.setAttribute('contenteditable', 'true'));
    await page.waitForTimeout(3000); // Wait a bit for the editor to be fully ready
    await editorBody.click();
    await editorBody.clear();
    await editorBody.fill("This is handling iframe using playwright");

    // 4. Verify the result
    await expect(editorBody).toHaveText("This is handling iframe using playwright");
});

test('@Scroll TC 25 - Handling scrolling in playwright', async ({ page }) => {
    await page.goto("https://www.selenium.dev/downloads/");
    await page.waitForTimeout(4000)
    await page.evaluate(()=> window.scrollBy(0,400));
    await page.waitForTimeout(4000)
     await page.evaluate(()=> window.scrollBy(0,400));
await page.waitForTimeout(4000)
await page.evaluate(()=> window.scrollBy(0,-400));
});