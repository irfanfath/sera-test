/// <reference types="cypress" />

context('Dashboard Summary', () => {
  beforeEach(() => {
    cy.clearCookies()
    cy.visit('http://localhost:3000/login')
      
  });

  it('login with valid data and checking existing component', () => {
    cy.get('[data-cy="login-username"]').type('abdanjanuar', { delay: 50,force: true})
    cy.get('[data-cy="login-password"]').type('sandibaru', { delay: 50, force: true})
    cy.get('[data-cy="login-submit"]').click({ force: true})

    cy.url().should('include', '/dashboard')
    
    cy.get('[data-cy="dashboard-summary"]')
      .should('have.class', 'dashboard__main-row')

    cy.get('[data-cy="dashboard-summary-token"]')
      .should('have.class', 'dashboard__frame')

    cy.get('[data-cy="dashboard-summary-ocr"]')
      .should('have.class', 'dashboard__frame')

    cy.get('[data-cy="dashboard-summary-fr"]')
      .should('have.class', 'dashboard__frame')
    
    cy.get('[data-cy="dashboard-summary-dukcapil"]')
      .should('have.class', 'dashboard__frame')
  })

})