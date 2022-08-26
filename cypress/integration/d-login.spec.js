/// <reference types="cypress" />

describe('Login', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/login')
  })

  context('assertions', () => {
    it('should be have heading', () => {
      cy.get('.auth-form__title')
        .should('have.length', '1')
    })

    it('should have input username and password', () => {
      cy.get('[data-cy="login-username"]')
        .should('have.length', '1')

      cy.get('[data-cy="login-password"]')
        .should('have.length', '1')
    })

    it('should be have button submit disable', () => {
      cy.get('[data-cy="login-submit"]')
        .should('have.length', '1')

      cy.get('[data-cy="login-submit"]')
        .should('be.disabled')
    })
  })
  
  context('actions', () => {
    it('should have link forgot password', () => {
      cy.get('[data-cy="link-forgot-password"]')
        .should('have.length', '1')
        .click({ force: true })

      cy.url().should('include', '/forgot-password')

      cy.get('.auth-form__title')
        .should('have.length', '1')
    })

    it('should have link register', () => {
      cy.get('[data-cy="link-register"]')
        .should('have.length', '1')
        .click({ force: true })

      cy.url().should('include', '/register')

      cy.get('.auth-form__title')
        .should('have.length', '1')
    })

    it('login with data valid', () => {
      cy.get('[data-cy="login-username"]')
        .type('abdanjanuar', { delay: 50, force: true })
        .should('have.value', 'abdanjanuar')
      
        cy.get('[data-cy="login-password"]')
          .type('sandibaru', { delay: 50, force: true })
          .should('have.value', 'sandibaru')

        cy.get('[data-cy="login-submit"]')
          .should('be.not.disabled')
    
        cy.get('[data-cy="login-submit"]').click({force: true})
    })

    it('login with data invalid', () => {
      cy.get('[data-cy="login-username"]')
        .type('fakeuser', { delay: 50, force: true })
        .should('have.value', 'fakeuser')
      
      cy.get('[data-cy="login-password"]')
        .type('fakeuser123', { delay: 50, force: true })
        .should('have.value', 'fakeuser123')

      cy.get('[data-cy="login-submit"]')
        .should('be.not.disabled')
  
      cy.get('[data-cy="login-submit"]').click({force: true})

      cy.wait(5000);

      cy.get('.modal__title')
        .should('contain', 'Invalid')

      cy.get('[data-cy="modal-close"]').click({force: true})      
    })
  })
})
