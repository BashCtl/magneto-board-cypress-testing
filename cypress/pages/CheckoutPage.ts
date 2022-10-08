/// <reference types="cypress" />

class CheckoutPage {


    private firstnameInput = () => cy.get('[name="firstname"]')
    private lastnameInput = () => cy.get('[name="lastname"]')
    private companyInput = () => cy.get('[name="company"]')
    private addressFirstLine = () => cy.get('[name="street[0]"]')
    private addressSecondLine = () => cy.get('[name="street[1]"]')
    private addressThirdLine = () => cy.get('[name="street[2]"]')
    private cityInput = () => cy.get('[name="city"]')
    private selectStateDropdown = () => cy.get('[name="region_id"]')
    private zipCodeInput = () => cy.get('[name="postcode"]')
    private selectCountryDropdown = () => cy.get('[name="country_id"]')
    private phoneNumberInput = () => cy.get('[name="telephone"]')
    private shippingMethodFixedRadioBtn = () => cy.get('#label_method_flatrate_flatrate')
    private shippingMethodTableRateRadioBtn = () => cy.get('#label_method_bestway_tablerate')
    private nextBtn = () => cy.get('button.continue')


    productShouldBePresent(product) {
        cy.contains(product, { timeout: 20000 }).should('be.visible')
        return this
    }
}

export default new CheckoutPage()