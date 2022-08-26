/// <reference types="cypress" />

describe('Homepage', () => {
  beforeEach(() => {
    cy.viewport(1440, 1000)
    cy.visit('http://localhost:3000')
  })

  context('section hero', () => {
    it('should have title', () => {
      cy.get('.home-hero .home-title')
        .should('have.length', '1')
    })

    it('should have description', () => {
      cy.get('.home-hero .home-description')
        .should('have.length', '1')
    })

    it('should have button link that navigate to the contact page', () => {
      cy.get('.home-hero .button')
        .should('have.length', '1')
        .click({ force: true})

      cy.url().should('include', '/contact-us')

      cy.get('.form-contact > h2')
        .should('have.length', '1')
    })
  })

  context('section who', () => {
    it('should have thumbnaild', () => {
      cy.get('.home-who .home-who__image img')
        .should('have.length', '2')
    })

    it('should have title', () => {
      cy.get('.home-who .home-sub-title')
        .should('have.length', '1')
    })

    it('should have description', () => {
      cy.get('.home-who .home-description')
        .should('have.length', '1')
    })

    it('should have four list', () => {
      cy.get('.home-who .home-list > li')
        .should('have.length', '4')
    })

    it('should have button link that navigate to the contact page', () => {
      cy.get('.home-who .button')
        .should('have.length', '1')
        .click({ force: true})

      cy.url().should('include', '/contact-us')

      cy.get('.form-contact > h2')
        .should('have.length', '1')
    })
  })

  context('section solution', () => {
    it('should have title', () => {
      cy.get('.home-solution .home-sub-title')
        .should('have.length', '1')
    })

    it('should have description', () => {
      cy.get('.home-solution .home-description')
        .should('have.length', '3')
    })

    it('should have two image, tag and title each row', () => {
      cy.get('.home-solution .home-solution__image')
        .should('have.length', '2')

      cy.get('.home-solution .tag')
        .should('have.length', '2')
      
      cy.get('.home-solution .home-solution__title')
        .should('have.length', '2')
    })
  })

  context('section cta', () => {
    it('should have thumbnaild', () => {
      cy.get('.home-cta .home-cta__image')
        .should('have.length', '1')
    })

    it('should have title', () => {
      cy.get('.home-cta h2')
        .should('have.length', '1')
    })

    it('should have button link that navigate to the contact page', () => {
      cy.get('.home-cta .button')
        .should('have.length', '1')
        .click({ force: true})

      cy.url().should('include', '/contact-us')

      cy.get('.form-contact > h2')
        .should('have.length', '1')
    })
  })

  context('section demo', () => {
    it('should have title', () => {
      cy.get('.home-demo .home-sub-title')
        .should('have.length', '1')
    })

    it('should have description', () => {
      cy.get('.home-demo .home-description')
        .should('have.length', '1')
    })

    it('should have active OCR button by default', () => {
      cy.get('.home-demo .home-tab-rounded .button')
        .should('have.class', 'active')
    })

    it('should have 2 link to FR and OD', () => {
      cy.get('.home-demo .home-tab-rounded > .button')
        .eq(1)
        .should('have.attr', 'href', 'https://fr.picaso.id')
        
      cy.get('.home-demo .home-tab-rounded .button')
        .last()
        .should('have.attr', 'href', 'https://od.picaso.id')
    })

    it('should be able uploading image in demo section', () => {
      // 1. Demo ID Card Extraction
      const filepath = 'test-ktp.jpeg'
      cy.get('[data-cy="demo-file-upload"]').attachFile(filepath)
  
      // 2. Demo OCR Match
      cy.get('[data-cy="demo-btn-ocr-match"]')
        .click({ force: true });
  
      cy.get('[data-cy="demo-file-upload"]').attachFile(filepath)
      
      // 3. Demo OCR Match
      cy.get('[data-cy="demo-btn-ocr"]')
        .click({ force: true });
  
      cy.get('[data-cy="demo-file-upload"]').attachFile(filepath)
    })
  })

  context('section product', () => {
    it('should have title', () => {
      cy.get('.home-product .home-sub-title')
        .should('have.length', '1')
    })
    
    it('should have description', () => {
      cy.get('.home-product .home-description')
        .should('have.length', '1')
    })

    it('should have 3 product item', () => {
     cy.get('.home-product .home-product__item')
        .should('have.length', '3')
    })

    it('should have 3 product item title and description', () => {
      cy.get('.home-product .home-product__item-cotent > h4')
        .should('have.length', '3')

      cy.get('.home-product .home-product__item-cotent > p')
        .should('have.length', '3')
    })

    it('should have 6 total link button ', () => {
      cy.get('.home-product .button')
        .should('have.length', '6')
    })

    it('should have 3 tab button on OCR Product', () => {
      cy.get('.home-product .col-4:nth-child(1) .home-product__tab-button button')
        .should('have.length', '3')
    })

    it('should have 3 tab button on FaceID Product', () => {
      cy.get('.home-product .col-4:nth-child(2) .home-product__tab-button button')
        .should('have.length', '3')
    })

    it('should have 2 tab button on RECOD Product', () => {
      cy.get('.home-product .col-4:nth-child(3) .home-product__tab-button button')
        .should('have.length', '2')
    })
  })

  context('section pricing', () => {
    it('should have title', () => {
      cy.get('.home-pricing .home-sub-title')
        .should('have.length', '1')
    })

    it('should have description', () => {
      cy.get('.home-pricing .home-description')
        .should('have.length', '1')
    })

    it('should have 5 list pricing', () => {
      cy.get('.home-pricing .product-pricing')
        .should('have.length', '5')
    })

    it('should have 5 button link that navigate to the contact page', () => {
      cy.get('.product-pricing__action .button')
        .should('have.length', '5')

      cy.get('.product-pricing__action .button')
        .first()
        .click({ force: true})

      cy.url().should('include', '/contact-us')

      cy.get('.form-contact > h2')
        .should('have.length', '1')
    })
  })

  context('section cta 2', () => {
    it('should have thumbnaild', () => {
      cy.get('.home-subscribe img')
        .should('have.length', '2')
    })

    it('should have title', () => {
      cy.get('.home-subscribe h3')
        .should('have.length', '1')
    })

    it('should have button link that navigate to the contact page', () => {
      cy.get('.home-subscribe .button')
        .should('have.length', '1')
        .click({ force: true})

      cy.url().should('include', '/contact-us')

      cy.get('.form-contact > h2')
        .should('have.length', '1')
    })
  })

})

