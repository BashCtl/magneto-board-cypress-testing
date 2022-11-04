/// <reference types="cypress-xpath" />

class ItemPage {

    private itemTitle = () => cy.get('.base')
    private priceLabel = () => cy.get('.product-info-price .price')
    private sizeSelector = (size) => cy.get(`.text[option-label="${size}"]`, { timeout: 15000 })
    private selectedSizeLabel = () => cy.get('.size span:nth-of-type(2)')
    private colorSelector = (color) => cy.get(`.color[option-label="${color}"]`, { timeout: 15000 })
    private selectedColorLabel = () => cy.get('.color span:nth-of-type(2)')
    private quatityInput = () => cy.get('#qty')
    private addToCartBtn = () => cy.get('#product-addtocart-button span')
    private cartIcon = () => cy.get('a.showcart')
    private checkoutBtn = () => cy.get('#top-cart-btn-checkout', { timeout: 20000 })
    private itemAddedAlert = () => cy.xpath('//*[contains(@data-bind,"prepareMessage")]', { timeout: 15000 })

    clickAddToCartBtn() {
        this.addToCartBtn().click()
        return this
    }

    waitUntilAddedToCart() {
        this.itemAddedAlert().should('be.visible')
        return this
    }

    clickOnCartIcon() {
        this.cartIcon().realClick({ position: "center" })
        return this
    }

    proceedToCheckout() {
        this.checkoutBtn()
            .realHover()
            .click({ force: true })
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