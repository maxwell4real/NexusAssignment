import { Given, When } from '@wdio/cucumber-framework';
import BasketPage from "../pageobjects/basketPage";


Given(/^I add product$/, async () => {
    await BasketPage.clickAddProduct()
});

Given(/^I select Hourly pass package$/, async () => {
    await BasketPage.selectHourlyPackage()
});

When(/^I enter "([^"]*)" in the product name$/, async (text) => {
    await BasketPage.typeProductName(text);
});

When(/^I add hourly pass package$/, async () => {
    await BasketPage.addHourlyPackage()
});

When(/^I delete the product added$/, async () => {
    await BasketPage.deleteProduct()
});

When(/^I confirm to delete the product$/, async () => {
    await BasketPage.confirmDeleteProduct()
});

When(/^I verify text "([^"]*)" displayed$/, async (text) => {
    await BasketPage.verifyDeletingRecordText(text);
});