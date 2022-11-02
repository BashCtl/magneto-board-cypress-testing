import homePage from '../../pages/HomePage'
import searchResultPage from '../../pages/SearchResultsPage'
import loginPage from '../../pages/LoginPage'

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});

describe('Search Result test', () => {

    beforeEach(function () {

        cy.fixture('users/user')
            .then(function (user) {
                this.user = user
                loginPage.navigate()
                    .login(this.user)
            })
    })

    it.only('Sort option test', function () {
        homePage.navigate()
            .searchProduct(this.user.jacket)
        searchResultPage.setAscendingOrder()
            // .productItemsShouldBeVisible()
            // .selectSortOption(this.user.sortOption.price)
            // .productItemsShouldBeVisible()
            // .getPrices()
    })

})