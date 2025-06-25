import { When } from '@badeball/cypress-cucumber-preprocessor';

When('I select the document {string} and add it', (documentName) => {
  cy.contains(documentName).click();
  cy.get('#add_261').click();
});
