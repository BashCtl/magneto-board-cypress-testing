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

    it('Sort by price ascendig order test', function () {
        homePage.navigate()
            .searchProduct(this.user.jacket)
        searchResultPage.searchFieldShouldHaveValue(this.user.jacket)
            .pageTitleShouldContain(this.user.jacket)
            .setAscendingOrder()
            .selectSortOption(this.user.sortOption.price)
            .priceShouldBeAscending()
    })

})