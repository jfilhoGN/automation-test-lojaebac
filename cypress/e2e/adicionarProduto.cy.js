import Home from "../support/pages/home/home"
import SearchProduct from "../support/pages/searchProduct/searchProduct"
import Product from "../support/pages/product/product"

describe('Scenario - Add product to cart', () => {
  it('Waits for the user to be able to add a product to the cart successfully', () => {
    cy.visit('/')
    const product = 'Caesar Warm-Up Pant'
    Home.clickButtonBuy()
    SearchProduct.clickPageNumber('2')
    SearchProduct.clickProductByTitle(product)
    Product.chooseSize('32')
    Product.chooseColor('Gray')
    Product.clickPlusItem()
    Product.clickBuyProduct()
    Product.validateAmountInCart('70,00')
    Product.validateMessageSucessCart(product)
  })

})