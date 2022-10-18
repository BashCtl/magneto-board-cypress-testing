/// <reference types="cypress" />

class HomePage {


    private pageTitle = () => cy.get('[data-ui-id="page-title-wrapper"]')
    private searchInput = () => cy.get('#search')
    private womenMenu = () => cy.contains('Women')
    private topsMenu = () => cy.contains('Tops')
    private jacketsMenu = () => cy.contains('Jackets')


    navigate() {
        cy.visit('')
    }


    searchProduct(product) {
        this.searchInput().clear().type(product)
        return this
    }

    navigateToWomenJaksts() {
        this.jacketsMenu().invoke('show').click({ force: true })
        return this
    }

    navigateToWomenPage() {
        this.womenMenu().click()
        return this
    }

    pageTitleShouldContain(text) {
        this.pageTitle().should('contain', text)
        return this
    }

}

export default new HomePage()
