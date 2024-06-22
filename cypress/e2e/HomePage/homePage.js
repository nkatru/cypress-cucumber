import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given('I am on the Home Page',() => {
    cy.visit('https://qauto.forstudy.space/',{
        auth: {
          username: "guest",
          password: "welcome2qauto",
        },
}).as('loginAndOpenHomePage')
})

When('I click Sign In button', () => {
    cy.get("button.btn.header_signin").click();
})

When('I enter {string} email', (email) => {
    cy.get("#signinEmail").type(email);
})

When('I enter {string} password', () => {
    cy.get("#signinPassword").type(password);
})

When('I click Login button', () => {
    cy.contains("Login").click();
})

Then('I see the Garage page', () => {
    cy.get(".panel-page").should("contain", "Garage");
})

/***********************************************/

Given('I am on the Home Page',() => {
    cy.visit('https://qauto.forstudy.space/',{
        auth: {
          username: "guest",
          password: "welcome2qauto",
        },
})
})

When('I click Sign In button', () => {
    cy.get("button.btn.header_signin").click();
})

When('I click Login button', () => {
    cy.contains("Login").click();
})

Then('I see that Login button is disabled', () => {
    cy.contains("Login").should('be.disabled');
})

/***********************************************/

Given('I am on the Home Page',() => {
    cy.visit('https://qauto.forstudy.space/',{
        auth: {
          username: "guest",
          password: "welcome2qauto",
        },
})
})

When('I click Sign In button', () => {
    cy.get("button.btn.header_signin").click();
})

When('I enter invalid {string} email', (email) => {
    cy.get("#signinEmail").type(email);
})

When('I enter invalid {string} password', () => {
    cy.get("#signinPassword").type(password);
})

When('I click Login button', () => {
    cy.contains("Login").click();
})

Then("I see an error message with text {string}", (text) => {
    cy.get('.alert.alert-danger').contains(text);
})

