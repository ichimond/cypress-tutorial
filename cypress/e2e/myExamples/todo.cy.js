/// <reference types="cypress" />

describe('My Test Suite', () => {

    beforeEach(() => {
        cy.visit('https://example.cypress.io/todo')

    })

    it('Check existing to do list', () => {
        //Different ways of checking Pay electric bill ine
        cy.contains('Pay electric bill').should('be.visible')
        cy.get(':nth-child(1) > .view > label').should('be.visible')
        cy.get('.todo-list li').first().should('contain', 'Pay electric bill')
    })

    it('Adding item in list', () => {
        cy.get('[data-test="new-todo"]').type('Learn cypress {enter}')
        cy.get('.todo-list li').last().should('contain', 'Learn cypress')
    })

    it('Checking item from the list', () => {
        cy.contains('Pay electric bill').parent().find('.toggle').click()
        cy.contains('Pay electric bill').parents('li').should('have.class', 'completed')
    })

    it('Clearing completed', () => {
        cy.contains('Pay electric bill').parent().find('.toggle').click()
        cy.contains('Pay electric bill').parents('li').should('have.class', 'completed')

        cy.get('.clear-completed').click()
        cy.get('.todo-list').should('have.length', 1)
    })

    
})