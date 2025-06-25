import { Given, When } from '@badeball/cypress-cucumber-preprocessor'
import { findByRole } from '@testing-library/cypress'

When('I fill in payment details and pay', () => {
   cy.get('#card-no').type('5105105105105100');
    cy.get('#expiry-month').type('12');
    cy.get('#expiry-year').type('2032');
    cy.get('#cardholder-name').type('CYPRESS TEST');
    cy.get('#cvc').type('211');
    cy.get('#address-line-1').type('4-6 Upper Crescent');
    cy.get('#address-city').type('Belfast');
    cy.get('#address-country').type('United Kingdom');
    cy.get('#address-postcode').type('BT7 1NT');
    cy.get('#email').clear();
    cy.get('#email').type('conor.gallagher@kainos.com');
    cy.findByRole('button', { name: 'Continue' }).click();
    cy.findByRole('button', { name: 'Confirm payment' }).click();
});
