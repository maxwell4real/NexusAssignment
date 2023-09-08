import { Given, When, Then } from '@wdio/cucumber-framework';
import ForgetPassPage from '../pageobjects/forgetPasswordPage';
import LoginPage from '../pageobjects/loginPage';


Given(/^I click on forgot password link$/, async () =>  {
    await LoginPage.clickOnForgetPassBtn();
});

Then(/^I see password success notification$/,async () => {
  await ForgetPassPage.verifyPasswordResetMessageisDisplayed();
});
