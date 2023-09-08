export class Shared {
   static async acceptAndCloseCookiesIsDisplayed () {
        return await $("//a[normalize-space()='Accept & close']").isDisplayed();
    }
    static async clickOnacceptAndCloseCookiesLink () {
        return await $("//a[normalize-space()='Accept & close']").click();
    }
}