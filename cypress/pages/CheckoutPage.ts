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
    private stateInput = () => cy.get('[name="region"]')
    private zipCodeInput = () => cy.get('[name="postcode"]')
    private selectCountryDropdown = () => cy.get('[name="country_id"]')
    private phoneNumberInput = () => cy.get('[name="telephone"]')
    private shippingMethodFixedRadioBtn = () => cy.get('#label_method_flatrate_flatrate', { timeout: 60000 })
    private shippingMethodTableRateRadioBtn = () => cy.get('#label_method_bestway_tablerate', { timeout: 60000 })
    private nextBtn = () => cy.get('button.continue')


    productShouldBePresent(product) {
        cy.contains(product, { timeout: 30000 }).should('be.visible')
        return this
    }

    enterFirstname(firstname) {
        this.firstnameInput().clear().type(firstname)
        return this
    }

    enterLastname(lastname) {
        this.lastnameInput().clear().type(lastname)
        return this
    }

    enterCompany(companyTitle) {
        this.companyInput().clear().type(companyTitle)
        return this
    }

    enterAddressFirstLine(address) {
        this.addressFirstLine().clear().type(address)
        return this
    }

    enterAddressSecondLine(address) {
        this.addressSecondLine().clear().type(address)
        return this
    }

    enterAddressThirdLine(address) {
        this.addressThirdLine().clear().type(address)
        return this
    }

    enterCity(city) {
        this.cityInput().clear().type(city)
        return this
    }

    selectState(state) {
        this.selectStateDropdown().select(state)
        return this
    }

    enterState(state) {
        this.stateInput().clear().type(state)
        return this
    }

    enterZipCode(zipCode) {
        this.zipCodeInput().clear().type(zipCode)
        return this
    }

    selectCountry(country) {
        this.selectCountryDropdown().select(country)
        return this
    }

    enterPhoneNumber(number) {
        this.phoneNumberInput().clear().type(number)
        return this
    }

    selectBestWayShipping() {
        this.shippingMethodTableRateRadioBtn().click()
        return this
    }

    selectFlateRateShipping() {
        this.shippingMethodFixedRadioBtn().click()
        return this
    }

    clickNextButton() {
        this.nextBtn().click()
    }
}

export default new CheckoutPage()