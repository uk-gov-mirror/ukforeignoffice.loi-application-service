import { Given, When } from '@badeball/cypress-cucumber-preprocessor'
import { findByRole } from '@testing-library/cypress'

When("I add these files {}", (string) => {
  const files = string.split(",");
  string.split(",").forEach((file) => {
    let curr = `${cy.url()}`;
    if (!`${cy.url()}`.includes("localhost")) {
      cy.get("input[type=file]").attachFile(file);
    }
    //cy.findByRole("button").click();
    //cy.url().should("not.be", curr);
  });
});
