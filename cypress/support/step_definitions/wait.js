import { Given, When } from '@badeball/cypress-cucumber-preprocessor'
import { findByRole } from '@testing-library/cypress'

When('I wait {int} seconds', (seconds) => {
  cy.wait(seconds * 1000);
});
