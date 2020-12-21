import {homeLocators} from "../pageObj/homeLocators";
const homeLocs = new homeLocators();
export class homeMethods{
    
    public clickAllBtns(){
        cy.get(homeLocs.doubleClickBtn).dblclick();
        cy.get(homeLocs.righClickBtn).rightclick();
        cy.get(homeLocs.clickBtn).eq(2).click();
    }
}