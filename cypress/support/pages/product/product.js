import { productElements } from './elements'
class Product {

  static chooseSize(size) {
    cy.get(productElements.liSize(size)).click()
  }

  static chooseColor(color) {
    cy.get(productElements.liColor(color)).click()
  }

  static clickBuyProduct() {
    cy.get(productElements.buttonAddCart).click()
  }

  static validateAmountInCart(amount) {
    cy.get(productElements.divCartAmount).should('contain.text', amount)
  }

  static clickPlusItem(){
    cy.get(productElements.inputPlusItem).click()
  }

  static validateMessageSucessCart(product) {
    cy.get(productElements.divMessageSucessCart).should('contain.text', ` 2 × “${product}” foram adicionados no seu carrinho.	`)
  }

}

export default Product