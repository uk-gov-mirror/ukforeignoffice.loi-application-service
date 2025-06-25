import { Given, When } from '@badeball/cypress-cucumber-preprocessor'
import { findByRole } from '@testing-library/cypress'

When('I click check your documents', () => {
  cy.findByRole('button', { name: 'Check your documents' }).click();
});
