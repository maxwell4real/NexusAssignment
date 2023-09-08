@forgotPassword @high
Feature: Forget Password

  Scenario: As a user, I can request for change forgotten password
    Given I am on the login page
    When I login with "ukUser"
    When I click on forgot password link
    Then I see password success notification