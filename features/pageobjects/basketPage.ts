var faker = require('faker');

const randomProduct = faker.name.firstName()

class BasketPage{

    get createProduct(){
        return $(`img[alt='Create new records']`);
    }

    get addProd(){
        return $(`button:nth-of-type(6)  .euiContextMenuItem__text > a > a`);
    }

    get selectProduct(){
        return $(`div:nth-of-type(3) > .css-1yag72h-euiPanel-grow-m-m-plain-hasShadow-isClickable-euiCard-left.euiCard.euiPanel.euiPanel--paddingMedium.euiPanel--plain > .css-1porrk8-euiCard__main-horizontal.euiCard__main > .css-1egn76j-euiCard__content-horizontal.euiCard__content > .css-1422kbt-euiTitle-s.euiCard__title.euiTitle > .euiCard__titleButton`);
    }

    public get productNameInput(){
        return $(`.euiFieldText`);
    }

    get addPackage(){
        return $(`.css-1r1lp5v-euiModal-defaultMaxWidth.euiModal  .css-t8ynyh-euiButtonDisplay-m-defaultMinWidth-fill-primary.euiButton > .css-1bascr2-euiButtonDisplayContent > .eui-textTruncate`);
    }

    public get delete(){
        return $(`.css-s7hl0p-euiButtonDisplay-m-defaultMinWidth-fill-danger.euiButton > .css-1bascr2-euiButtonDisplayContent`);
    }

    public get confirmDelete(){
        return $(`[data-test-subj='confirmModalConfirmButton'] .eui-textTruncate`);
    }

    public get textDeleteRecord(){
        return $(`.css-x1y4l9-euiToastHeader__title`);
    }

    async clickAddProduct(){
        await (await this.createProduct).click();
        await (await this.addProd).click();
    }

    async selectHourlyPackage(){
        await (await this.selectProduct).click();
    }

    async typeRandomProductName(){
        await  (await this.productNameInput).waitForDisplayed();
        await (await this.productNameInput).setValue(randomProduct)
    }

    async addHourlyPackage(){
        await (await this.addPackage).click();
    }

    async deleteProduct(){
        await (await this.delete).click();
    }

    async confirmDeleteProduct(){
        await (await this.confirmDelete).click();
    }

    async verifyDeletingRecordText(text){
        await expect(this.textDeleteRecord).toHaveTextContaining(text);
    }


}

export default new BasketPage();


