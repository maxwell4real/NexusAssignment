class ProfilePage{

    public get error(){
        return $(`.css-5okgsa-euiText-s-euiTextColor-default-euiCallOut__description.euiText`);
    }

    public get userAccount(){
        return $(`[aria-label='Adrian Palacios']`);
    }

    public get accountDetail(){
        return $(`.euiHeaderSection--dontGrow [aria-label='Adrian Palacios']`);
    }

    public get logout(){
        return $(`.euiHeaderSection--dontGrow [aria-label='Adrian Palacios']`);
    }


    async verifyErrorIsDisplayed(){
        await expect(this.error).toHaveTextContaining('The email or password is incorrect');
    }

    async verifyUserAccountDetailIsDisplayed(){
        await this.userAccount.click();
        await this.accountDetail.isDisplayed()
    }

    async logout(){
        await this.accountDetail.click();
    }

}
export default new ProfilePage();