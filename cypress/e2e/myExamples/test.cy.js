// <reference types="cypress" />

describe('My Test Suite', () => {

    it('Go to the site', () => {
        cy.visit('https://example.cypress.io/todo')
        cy.get(':nth-child(1) > .view > label').should('be.visible')
        cy.contains('Pay electric bill').should('be.visible')

        cy.get('[data-test="new-todo"]').type('Teach cypress{enter}')
        cy.contains('Teach cypress').should('be.visible')

    })

})