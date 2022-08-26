/// <reference types="cypress" />

describe('Contact Us', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/contact-us')
  })

  context('assertions', () => {
    it('should be have heading', () => {
      cy.get('.form-contact > h2')
        .should('have.length', '1')
    })

    it('should have input name, email, phone and 3 checkbox option', () => {
      // input name
      cy.get('.form-contact #name')
        .should('have.length', '1')
  
      // input email
      cy.get('.form-contact #email')
        .should('have.length', '1')
  
      // input phone
      cy.get('.form-contact #phone')
        .should('have.length', '1')
  
      // input radio
      cy.get('.form-contact input[type="checkbox"]')
       .should('have.length', '3')
    })

    it('should have one button submit disabled', () => {
      // have one button submit
      cy.get('.form-contact button')
        .should('have.length', '1')
  
      // disable
      cy.get('.form-contact button')
        .should('be.disabled')
    })
  })
  
  context('actions', () => {
    it('should be diplay error if field name < 3 characters', () => {
      cy.get('[data-cy="contact-input-name"]')
        .type('ab', { delay: 50, force: true })
        .should('have.value', 'ab')

      cy.get('[data-cy="contact-input-name-error"]')
        .should('have.length', '1')
    })

    it('should be diplay error if email not valid', () => {
      cy.get('[data-cy="contact-input-email"]')
        .type('abdi@gmail', { delay: 50, force: true })
        .should('have.value', 'abdi@gmail')

      cy.get('[data-cy="contact-input-email-error"]')
        .should('have.length', '1')
    })

    it('should be diplay error if phone < 12 characters', () => {
      cy.get('[data-cy="contact-input-phone"]')
        .type('12345678910', { delay: 50, force: true })
        .should('have.value', '12345678910')

      cy.get('[data-cy="contact-input-phone-error"]')
        .should('have.length', '1')
    })

    it('should be checked all checkbo', () => {
      cy.get('.form-contact__option #ekyc').check({force: true})
        .should('be.checked')
      
      cy.get('.form-contact__option #faceid').check({force: true})
        .should('be.checked')

      cy.get('.form-contact__option #recod').check({force: true})
        .should('be.checked')
    })

    it('should be diplay error if message < 9 characters', () => {
      cy.get('[data-cy="contact-input-message"]')
        .type('asdfghjkl', { delay: 50, force: true })
        .should('have.value', 'asdfghjkl')

      cy.get('[data-cy="contact-input-message-error"]')
        .should('have.length', '1')
    })

    it('insert data valid', () => {
      cy.get('.form-contact #name')
        .type('Fakeusername', { delay: 100, force: true })
        .should('have.value', 'Fakeusername')
  
      cy.get('.form-contact #email')
        .type('fake@email.com', { delay: 100, force: true })
        .should('have.value', 'fake@email.com')
  
      cy.get('.form-contact #phone')
        .type('089912345678', { delay: 100, force: true })
        .should('have.value', '089912345678')
  
        cy.get('.form-contact__option #ekyc').check({force: true})
        .should('be.checked')
      
      cy.get('.form-contact__option #faceid').check({force: true})
        .should('be.checked')

      cy.get('.form-contact__option #recod').check({force: true})
        .should('be.checked')
  
      cy.get('.form-contact #message')
        .type('This is just content test', { delay: 100, force: true })
        .should('have.value', 'This is just content test')
        
      cy.get('.form-contact .button')
        .should('be.not.disabled')
  
      cy.get('.form-contact').submit()
  
      cy.get('.form-contact .button')
        .should('be.disabled')
  
      cy.wait(5000);
  
      cy.get('.modal__title')
        .should('contain', 'Thank you for contacing Picaso')
  
      cy.get('.modal__button .button').click({ force: true})  
    })
  })
})