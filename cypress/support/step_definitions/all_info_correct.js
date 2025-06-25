import { When } from '@badeball/cypress-cucumber-preprocessor';

When('I confirm all information is correct', () => {
  cy.get('#all_info_correct').click();
});
