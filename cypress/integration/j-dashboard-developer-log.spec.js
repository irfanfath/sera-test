/// <reference types="cypress" />

context('Dashboard Developer Logs', () => {
  beforeEach(() => {
    cy.clearCookies()
    cy.visit('http://localhost:3000/login')
  });

  it('login with valid data and checking existing component', () => {
    cy.get('[data-cy="login-username"]').type('abdanjanuar', { force: true})
    cy.get('[data-cy="login-password"]').type('sandibaru', { force: true})
    cy.get('[data-cy="login-submit"]').click({ force: true})

    cy.get('.dashboard__aside-menu li:nth-child(2) a')
      .click()
      .url()
      .should('include', '/dashboard/developer-logs')

    cy.get('[data-cy="dashboard-developer-logs"]')
      .should('have.class', 'dashboard__frame')

    cy.get('[data-cy="dashboard-developer-logs-filter-date"]')
      .should('have.class', 'dashboard__filter')

    cy.get('[data-cy="dashboard-developer-logs-filter-type"]')
      .should('have.class', 'dashboard__filter')
    
    cy.get('[data-cy="dashboard-developer-logs-filter-api"]')
      .should('have.class', 'dashboard__filter')
  })

})