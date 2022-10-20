import homePage from '../../pages/HomePage'
import loginPage from '../../pages/LoginPage'

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});


describe('Navigation tests on home page', () => {

    beforeEach(() => {
        cy.clearCookies()
        cy.fixture('users/user').then((user) => {
            loginPage.navigate()
                .login(user)
            homePage.navigate()
        })

    })

    it('Navigate to women jackets products', () => {
        homePage.navigateToJackets('Women')
            .menuShouldBeActive('Women')
            .pageTitleShouldContain('Jackets')
    })

    it('Navigate to men jackets products', () => {
        homePage.navigateToJackets('Men')
            .menuShouldBeActive('Men')
            .pageTitleShouldContain('Jackets')
    })

    it('Navigate to women hoodies page', () => {
        homePage.navigateToHoodies('Women')
            .menuShouldBeActive('Women')
            .pageTitleShouldContain('Hoodies & Sweatshirts')
    })

    it('Navigate to men hoodies page', () => {
        homePage.navigateToHoodies('Men')
            .menuShouldBeActive('Men')
            .pageTitleShouldContain('Hoodies & Sweatshirts')
    })

    it('Navigate to women page', () => {
        homePage.navigateToMenu('Women')
            .pageTitleShouldContain('Women')
    })

    it('Navigate to men page', () => {
        homePage.navigateToMenu('Men')
            .pageTitleShouldContain('Men')
    })

    it('Navigate to women bottoms page', () => {
        homePage.navigateToBottoms('Women')
            .menuShouldBeActive('Women')
            .pageTitleShouldContain('Bottoms')
    })

    it('Navigate to men bottoms page', () => {
        homePage.navigateToBottoms('Men')
            .menuShouldBeActive('Men')
            .pageTitleShouldContain('Bottoms')
    })

    it('Navigate to women tops menu', () => {
        homePage.navigateTops('Women')
            .menuShouldBeActive('Women')
            .pageTitleShouldContain('Tops')
    })

    it('Navigate to men tops menu', () => {
        homePage.navigateTops('Men')
            .menuShouldBeActive('Men')
            .pageTitleShouldContain('Tops')
    })

})