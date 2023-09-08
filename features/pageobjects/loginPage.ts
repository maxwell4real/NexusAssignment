class LoginPage {
    
    public get forgetPassBtn(){
        return $('div.euiText.css-v6chsw-euiText-xs-euiTextAlign-center > b > a');
    }

    public get inputUsername () {
        return $('input[name="Email"]');
    }

    public get inputPassword () {
        return $('input[name="Password"]');
    }

    public get btnSubmit () {
        return $('.eui-textTruncate');
    }


    public async login (username: string, password: string) {
        await this.inputUsername.waitForDisplayed();
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.waitForClickable();
        await this.btnSubmit.click();
    }

    public async clickOnForgetPassBtn(){
        await this.forgetPassBtn.waitForClickable();
        await (await this.forgetPassBtn).click();
    }

    public async clickOnForgetPassBtn(){
        await this.forgetPassBtn.waitForClickable();
        await (await this.forgetPassBtn).click();
    }



}

export default new LoginPage();
