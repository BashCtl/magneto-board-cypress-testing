/// <reference types="cypress" />

import createAccountPage from '../../pages/CreateAccountPage'
import accountPage from '../../pages/AccountPage'
import randomData from '../../utils/RandomData'

describe('Account Creation Specification', () => {

    beforeEach(function () {
        createAccountPage.navigate()
        cy.fixture('users/createUser').then((user) => {
            this.user = user
        })
    })

    it('Create Valid Account', function () {
        createAccountPage.enterFirstName(this.user.firstname)
            .enterLastname(this.user.lastname)
            .checkNewsletter()
            .enterEmail(randomData.getEmail())
            .enterPassword(this.user.password)
            .enterConfirmPassword(this.user.confirmPass)
            .clickCreateAccountBtn()
        accountPage.msgAlertShouldContain(this.user.successRegMsg)
    })

})