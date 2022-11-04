/// <reference types='cypress-tags' />
import loginPage from '../../pages/LoginPage'
import accountPage from '../../pages/AccountPage'

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});


describe('Login tests', () => {

    beforeEach(function () {
        loginPage.navigate()
        cy.fixture('users/user').then((user) => {
            this.user = user
        })
    })

    it(['smoke'], 'Positive: Login with valid cridentials', function () {
        loginPage.enterEmail(this.user.email)
            .enterPassword(this.user.password)
            .clickSingInBtn()
        accountPage.checkPageTitle('My Account')
    })

    it(['smoke'], 'Negative: Login with invalid cridentials', function () {
        loginPage.enterEmail(this.user.email)
            .enterPassword(this.user.invalidPass)
            .clickSingInBtn()
            .checkAlert(this.user.invalidLoginMsg)
    })

})