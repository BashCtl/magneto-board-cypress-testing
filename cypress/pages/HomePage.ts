/// <reference types="cypress-xpath" />

import { takeWhile } from "../../node_modules/cypress/types/lodash/index"

class HomePage {


    private pageTitle = () => cy.get('[data-ui-id="page-title-wrapper"]')
    private searchInput = () => cy.get('#search')
    private menuItemByName = (itemTitle) => cy.xpath(`//*[text()="${itemTitle}"]/../..`)
    private topsSubmenu = (menu) => cy.xpath(`//*[text()="${menu}"]/../following-sibling::*//span[text()="Tops"]`)
    private bottomsSubmenu = (menu) => cy.xpath(`//*[text()="${menu}"]/../following-sibling::*//span[text()="Tops"]`)
    private jacketSubMenu = (menu) => cy.xpath(`//*[text()="${menu}"]/../following-sibling::*//span[text()="Jackets"]`)
    private hoodiesAndSweatshirtsSubMenu = (menu) => cy.xpath(`//*[text()="${menu}"]/../following-sibling::*//span[text()="Hoodies & Sweatshirts"]`)

    navigate() {
        cy.visit('')
    }


    searchProduct(product) {
        this.searchInput().clear().type(product)
        return this
    }

    navigateToJackets(menu) {
        this.jacketSubMenu(menu).click({ force: true })
        return this
    }

    navigateToHoodies(menu) {
        this.hoodiesAndSweatshirtsSubMenu(menu).click({ force: true })
        return this
    }

    navigateToMenu(menu) {
        this.menuItemByName(menu).click()
        return this
    }

    navigateTops(menu) {
        this.topsSubmenu(menu).click({ force: true })
        return this
    }

    navigateToBottoms(menu) {
        this.bottomsSubmenu(menu).click({ force: true })
        return this
    }

    pageTitleShouldContain(text) {
        this.pageTitle().should('contain', text)
        return this
    }

    menuShouldBeActive(menu) {
        this.menuItemByName(menu).should('have.class', 'has-active')
        return this
    }

}

export default new HomePage()
