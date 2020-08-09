

export class homePage{
    getElement(){
        return cy.get("div.header-text");
    }
    getTextBox(){
        return cy.get("span.text");
    }
}