import {test} from '@playwright/test';


test("10 - Launch amazon in headless mode", async ({page})=>{

 await page.goto("https://www.amazon.in/")

    
})



