import { When } from '@badeball/cypress-cucumber-preprocessor';

When('I select the first return option', () => {
  cy.get('#return_1').check({ force: true });
});
