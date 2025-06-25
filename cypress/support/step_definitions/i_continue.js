import { Given, When } from '@badeball/cypress-cucumber-preprocessor'
import { findByRole } from '@testing-library/cypress'

When('I continue', () => {
  cy.findByRole('button', { name: 'Continue' }).should('be.visible').click();
});

When("I continue {int} times", (int) => {
  let curr = `${cy.url()}`;
  let i = 1;
  do {
    i = i + 1;
    cy.findByRole('button', { name: 'Continue' }).click();
    cy.url().should("not.be", curr);
    curr = cy.url();
  } while (i < int);

  cy.findByRole('button', { name: 'Continue' }).click();
});

When('I continue to payment', () => {
  cy.findByRole('button', { name: 'Continue to payment' }).click();
});
