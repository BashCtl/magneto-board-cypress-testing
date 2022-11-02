/// <reference types="cypress-xpath" />

class SearchResultPage {

    private sortDropdown = () => cy.get('#sorter').first()
    private selectedSort = () => cy.get('#sorter option:selected', { timeout: 15000 })
    private priceElements = () => cy.get('.price')
    private sortAscArrow = () => cy.get('.action.sort-asc')
    private sortDescArrow = () => cy.get('.action.sort-desc')
    private productIemsList = () => cy.get('.product-items').first()

    selectSortOption(value) {
        this.sortDropdown().select(value)
        // this.selectedSort().should('contains', value)
        return this
    }

    productItemsShouldBeVisible() {
        this.productIemsList().should('be.visible')
        return this
    }

    setDescendingOrder() {
        this.sortAscArrow().then(arrow => {
            if (arrow.length) {
                cy.wrap(arrow).click()
            }
        })
        return this
    }

    setAscendingOrder() {
        this.sortDescArrow().then((arrow) => {
            if (arrow.length) {
                this.sortDescArrow().eq(1).click({ force: true })
                this.sortAscArrow().eq(0).should('be.visible')
            }
        })
        return this
    }


    getPrices() {
        this.priceElements().then((els) => {
            const prices = Array.from(els, el =>
                parseInt(el.innerText.replace('$', '')))
            console.log(prices)
        })
        return this
    }

}

export default new SearchResultPage()