import { When } from '@badeball/cypress-cucumber-preprocessor';

When('I select the first option', (documentName) => {
  cy.get('#docid_261_1').click();
});
