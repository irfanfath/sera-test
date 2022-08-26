/// <reference types="cypress" />

context('Terms', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/privacy-policy')
  })

  it('should be have content', () => {
    cy.get('.page__content h1')
      .should('contain', 'Kebijakan Privasi')
      
    cy.get('.page__content h1')
      .should('have.length', '1')
  })
})