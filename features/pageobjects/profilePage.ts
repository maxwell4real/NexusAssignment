class ProfilePage{

    public get error(){
        return $(`.css-5okgsa-euiText-s-euiTextColor-default-euiCallOut__description.euiText`);
    }

    public get userAccount(){
        return $(`CSS-LOCATOR-FOR-ACCOUNT`);
    }

    async verifyErrorIsDisplayed(){
        await expect(this.error).toHaveTextContaining('The email or password is incorrect');
    }

    async verifyUserAccountDetailIsDisplayed(){
        await expect(this.userAccount).toHaveTextContaining('Welcome');
    }

}
export default new ProfilePage();