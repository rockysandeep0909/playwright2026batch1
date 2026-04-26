Feature: Order success

Scenario: Successful order placement for Sauce Demo site 
    Given I am in login page of saucedemo
    When I enter valid username
    And I enter valid password
    And I click on login button
    Then user should be redirected to Saucedemo Inventory page
