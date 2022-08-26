/// <reference types="cypress" />

context('Terms', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/disclaimer')
  })

  it('should be have content', () => {
    cy.get('.page__content h1')
      .should('contain', 'Picaso e-KYC Disclaimer')
      
    cy.get('.page__content h1')
      .should('have.length', '1')
  })
})