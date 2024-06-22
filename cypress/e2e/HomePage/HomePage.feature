Feature: Home Page

    Feature Description
    Scenario: Login with valid creds
    Given I am on the Home Page
    When I click Sign In button
    When  I enter "email" email
    When  I enter "password" password
    When  I click Login button
    Then I see the Garage page

    Scenario: Login without creds
    Given I am on the Home Page
    When I click Sign In button
    When I click Login button
    Then I see that Login button is disabled

    Scenario: Login with invalid creds
    Given I am on the Home Page
    When I click Sign In button
    When  I enter invalid "email" email
    When  I enter invalid "password" password
    When  I click Login button
    Then I see an error message with text = 'Wrong email or password'
