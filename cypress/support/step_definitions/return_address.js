import { When } from '@badeball/cypress-cucumber-preprocessor';

When("I confirm I'm applying from the UK", () => {
  cy.get('#radio-yes').click();
  cy.findByRole('button', { name: 'Continue' }).click();
});

When('I search for the postcode {string}', (postcode) => {
  cy.get('#find-postcode').type(postcode);
  cy.findByRole('button', { name: 'Find UK address' }).click();
});

When('I select the address {string}', (address) => {
  cy.get('#address-list-box').select(address);
  cy.findByRole('button', { name: 'Continue' }).click();
});

When("I confirm it's my address", () => {
  cy.get('#is-same').click();
  cy.findByRole('button', { name: 'Continue' }).click();
});
