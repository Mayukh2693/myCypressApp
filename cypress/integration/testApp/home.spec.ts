import {homePage} from "../../pageObj/homePage";

describe("HomePage", () => {
    let homepg = new homePage();
    before(()=> {
        cy.visit("https://demoqa.com/profile");
    })

    it("Test TextBox", () => {
        homepg.getElement().contains("Elements").click();
        homepg.getTextBox().contains("Text Box").click();
        cy.FillForm("Mayukh Nath","nath.mayukh@gmail.com","Chennai");
    });
    it("Test CheckBox", () => {
        homepg.getCheckBox().contains("Check Box").click();
        homepg.getHomeCheckBox().click();
        cy.get('#result').should('exist');
    });
    it("Test RadioButton", () => {
        homepg.getRadioButton().contains("Radio Button").click();
        homepg.getYesRadio().contains("Yes").click();
        cy.get('.text-success').should("be.visible").contains("Yes");
    });
})