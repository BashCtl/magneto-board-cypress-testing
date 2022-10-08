import loginPage from '../../pages/LoginPage'
import menJacketsPage from '../../pages/MenJacketsPage'
import itemPage from '../../pages/ItemPage'
import checkoutPage from '../../pages/CheckoutPage'


describe('Checkout test', function () {


    beforeEach(function () {
        cy.fixture('users/user').then(function (user) {
            this.user = user
            loginPage.navigate()
                .login(this.user)
        })
        cy.fixture('users/products').then((products) => {
            this.products = products
        })

    })

    it('Select man jacket and verify quatity functionality', function () {
        const jacket = this.products.jackets.man[0]
        menJacketsPage.navigate()
            .selectProduct(jacket.title)
        itemPage.checkItemTitle(jacket.title)
            .checkItemPrice(jacket.price)
            .checkItmeQuatity(1)
            .enterQuatity(jacket.quatity)
            .checkItmeQuatity(jacket.quatity)
    })

    it('Select man jacket and verify size functionality', function () {
        const jacket = this.products.jackets.man[0]
        menJacketsPage.navigate()
            .selectProduct(jacket.title)
        itemPage.selectSize(jacket.size)
            .checkSelectedSize(jacket.size)
    })

    it('Select man jacket and verify color functionality', function () {
        const jacket = this.products.jackets.man[0]
        menJacketsPage.navigate()
            .selectProduct(jacket.title)
        itemPage.selectColor(jacket.color)
            .checkSelectedColor(jacket.color)
    })

    it.only('Select man jacket and verify product presence in checkout', function () {
        const jacket = this.products.jackets.man[0]
        menJacketsPage.navigate()
            .selectProduct(jacket.title)
        itemPage.selectSize(jacket.size)
            .selectColor(jacket.color)
            .enterQuatity(jacket.quatity)
            .clickAddToCartBtn()
            .waitUntilAddedToCart()
            .clickOnCartIcon()
            .proceedToCheckout()
        checkoutPage.productShouldBePresent(jacket.title)
    })


})