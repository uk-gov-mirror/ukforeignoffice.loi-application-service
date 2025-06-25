import { When } from '@badeball/cypress-cucumber-preprocessor';

When('I type {string} in number of documents', (value) => {
  cy.get('#documentCount').clear().type(value);
});
