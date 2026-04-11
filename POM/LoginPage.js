import 'dotenv/config';

class LoginPage{



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

      async validLogin(){
       await this.username.fill("standard_user");
       await this.password.fill("secret_sauce");
       await this.loginButton.click();

      }

    }

module.exports={LoginPage};







