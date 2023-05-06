
class Home {
  static clickButtonBuy() {
    cy.findAllByText('Comprar').first().click({ force: true })
  }
  
}

export default Home