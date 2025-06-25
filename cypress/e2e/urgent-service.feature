Feature: Restricted Urgent Service

  I want to complete a Restricted Urgent Service application

  Scenario: User begins from home page
    Given I am on the homepage
    When I click the "Start now" button
    And I click sign in link
    And I sign in
    When I select the "Restricted urgent service" option
    And I continue
    And I type "1" in number of documents
    And I continue 2 times
    And I enter a reference for urgent service
    And I continue to payment
    And I fill in payment details and pay
    Then I click the print cover sheet button
