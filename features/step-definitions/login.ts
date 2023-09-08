import { Given, When, Then } from '@wdio/cucumber-framework';
import LoginPage from '../pageobjects/loginPage';
import ProfilePage from '../pageobjects/profilePage';
import {browser} from "@wdio/globals";
const credentials = require('../config/credentials');

Given(/^I am on the login page$/, async () => {
    await browser.url('/login?continue_to=%2F');
});

When(/^I login with \"([^\"]*)\"$/, async (user) => {
    await LoginPage.login(credentials[user]['email'], credentials[user]['password'])
});

Then(/^I see error message displayed$/, async () => {
    await ProfilePage.verifyErrorIsDisplayed();
});

Then(/^I should see user is logged in successfully$/, async () => {
    await ProfilePage.verifyUserAccountDetailIsDisplayed();
});
