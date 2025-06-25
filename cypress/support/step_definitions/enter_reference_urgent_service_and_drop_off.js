import { When } from '@badeball/cypress-cucumber-preprocessor';

When('I enter a reference for urgent service', () => {
  cy.get('#customer_ref').type('Kainos Test');
});
