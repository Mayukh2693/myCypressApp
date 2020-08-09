import {homePage} from "../testApp/home/homePage";

describe("HomePage", () => {
    let homepg = new homePage();

    it("TestTS", () => {
        cy.visit("https://demoqa.com/profile");
        homepg.getElement().contains("Elements").click();
        homepg.getTextBox().contains("Text Box").click();
    });
})