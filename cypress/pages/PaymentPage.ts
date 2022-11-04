/// <reference types="cypress" />

class PaymentPage {

    private billingAddressCheckbox = () => cy.get('[for="billing-address-same-as-shipping-checkmo"]')
    private placeOrderBtn = () => cy.get('button.checkout')
    private applyDiscountArrow = () => cy.get('#block-discount-heading')
    private discountCodeInput = () => cy.get('#discount-code')
    private applyDiscountBtn = () => cy.get('button.action-apply')
    private pageTitleWrapper = () => cy.get('[data-ui-id="page-title-wrapper"]', { timeout: 20000 })
    private continueShoppingBtn = () => cy.contains('a.continue')

    clickBillingAddressCheckbox() {
        this.billingAddressCheckbox().click()
        return this
    }

    clickPlaceOrderBtn() {
        cy.wait(1500)
        this.placeOrderBtn().click()
        return this
    }

    checkPageTitleWrapper(title) {
        this.pageTitleWrapper().should('contain', title)
        return this
    }
}

export default new PaymentPage()