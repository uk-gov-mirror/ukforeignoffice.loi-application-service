import { When } from '@badeball/cypress-cucumber-preprocessor';

When('I enter my personal details', () => {
  cy.get('#first_name').type('Test');
  cy.get('#last_name').type('User');
  cy.get('#mobileNo').type('07777777777');
  cy.get('#telephone').type('02877777777');
  cy.get('#email').type('conor.gallagher@kainos.com');
  cy.get('#confirm_email').type('conor.gallagher@kainos.com');
  cy.findByRole('button', { name: 'Continue' }).click();
});
