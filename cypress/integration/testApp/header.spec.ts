import { homeLocators } from "../../pageObj/homeLocators";
import { homeMethods } from "../../pageObj/homeMethods";


describe("Header Spec", () => {
    const homepg = new homeLocators();
    const homeMeth = new homeMethods();
    before(()=> {
        cy.visit("/profile");
    });

    it("Test WebTables", () => {
        cy.get(homepg.header).contains("Elements").click();
        cy.get(homepg.webTable).contains("Web Tables").click();
        cy.get(homepg.deleteRecordOne).eq(0).click();
        cy.get(homepg.deleteRecordOne).should('have.length',2).and('not.have.id','delete-record-1')
    });

    it("Click All Buttons", () => {
        cy.get(homepg.header).contains("Elements").click();
        cy.get(homepg.buttonsInTable).contains("Buttons").click();
        homeMeth.clickAllBtns();
        cy.get(homepg.rightClickMessage).should('be.visible');
        cy.get(homepg.doubleClickMessage).should('be.visible');
        cy.get(homepg.singleClickMessage).should('be.visible');

    })
})