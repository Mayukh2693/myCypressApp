import { homeLocators } from "../../pageObj/homeLocators";

describe("HomePage", () => {
    let homepg = new homeLocators();
    before(()=> {
        cy.visit("https://demoqa.com/profile");
    })

    it("Test TextBox", () => {
        cy.get(homepg.header).contains("Elements").click();
        cy.get(homepg.textBox).contains("Text Box").click();
        cy.FillForm("Mayukh Nath","nath.mayukh@gmail.com","Chennai");
    });
    it("Test CheckBox", () => {
        cy.get(homepg.header).contains("Elements").click();
        cy.get(homepg.checkBox).contains("Check Box").click();
        cy.get(homepg.homeCheckBox).click();
        cy.get('#result').should('exist');
    });
    it("Test RadioButton", () => {
        cy.get(homepg.header).contains("Elements").click();
        cy.get(homepg.radioButton).contains("Radio Button").click();
        cy.get(homepg.yesRadioButton).contains("Yes").click();
        cy.get('.text-success').should("be.visible").contains("Yes");
    });
})