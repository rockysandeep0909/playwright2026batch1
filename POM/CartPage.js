import 'dotenv/config';

export class CartPage {



// Region 1
constructor(page){
    this.page=page;
    this.checkout= page.locator("//button[@id='checkout']");
    this.continueshopping= page.locator("//button[@id='continue-shopping']");
    this.removecart= page.locator("//button[@id='remove-sauce-labs-backpack']");



}

// Region 2

    async clickonCheckout(){
      await this.checkout.click();
    }

    }







