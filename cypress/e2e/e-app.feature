Feature: E-Application

  I want to complete an E-app

  Scenario: User begins e-app from home page
    Given I am on the homepage
    When I click the "Start now" button
    When I select the "Electronic 'e-Apostille' service" option
    And I continue
    And I select the "No, I have already checked" option
    And I continue
    And I sign in
    And I add these files test.pdf
    And I wait 10 seconds
    And I continue
    And I enter a reference
    And I continue
    And I continue to payment
    And I fill in payment details and pay
