/// <reference types="cypress" />

class CreateAccountPage {

    private firstNameInput = () => cy.get('#firstname')
    private lastnameInput = () => cy.get('#lastname')
    private newslettersCheckbox = () => cy.get('#is_subscribed')
    private emailInput = () => cy.get('#email_address')
    private passwordInput = () => cy.get('#password')
    private passwordConfirmInput = () => cy.get('#password-confirmation')
    private createAccountBtn = () => cy.get('[title="Create an Account"]')
    private firstNameError = () => cy.get('#firstname-error')
    private lastnameError = () => cy.get('#lastname-error')
    private emailAddressError = () => cy.get('#email_address-error')
    private passwordConfirmError = () => cy.get('#password-confirmation-error')
    private alertLabel = () => cy.get('div[role="alert"]')


    navigate() {
        cy.visit('/customer/account/create/')
    }

    enterFirstName(name: string) {
        this.firstNameInput().clear().type(name)
        return this
    }

    enterLastname(lastname: string) {
        this.lastnameInput().clear().type(lastname)
        return this
    }

    checkNewsletter() {
        this.newslettersCheckbox().check()
        return this
    }

    uncheckNewsletter() {
        this.newslettersCheckbox().uncheck()
        return this
    }

    enterEmail(email: string) {
        this.emailInput().clear().type(email)
        return this
    }

    enterPassword(password: string) {
        this.passwordInput().clear().type(password)
        return this
    }

    enterConfirmPassword(confirmPass: string) {
        this.passwordConfirmInput().clear().type(confirmPass)
        return this
    }

    clickCreateAccountBtn() {
        this.createAccountBtn().click()
        return this
    }

    checkFristNameError(text) {
        this.firstNameError().should('have.text', text)
        return this
    }

    checkLastnameError(text) {
        this.lastnameError().should('have.text', text)
        return this
    }

    checkEmailError(text) {
        this.emailAddressError().should('contain', text)
        return this
    }

    checkPasswordConfirmError(text) {
        this.passwordConfirmError().should('have.text', text)
        return this
    }

    checkAllertMsg(text) {
        this.alertLabel().should('contain', text)
        return this
    }
}

export default new CreateAccountPage()