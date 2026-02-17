/// <reference types="cypress" />

beforeEach(() => {
  cy.intercept('**', { log: false })
})