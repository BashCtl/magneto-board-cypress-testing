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

    it('Positive: Login with valid cridentials', function () {
        loginPage.enterEmail(this.user.email)
            .enterPassword(this.user.password)
            .clickSingInBtn()
        accountPage.checkPageTitle('My Account')
    })

})