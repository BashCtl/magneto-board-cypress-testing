/// <reference types="cypress" />

class LoginPage {

    private emailInput = () => cy.get('#email')
    private passwordInput = () => cy.get('#pass')
    private signInBtn = () => cy.get('.login.primary')

    navigate() {
        cy.visit('/customer/account/login')
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
}

export default new LoginPage()