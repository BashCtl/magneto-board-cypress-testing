import loginPage from '../../pages/LoginPage'
import accountPage from '../../pages/AccountPage'

describe('Login tests', () => {

    beforeEach(function () {
        loginPage.navigate()
        cy.fixture('users/user').then((user) => {
            this.user = user
        })
    })

    it.only('Positive: Login with valid cridentials', function () {
        loginPage.enterEmail(this.user.email)
            .enterPassword(this.user.password)
            .clickSingInBtn()
        accountPage.checkPageTitle('My Account')
    })

})