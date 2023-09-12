@login @high
Feature: Login

   Scenario: As a user, I can log into my account successfully
     Given I am on the login page
     When I login with "ukUser"
     Then I verify user account detail
     And I log out successfully

  Scenario: As a user, I want to see error message when incorrect details are used
    Given I am on the login page
    When I login with "incorrectUser"
    Then I see error message displayed