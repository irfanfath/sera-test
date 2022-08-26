/// <reference types="cypress" />

describe('Forgot Password', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/reset-password')
  })

  context('assertions', () => {
    it('should be have heading', () => {
      cy.get('.auth-form__title')
        .should('have.length', '1')
    })

    it('should have input new password', () => {
      cy.get('[data-cy="reset-password"]')
        .should('have.length', '1')
    })

    it('should have input confirm password', () => {
      cy.get('[data-cy="reset-confirm_password"]')
        .should('have.length', '1')
    })

    it('should be have button submit disable', () => {
      cy.get('[data-cy="reset-submit"]')
        .should('have.length', '1')

      cy.get('[data-cy="reset-submit"]')
        .should('be.disabled')
    })
  })
  
  context('actions', () => {

    it('should be have error notif when password not valid', () => {
      cy.get('[data-cy="reset-password"]')
        .type('1234567', { delay: 50, force: true })
        .should('have.value', '1234567')

      cy.get('[data-cy="reset-password-error"]')
        .should('have.length', '1')
    })

    it('should be have error notif when confirm password not same', () => {
      cy.get('[data-cy="reset-password"]')
        .type('1234568', { delay: 50, force: true })
        .should('have.value', '1234568')

      cy.get('[data-cy="reset-confirm_password"]')
        .type('1234567', { delay: 50, force: true })
        .should('have.value', '1234567')

      cy.get('[data-cy="reset-confirm_password-error"]')
        .should('have.length', '1')
    })

    it('register with data valid', () => {
      // insert email
      cy.get('[data-cy="reset-password"]')
        .type('12345678', { delay: 50, force: true })
        .should('have.value', '12345678')

      cy.get('[data-cy="reset-confirm_password"]')
        .type('12345678', { delay: 50, force: true })
        .should('have.value', '12345678')
      
      // click submit
      cy.get('[data-cy="reset-submit"]').click({force: true})

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
