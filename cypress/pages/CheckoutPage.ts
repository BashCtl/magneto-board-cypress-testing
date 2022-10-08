/// <reference types="cypress" />

class CheckoutPage {


    productShouldBePresent(product) {
        cy.contains(product, {timeout: 20000}).should('be.visible')
        return this
    }
}

export default new CheckoutPage()