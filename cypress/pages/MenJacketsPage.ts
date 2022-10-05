/// <reference types="cypress" />

class MenJackets {
    private productItem = () => cy.get('.product .details')

    navigate() {
        cy.visit('/men/tops-men/jackets-men.html')
        return this
    }

    selectProduct(productName) {
        this.productItem().contains(productName)
            .click()
        return this
    }
}

export default new MenJackets()