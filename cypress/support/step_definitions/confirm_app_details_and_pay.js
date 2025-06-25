import { Given, When } from '@badeball/cypress-cucumber-preprocessor'
import { findByRole } from '@testing-library/cypress'

When('I click the confirm application details and pay button', () => {
  cy.findByRole('button', { name: 'Confirm application details & pay' }).click();
});
