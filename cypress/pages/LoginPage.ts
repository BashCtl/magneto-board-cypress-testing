/// <reference types="cypress" />

class LoginPage {

    private emailInput = () => cy.get('#email', { timeout: 15000 })
    private passwordInput = () => cy.get('#pass')
    private signInBtn = () => cy.get('.login.primary')
    private errorAlert = () => cy.get('[role="alert"]')

    navigate() {
        cy.clearLocalStorage()
        cy.visit('/customer/account/login')
        return this
    }

    enterEmail(email) {
        this.emailInput().clear().type(email)
        return this
    }

    enterPassword(password) {
        this.passwordInput().clear().type(password)
        return this
    }

    clickSingInBtn() {
        this.signInBtn().click()
        return this
    }

    login(user) {
        this.enterEmail(user.email)
            .enterPassword(user.password)
            .clickSingInBtn()
    }

    checkAlert(message) {
        this.errorAlert().should('contain', message)
        return this
    }
}

export default new LoginPage()