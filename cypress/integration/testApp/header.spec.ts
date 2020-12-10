import { homeLocators } from "../../pageObj/homeLocators";


describe("Header Spec", () => {
    let homepg = new homeLocators();
    before(()=> {
        cy.visit("/profile");
    })

    it("Test WebTables", () => {
        cy.get(homepg.header).contains("Elements").click();
        cy.get(homepg.webTable).contains("Web Tables").click();
        cy.get(homepg.deleteRecordOne).click();
        cy.get(homepg.deleteRecordOne).should('not.exist');
    });
})