import 'dotenv/config';

export class LoginPage {


// Region 1
constructor(page){
    this.page=page;
    this.username= page.locator("#user-name");
    this.password= page.locator("#password");
    this.loginButton= page.locator("#login-button");



}

// Region 2

      async gotoLoginPage(){
       await this.page.goto(process.env.Sauce_BASE_URL);
      }

      async validLogin(un,ps){
       await this.username.fill(un);
       await this.password.fill(ps);
       await this.loginButton.click();

      }

     async enterUsername(){
        await this.username.fill("standard_user");
     }

      async enterPassword(){
        await this.password.fill("secret_sauce");
      }

      async clickLoginButton(){
        await this.loginButton.click();
      }

    }







