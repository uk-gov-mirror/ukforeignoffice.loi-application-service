import { Given, When } from '@badeball/cypress-cucumber-preprocessor'
import { findByRole } from '@testing-library/cypress'

Given('I am on the homepage', () => {
  cy.visit('/');
});

When('I click the {string} button', (buttonText) => {
  cy.findByRole('button', { name: buttonText }).should('be.visible').click();
});

When('I select the {string} option', (radioLabel) => {
  cy.findByLabelText(radioLabel).check({ force: true });
});

