/// <reference types="cypress" />

context('Ekyc', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/ekyc')
  })

  it('should be have content and doing demo', () => {
    cy.get('.ekyc__showcase__content h1')
      .should('have.length', '1')
      
    cy.get('.ekyc__showcase__content h2')
      .should('have.length', '1')
    
    cy.get('.ekyc__showcase__content ul li')
      .should('have.length', '3')
    
    cy.get('[data-cy="eky-button-intro"]')
      .should('have.length', '1')
      .click({ force: true })
    
    cy.get('.ekyc__step').first()
      .should('have.class', 'active')

    cy.get('[data-cy="eky-button-photo"]')
      .should('have.length', '1')
  })

})