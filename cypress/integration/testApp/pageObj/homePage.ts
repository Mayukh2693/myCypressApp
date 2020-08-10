

export class homePage{
    getElement(){
        return cy.get("div.header-text");
    }
    getTextBox(){
        return cy.get("span.text");
    }
    getCheckBox(){
        return cy.get(':nth-child(1) > .element-list > .menu-list > #item-1 > .text');
    }
    getHomeCheckBox(){
        return cy.get('.rct-checkbox > .rct-icon');
    }
    getRadioButton(){
        return cy.get(':nth-child(1) > .element-list > .menu-list > #item-2');
    }
    getYesRadio(){
        return cy.get(':nth-child(2) > .custom-control-label');
    }
}