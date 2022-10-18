import homePage from '../../pages/HomePage'
import loginPage from '../../pages/LoginPage'

describe('Navigation tests on home page', () => {


    beforeEach(() => {
        cy.fixture('users/user').then((user) => {
            loginPage.navigate()
                .login(user)
        })
        homePage.navigate()
    })

    it('Navigate to women jackets products', () => {
        homePage.navigateToWomenJaksts()
            .pageTitleShouldContain('Jackets')
    })

    it('Navigate to women page', () => {
        homePage.navigateToWomenPage()
            .pageTitleShouldContain('Women')
    })

})