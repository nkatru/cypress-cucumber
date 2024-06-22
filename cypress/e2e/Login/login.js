import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given('I am on the Home Page', () => {
    cy.visit('https://qauto.forstudy.space/',{
        auth: {
          username: "guest",
          password: "welcome2qauto",
        },
}).as('loginAndOpenHomePage')
})
When('I scroll to the Contacts icons section', () => {
    cy.scrollTo('bottom');
    cy.get('.contacts_socials.socials')
})
Then('I see 5 contact icons', () => {
    cy.get('a.socials_link').should('have.length', 5);
})

/***********************************************/

Given('I am on the Home Page', () => {
    cy.visit('loginAndOpenHomePage');
})

When('I click on Sign Up button', () => {
    cy.get('.btn.btn-primary').click();
})

Then('I see a registration form', () => {
    cy.get('.modal-title').contains('Registration');
})

/***********************************************/

Given('I am on the Home Page', () => {
    cy.visit('loginAndOpenHomePage');
})

When('I click on Sign In button', () => {
    cy.get("button.btn.header_signin").click();
})

Then('I see the login form', () => {
    cy.get('.modal-title').contains('Log in');
}) 