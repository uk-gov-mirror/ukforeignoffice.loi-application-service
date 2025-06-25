import { Given, When } from '@badeball/cypress-cucumber-preprocessor'
import { findByRole } from '@testing-library/cypress'

When('I click sign in link', () => {
  cy.findByRole('link', { name: 'Sign in' }).should('be.visible').click();
});

When('I sign in', () => {
  cy.get('#email').type(Cypress.env('email'));
  cy.get('#password').type(Cypress.env('password'));
  cy.findByRole('button', { name: 'Sign in' }).click();
});
