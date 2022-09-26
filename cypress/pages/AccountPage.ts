/// <reference types="cypress" />

class AccountPage {

    private msgAlert = () => cy.get('[role="alert"].messages')

    navigate() {
        cy.visit('/customer/account/')
    }

    msgAlertShouldContain(text: string) {
        this.msgAlert().should('contain', text)
        return this
    }

}

export default new AccountPage()