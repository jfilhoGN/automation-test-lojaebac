import { searchProductElements } from './elements'
class SearchProduct {

  static clickPageNumber(number) {
    cy.get(searchProductElements.aPageNumber(number)).first().click()
  }

  static clickProductByTitle(product) {
    cy.get(searchProductElements.aProduct(product)).click({ force: true })
  }


}

export default SearchProduct