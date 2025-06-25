import { When } from '@badeball/cypress-cucumber-preprocessor';

When('I enter a reference', () => {
  cy.get('#user-reference').type('Kainos Test');
});
