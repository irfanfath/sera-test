/// <reference types="cypress" />

describe('Forgot Password', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/forgot-password')
  })

  context('assertions', () => {
    it('should be have heading', () => {
      cy.get('.auth-form__title')
        .should('have.length', '1')
    })

    it('should be have description', () => {
      cy.get('.auth-form p')
        .should('have.length', '1')
    })

    it('should have input email', () => {
      cy.get('[data-cy="forgot-email"]')
        .should('have.length', '1')
    })

    it('should be have button submit disable', () => {
      cy.get('[data-cy="forgot-submit"]')
        .should('have.length', '1')

      cy.get('[data-cy="forgot-submit"]')
        .should('be.disabled')
    })
  })
  
  context('actions', () => {

    it('should be have error notfif when email not valid', () => {
      cy.get('[data-cy="forgot-email"]')
        .type('fakeuser1@gmail', { delay: 50, force: true })
        .should('have.value', 'fakeuser1@gmail')

      cy.get('[data-cy="forgot-email-error"]')
        .should('have.length', '1')
    })

    it('register with data valid', () => {
      // insert email
      cy.get('[data-cy="forgot-email"]')
        .type('fakeuser1@gmail.com', { delay: 50, force: true })
        .should('have.value', 'fakeuser1@gmail.com')
      
      // click submit
      cy.get('[data-cy="forgot-submit"]').click({force: true})

      cy.wait(5000);

      cy.get('[data-cy="link-login"]')
        .should('have.length', '1')
        .click({ force: true })

      cy.url().should('include', '/login')

      cy.get('.auth-form__title')
        .should('have.length', '1')
    })
  })
})
