/// <reference types="cypress" />

import createAccountPage from '../../pages/SignUpPage'
import accountPage from '../../pages/AccountPage'
import randomData from '../../utils/RandomData'

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});


describe('Account Creation Specification', () => {



    beforeEach(function () {
        cy.clearCookies()
        createAccountPage.navigate()
        cy.fixture('users/user').then((user) => {
            this.user = user
        })
        cy.fixture('users/userErrors').then((error) => {
            this.error = error
        })
    })

    it('Positive: Create Valid Account', function () {
        createAccountPage.enterFirstName(this.user.firstname)
            .enterLastname(this.user.lastname)
            .checkNewsletter()
            .enterEmail(randomData.getEmail())
            .enterPassword(this.user.password)
            .enterConfirmPassword(this.user.confirmPass)
            .clickCreateAccountBtn()
        accountPage.msgAlertShouldContain(this.user.successRegMsg)
    })

    it('Negetive: Create User Without First Name', function () {
        createAccountPage.enterFirstName(' ')
            .enterLastname(this.user.lastname)
            .checkNewsletter()
            .enterEmail(randomData.getEmail())
            .enterPassword(this.user.password)
            .enterConfirmPassword(this.user.confirmPass)
            .clickCreateAccountBtn()
            .checkFristNameError(this.error.firstNameError)

    })

    it('Negetive: Create User Without Lastname', function () {
        createAccountPage.enterFirstName(this.user.firstname)
            .enterLastname(' ')
            .checkNewsletter()
            .enterEmail(randomData.getEmail())
            .enterPassword(this.user.password)
            .enterConfirmPassword(this.user.confirmPass)
            .clickCreateAccountBtn()
            .checkLastnameError(this.error.lastnameError)
    })

    it('Negetive: Create User With Empty Email Field', function () {
        createAccountPage.enterFirstName(this.user.firstname)
            .enterLastname(this.user.lastname)
            .checkNewsletter()
            .enterEmail(' ')
            .enterPassword(this.user.password)
            .enterConfirmPassword(this.user.confirmPass)
            .clickCreateAccountBtn()
            .checkEmailError(this.error.emptyEmailError)
    })

    it('Negetive: Create User With Invalid Email', function () {
        createAccountPage.enterFirstName(this.user.firstname)
            .enterLastname(this.user.lastname)
            .checkNewsletter()
            .enterEmail(this.user.invalidEmail)
            .enterPassword(this.user.password)
            .enterConfirmPassword(this.user.confirmPass)
            .clickCreateAccountBtn()
            .checkEmailError(this.error.invalidEmailError)
    })

    it('Negetive: Create User With Already Registered Email Address', function () {
        createAccountPage.enterFirstName(this.user.firstname)
            .enterLastname(this.user.lastname)
            .checkNewsletter()
            .enterEmail(this.user.email)
            .enterPassword(this.user.password)
            .enterConfirmPassword(this.user.confirmPass)
            .clickCreateAccountBtn()
            .checkAllertMsg(this.error.alreadyRegisteredErr)
    })

    it('Negetive: Create User With Invalid Confirm Password', function () {
        createAccountPage.enterFirstName(this.user.firstname)
            .enterLastname(this.user.lastname)
            .checkNewsletter()
            .enterEmail(randomData.getEmail())
            .enterPassword(this.user.password)
            .enterConfirmPassword(this.user.invalidPass)
            .clickCreateAccountBtn()
            .checkPasswordConfirmError(this.error.missmathcPassError);
    })

    it('Negetive: Create User With Empty Confirm Password Field', function () {
        createAccountPage.enterFirstName(this.user.firstname)
            .enterLastname(this.user.lastname)
            .checkNewsletter()
            .enterEmail(randomData.getEmail())
            .enterPassword(this.user.password)
            .enterConfirmPassword(' ')
            .clickCreateAccountBtn()
            .checkPasswordConfirmError(this.error.emptyConfirmPassError);
    })

})