/// <reference types="cypress" />

class AccountPage {

    private msgAlert = () => cy.get('[role="alert"].messages')
    private pageTitle = () => cy.get('[data-ui-id="page-title-wrapper"]')

    navigate() {
        cy.visit('/customer/account/')
    }

    msgAlertShouldContain(text: string) {
        this.msgAlert().should('contain', text)
        return this
    }

    checkPageTitle(title) {
        this.pageTitle().should('have.text', title)
        return this
    }

}

export default new AccountPage()