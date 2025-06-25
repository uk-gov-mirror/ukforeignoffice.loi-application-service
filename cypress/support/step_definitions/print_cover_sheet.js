import { Given, When } from '@badeball/cypress-cucumber-preprocessor'
import { findByRole } from '@testing-library/cypress'

When('I click the print cover sheet button', () => {
  cy.get('#print-cover').click();
});
