Feature: Standard Postal Application

  I want to complete the Standard Postal Application

  Scenario: User begins application from home page
    Given I am on the homepage
    When I click the "Start now" button
    When I select the "Standard paper-based service" option
    And I continue
    And I click check your documents
    When I select the document "Civil Record (Birth, Death, Marriage certificate)" and add it
    And I continue
    And I select the first option
    And I continue 3 times
    And I enter my personal details
    And I confirm I'm applying from the UK
    And I search for the postcode "BT7 1NT"
    And I select the address "Kainos Software Ltd 4-6 Upper Crescent Belfast BT7 1NT"
    And I confirm it's my address
    And I type "1" in number of documents
    And I continue
    And I select the first delivery option
    And I continue
    And I select the first return option
    And I continue
    And I select no to the feedback question
    And I continue 2 times
    And I confirm all information is correct
    And I click the confirm application details and pay button
    And I fill in payment details and pay
    Then I click the print cover sheet button
