import { When } from '@badeball/cypress-cucumber-preprocessor';

When('I select the first delivery option', () => {
  cy.get('#send_0').check({ force: true });
});
