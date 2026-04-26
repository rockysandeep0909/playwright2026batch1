import { Given, When, Then } from '@cucumber/cucumber';
import playwright from 'playwright';
import expect from '@playwright/test';
import { LoginPage } from '../../POM/LoginPage.js';


Given('I am in login page of saucedemo', async function () {
    console.log("Now comes the playwright features in cucumber")
    this.browser = await playwright.chromium.launch({ headless: false })
    this.context = await this.browser.newContext();
    this.page = await this.context.newPage();

    this.loginPage = new LoginPage(this.page);
    await this.loginPage.gotoLoginPage();
    console.log("Now comes the playwright features in cucumber")

});

When('I enter valid username', async function () {
    console.log(" javascript code to enter the username")
    await this.loginPage.enterUsername();
});

When('I enter valid password', async function () {
    console.log(" javascript code to enter the password")
    await this.loginPage.enterPassword();
});

When('I click on login button', async function () {
    console.log("Login button to be clicked")
    await this.loginPage.clickLoginButton();
});

Then('user should be redirected to Saucedemo Inventory page', function () {
    console.log(" this is the daily job of tester ")
});

When('I enter invalid password', function () {
    console.log("this is invalid password , memory loss")
});

When('I enter invalid username', function () {
    console.log("invalid username .. please check once again")
});

When('I enter username {string} and password {string}', async function (username, password) {
await this.loginPage.enterUsername(username)
await this.loginPage.enterPassword(password)
});
