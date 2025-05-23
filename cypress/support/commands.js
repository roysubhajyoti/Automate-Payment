// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("closeModalIfPresent", () => {
  // Wait for modal to appear and be visible
  cy.get("body").then(($body) => {
    // Check if the modal exists
    if ($body.find(".a-modal-scroller.a-declarative").length > 0) {
      // Wait for modal and close button to be visible
      cy.get(".a-modal-scroller.a-declarative").should("be.visible");
      cy.get("#prime-interstitial-nothanks-button", { timeout: 10000 })
        .should("be.visible")
        .click(); // Close button
    }
  });
});
