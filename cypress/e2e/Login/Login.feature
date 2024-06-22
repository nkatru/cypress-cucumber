Feature: Login Page

    Feature Description
    Scenario: Contacts Icon are present
    Given I am on the Home Page
    When I scroll to the Contacts icons section
    Then I see 5 contact icons

    Scenario: Afer clicking Sign Up I see a registration form
    Given I am on the Home Page
    When I click on Sign Up button
    Then I see a registration form

    Scenario: Afer clicking Sign In I see a login form
    Given I am on the Home Page
    When I click on Sign In button
    Then I see the login form