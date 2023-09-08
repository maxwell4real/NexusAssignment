@login @high
Feature: Login

   Scenario: As a user, I can log into my account successfully
     Given I am on the login page
     When I login with "ukUser"
#     Then I should see user is logged in successfully (I'm unable to sign in with account provided)

  Scenario: As a user, I want to see error message when incorrect details are used
    Given I am on the login page
    When I login with "ukUser"
    Then I see error message displayed
