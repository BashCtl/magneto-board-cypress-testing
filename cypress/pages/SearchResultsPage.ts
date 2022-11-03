/// <reference types="cypress-xpath" />

class SearchResultPage {

    private sortDropdown = () => cy.get('#sorter').first()
    private selectedSort = () => cy.get('#sorter option[selected="selected"]', { timeout: 15000 }).first()
    private priceElements = () => cy.get('.price')
    private sortAscArrow = () => cy.get('.action.sort-asc')
    private sortDescArrow = () => cy.get('.action.sort-desc')
    private productIemsList = () => cy.get('.product-item-info')
    private pageTitle = () => cy.get('.page-title span')
    private searchField = () => cy.get('input#search')

    selectSortOption(value) {
        // need to implemet proper wait
        cy.wait(2000)
        this.sortDropdown().select(value)
        // this.selectedSort().should('contains', value)
        return this
    }

    selectedSortValueShouldBe(value) {
        this.selectedSort().should('contain', value)
        return this
    }

    searchFieldShouldHaveValue(value) {
        this.searchField().should('have.value', value)
        return this
    }

    pageTitleShouldContain(text) {
        this.pageTitle().should('contain', text)
        return this
    }

    productItemsShouldBeVisible() {
        this.productIemsList().should('be.visible')
        this.productIemsList().should('have.length.at.least', 1)
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
                //need to implemet better wait for page loadig
                cy.wait(2000)
                cy.wrap(arrow).realClick({ pointer: "pen" })
                this.sortAscArrow().eq(0).should('be.visible')
            }
        })
        return this
    }


    priceShouldBeAscending() {
        this.priceElements().then((els) => {
            const prices = Array.from(els, el =>
                parseInt(el.innerText.replace('$', '')))
            const ascPrices = Array.from(els, el =>
                parseInt(el.innerText.replace('$', ''))).sort((a, b) => a - b)
            expect(prices).to.deep.eq(ascPrices)
        })
        return this
    }

}

export default new SearchResultPage()