@addToBasket @high
Feature: Add Item to basket

  Scenario: Add Item to basket and proceed to checkout
    Given I am on the login page
    And I login with "ukUser"
    And I add product
    And I select Hourly pass package
    And I enter randomProduct in the product name field
    And I add hourly pass package
    And I delete the product added
    And I confirm to delete the product
    And I verify text "Deleting records in the background" displayed

