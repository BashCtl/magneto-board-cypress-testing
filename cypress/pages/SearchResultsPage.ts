/// <reference types="cypress-xpath" />

class SearchResultPage {

    private sortDropdown = () => cy.get('#sorter').first()
    private selectedSort = () => cy.get('#sorter option[selected="selected"]', { timeout: 15000 }).first()
    private priceElements = () => cy.get('.price')
    private sortArrow = () => cy.get('.sorter').first()
    private productIemsList = () => cy.get('.product-item-info')
    private pageTitle = () => cy.get('.page-title span')
    private searchField = () => cy.get('input#search')

    selectSortOption(value) {
        cy.wait(1000)
        this.sortDropdown().select(value)
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
        this.sortArrow().then(arrow => {
            if (arrow.find('.sort-asc').length > 0) {
                cy.wait(1000)
                cy.wrap(arrow.find('.sort-asc')).realClick()
                this.sortArrow().find('.sort-desc').should('be.visible')
            }
        })
        return this
    }

    setAscendingOrder() {
        this.sortArrow().then((arrow) => {
            if (arrow.find('.sort-desc').length > 0) {
                cy.wait(1000)
                cy.wrap(arrow.find('.sort-desc')).realClick()
                this.sortArrow().find('.sort-asc').should('be.visible')
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

    priceShouldBeDescending() {
        this.priceElements().then((els) => {
            const prices = Array.from(els, el =>
                parseInt(el.innerText.replace('$', '')))
            const descPrices = Array.from(els, el =>
                parseInt(el.innerText.replace('$', ''))).sort((a, b) => b - a)
            expect(prices).to.deep.eq(descPrices)
        })
        return this
    }

}

export default new SearchResultPage()