import { When } from '@badeball/cypress-cucumber-preprocessor';

When('I select no to the feedback question', () => {
  cy.get('#radio-feedback-no').check({ force: true });
});
