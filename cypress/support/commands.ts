// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
/// <reference types="cypress" />

declare namespace Cypress {
    interface Chainable {
      GoogleCheck(): Chainable<Element>;
      FillForm(name: string,email: string, address: string): Chainable<Element>;
    }
  }
Cypress.Commands.add("GoogleCheck",() => {
    cy.get('.gLFyf').type("Something big is being written to check the things that get entered");
    cy.get('.FPdoLc > center > .gNO89b').click();
    cy.get('h3 span').eq(1).click();
});

Cypress.Commands.add("FillForm", (name, email, address) => {
  cy.get('#userName').type(name);
  cy.get('#userEmail').type(email);
  cy.get('#currentAddress').type(address);
  cy.get('#permanentAddress').type(address);
  cy.get('#submit').click();
})
