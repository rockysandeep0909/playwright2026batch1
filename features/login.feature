Feature: Login
@smoke
Scenario: Successful Login using valid credential
    Given I am in login page of saucedemo
    When I enter valid username
    And I enter valid password
    And I click on login buttonn 
    Then user should be redirected to Saucedemo Inventory page


Scenario: Invalid Login
    Given I am in login page of saucedemo
    When I enter invalid username
    And I enter invalid password
    And I click on login buttonn 
    Then user should be redirected to Saucedemo Inventory page