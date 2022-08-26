/// <reference types="cypress" />

describe('Header and Footer', () => {

  beforeEach(() => {
    cy.clearCookies()
    cy.viewport(1440, 1000)
    cy.visit('http://localhost:3000/')
  })
  
  it('should have logo, 5 menu and login and register button', () => {
    cy.get('.header__brand')
      .should('have.length', '1')

    cy.get('.header__brand')
      .should('have.attr', 'href', '/')

    cy.get('.header__menu > ul')
      .should('have.length', '2')

    cy.get('.header__menu-left > li')
      .should('have.length', '5')

    cy.get('.header__menu-has-sub-menu')
      .should('have.length', '1')

    cy.get('.header__menu-has-sub-menu')
      .trigger('mouseover', { force: true })

    cy.get('.header__menu-sub-menu > li')
      .should('have.length', '3')

    cy.get('.header__menu-sub-menu > li:nth-child(1) a')
      .should('have.attr', 'href', '/ekyc')

    cy.get('.header__menu-sub-menu > li:nth-child(2) a')
      .should('have.attr', 'href', 'https://fr.picaso.id')

    cy.get('.header__menu-sub-menu > li:nth-child(3) a')
      .should('have.attr', 'href', 'https://od.picaso.id')

    cy.get('.header__menu-left > li:nth-child(4) a')
      .should('have.attr', 'href', '/contact-us')

    cy.get('.header__menu-left > li:nth-child(5) a')
      .should('have.attr', 'href', 'https://picaso-ocr.gitbook.io/documentations')
    
    cy.get('.header__menu-right li')
      .should('have.length', '2')

    cy.get('.header__menu-right li:nth-child(1) a')
      .should('have.attr', 'href', '/login')

    cy.get('.header__menu-right li:nth-child(2) a')
      .should('have.attr', 'href', '/register')
  })

  it('should be showing back to top button when scroll 550px', () => {
    cy.scrollTo(0, 550)
    cy.get('.footer__backtop')
      .should('have.class', 'show')
      .click({ force: true})
  })

  it('should be hide back to top button when scroll top top', () => {
    cy.scrollTo(550, 0)
    cy.get('.footer__backtop')
      .should('not.have.class', 'hide')
  })

  it('should be scroll to element id when link contain hastag', () => {
    cy.get('.header__menu-left a[href="/#demo"]').click()
  })

  it('should have logo in footer', () => {
    cy.get('.footer__logo')
      .should('have.length', '1')
  })
})

describe('Header and Footer After login', () => {

  beforeEach(() => {
    cy.setCookie('token', 'asdfdsfa')
    cy.viewport(1440, 1000)
    cy.visit('http://localhost:3000/')
  })
  
  it('should have dashboard link button', () => {
    cy.get('.header__menu-right li > a')
      .should('have.attr', 'href', '/dashboard')
  })
})

context('Header Responsive Tablet: 768 x 992', () => {
  beforeEach(() => {
    cy.viewport(768, 992)
    cy.visit('http://localhost:3000')
  })

  it('should be showing burger menu', () => { 
    cy.get('.header__toggle')
      .should('have.length', '1')
  })

})

context('Header Responsive Mobile: 425 x 992', () => {
  beforeEach(() => {
    cy.viewport(425, 992)
    cy.visit('http://localhost:3000')
  })

  it('should be showing burger menu', () => { 
    cy.get('.header__toggle')
      .should('have.length', '1')
  })
})