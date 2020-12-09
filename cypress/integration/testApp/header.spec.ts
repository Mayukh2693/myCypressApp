import {homePage} from "../../pageObj/homePage";

describe("Header Spec", () => {
    let homepg = new homePage();
    before(()=> {
        cy.visit("/profile");
    })

    it("Test WebTables", () => {
        homepg.getElement().contains("Elements").click();
        homepg.getWebTable().contains("Web Tables").click();
        homepg.getDeleteRecord().first().click();
        homepg.getDeleteRecord().should('not.exist');
    });
})