Feature: Login with multiple users
@multi
Scenario Outline: Successful Login using valid credential
    Given I am in login page of saucedemo
    When I enter username "<username>" and password "<password>"
    And I click on login button
    Then user should be redirected to Saucedemo Inventory page


    Examples:
    |username|password|
    |standard_user|secret_sauce|
    |locked_out_user|secret_sauce|
    |problem_user|secret_sauce|