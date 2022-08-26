/// <reference types="cypress" />

describe('Register', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/register')
  })

  context('assertions', () => {
    it('should be have heading', () => {
      cy.get('.auth-form__title')
        .should('have.length', '1')
    })

    it('should have input email, username and password, retype-password', () => {
      cy.get('[data-cy="register-email"]')
        .should('have.length', '1')

      cy.get('[data-cy="register-username"]')
        .should('have.length', '1')

      cy.get('[data-cy="register-password"]')
        .should('have.length', '1')

      cy.get('[data-cy="register-retype_password"]')
        .should('have.length', '1')
    })

    it('should be have checkbox agree terms', () => {
      cy.get('[data-cy="register-agree"]')
        .should('have.length', '1')
    })

    it('should be have button submit disable', () => {
      cy.get('[data-cy="register-submit"]')
        .should('have.length', '1')

      cy.get('[data-cy="register-submit"]')
        .should('be.disabled')
    })
  })
  
  context('actions', () => {
    it('should have link login', () => {
      cy.get('[data-cy="link-login"]')
        .should('have.length', '1')
        .click({ force: true })

      cy.url().should('include', '/login')

      cy.get('.auth-form__title')
        .should('have.length', '1')
    })

    it('should have link to terms page', () => {
      cy.get('[data-cy="link-terms"]')
        .should('have.length', '1')
        .click({ force: true })

      cy.url().should('include', '/terms')

      cy.get('.page__content h1')
        .should('have.length', '1')
    })

    it('register with data valid', () => {
      // insert email
      cy.get('[data-cy="register-email"]')
        .type('fakeuser1@gmail.com', { delay: 50, force: true })
        .should('have.value', 'fakeuser1@gmail.com')

      // insert username
      cy.get('[data-cy="register-username"]')
        .type('fakeuser1', { delay: 50, force: true })
        .should('have.value', 'fakeuser1')
      
      // insert password
      cy.get('[data-cy="register-password"]')
        .type('fakeuser1', { delay: 50, force: true })
        .should('have.value', 'fakeuser1')

      // view password
      cy.get('[data-cy="register-show-password"]')
        .click({ force: true })

      cy.get('[data-cy="register-show-password"]')
        .click({ force: true })

      // retype password
      cy.get('[data-cy="register-retype_password"]')
        .type('fakeuser1', { delay: 50, force: true })
        .should('have.value', 'fakeuser1')

      cy.get('[data-cy="register-show-retype_password"]')
        .click({ force: true })

      cy.get('[data-cy="register-show-retype_password"]')
        .click({ force: true })

      // click agree terms
      cy.get('[data-cy="register-agree"]').check({force: true})
        .should('be.checked')

      cy.get('[data-cy="register-submit"]')
        .should('be.not.disabled')
      
      // click submit
      cy.get('[data-cy="register-submit"]').click({force: true})
    })

    it('register with user already exist', () => {
      // insert email
      cy.get('[data-cy="register-email"]')
        .type('fakeuser1@gmail.com', { delay: 50, force: true })
        .should('have.value', 'fakeuser1@gmail.com')

      // insert username
      cy.get('[data-cy="register-username"]')
        .type('fakeuser1', { delay: 50, force: true })
        .should('have.value', 'fakeuser1')
      
      // insert password
      cy.get('[data-cy="register-password"]')
        .type('fakeuser1', { delay: 50, force: true })
        .should('have.value', 'fakeuser1')

      // retype password
      cy.get('[data-cy="register-retype_password"]')
        .type('fakeuser1', { delay: 50, force: true })
        .should('have.value', 'fakeuser1')

      // click agree terms
      cy.get('[data-cy="register-agree"]').check({force: true})
        .should('be.checked')

      cy.get('[data-cy="register-submit"]')
        .should('be.not.disabled')
      
      // click submit
      cy.get('[data-cy="register-submit"]').click({force: true})

      cy.wait(5000);

      cy.get('.modal__title')
        .should('contain', 'Invalid')

      cy.get('[data-cy="modal-close"]').click({force: true})
    })
  })
})
