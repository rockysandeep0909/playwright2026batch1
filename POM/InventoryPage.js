export class InventoryPage{

// Region 1
    constructor(page){
        this.page=page;
        this.addToCartBackPack= page.locator("//button[@data-test='add-to-cart-sauce-labs-backpack']");
        this.cartImage=page.locator("//span[@class='shopping_cart_badge']");
    }

// Region 2

      async addBackPackToCart(){
        await this.addToCartBackPack.click();


}


    async goback(){
        await this.page.goback();
    }

    async clickCartImage(){
        await this.cartImage.click();
    }

}