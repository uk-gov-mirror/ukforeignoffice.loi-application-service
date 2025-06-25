import { Given, When } from '@badeball/cypress-cucumber-preprocessor'
import { findByRole } from '@testing-library/cypress'

When('I click save and return to summary button', () => {
  cy.findByRole('button', { name: 'Save and return to summary' }).click();
});
