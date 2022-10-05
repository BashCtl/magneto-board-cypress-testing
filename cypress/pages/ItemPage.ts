/// <reference types="cypress" />

class ItemPage {

    private itemTitle = () => cy.get('.base')
    private priceLabel = () => cy.get('.product-info-price .price')
    private sizeSelector = (size) => cy.get(`.text[option-label="${size}"]`)
    private selectedSizeLabel = () => cy.get('.size span:nth-of-type(2)')
    private colorSelector = (color) => cy.get(`.color[option-label="${color}"]`)
    private selectedColorLabel = () => cy.get('.color span:nth-of-type(2)')
    private quatityInput = () => cy.get('#qty')
    private addToCartBtn = () => cy.ger('#product-addtocart-button')

    clickAddToCartBtn() {
        this.addToCartBtn().click()
    }

    enterQuatity(amount) {
        this.quatityInput().clear().type(amount)
        return this
    }

    selectSize(size) {
        this.sizeSelector(size).click()
        return this
    }

    selectColor(color) {
        this.colorSelector(color).click()
        return this
    }

    checkSelectedSize(size) {
        this.selectedSizeLabel().should('contain', size)
        return this
    }

    checkSelectedColor(color) {
        this.selectedColorLabel().should('contain', color)
        return this
    }

    checkItemTitle(title) {
        this.itemTitle().should('contain', title)
        return this
    }

    checkItemPrice(price) {
        this.priceLabel().should('contain', price)
        return this
    }

    checkItmeQuatity(amount) {
        this.quatityInput().should('have.value', amount)
        return this
    }

}

export default new ItemPage()