class ForgetPassword{

    public get inputEmail() {
        return $(`//input[@id='forgottenPwd-email']`);
    }

    public get submitBtn(){
        return $(`button[class='btn btn-primary btn-block']`);
    }

    async clickOnSubmitBtn(){
        await (await this.submitBtn).click();
    }

    public get passwordResetSuccessMsg(){
        return $(`.euiForm > .css-183fdb8-euiText-constrainedWidth-m.euiText`);
    }

    async verifyPasswordResetMessageisDisplayed(){
        await expect(this.passwordResetSuccessMsg).toBeDisplayed();
    }

}

export default new ForgetPassword();