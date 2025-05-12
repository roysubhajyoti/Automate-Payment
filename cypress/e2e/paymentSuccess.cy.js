///<reference types="cypress"/>
describe("automate amazon", () => {
  it("automate payment", () => {
    cy.visit("https://www.amazon.in/");
    cy.get("div[id='nav-link-accountList'] a:nth-child(1)").click();

    //
    const email = Cypress.env("email");
    const password = Cypress.env("password");

    cy.get("#ap_email_login").type(email);
    cy.get("input[type='submit']").click();
    cy.get("input[type='password']").type(password);

    cy.get("input[id='signInSubmit']").click();
    cy.pause();
    cy.get("input[id='auth-signin-button']").click();

    cy.get("input[id='twotabsearchtextbox']").type("Jbl C100Si");
    cy.get("#nav-search-submit-button").click();
    cy.get("#a-autoid-1-announce").click();

    cy.get("#nav-cart").click();

    cy.get("input[value='Proceed to checkout']").click();
    cy.get("[id^='pp-'][id$='-108']").check();
    cy.get("input[data-testid='secondary-continue-button']").click();

    cy.pause();
    cy.get(
      "body > div:nth-child(5) > div:nth-child(52) > div:nth-child(1) > div:nth-child(2) > div:nth-child(3) > div:nth-child(1) > div:nth-child(14) > div:nth-child(5) > div:nth-child(1) > div:nth-child(1) > form:nth-child(1) > span:nth-child(2) > span:nth-child(1) > span:nth-child(1) > span:nth-child(1) > input:nth-child(1)"
    ).click();

    cy.wait(6000);
    cy.get("h4[class='a-alert-heading']")
      .should("be.visible")
      .and("have.text", "Payment successful");
  });
});
