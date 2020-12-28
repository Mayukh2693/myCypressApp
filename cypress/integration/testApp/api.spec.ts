
describe("API testing", () => {
    it("RestAPI GET test", () => {
        cy.fixture('endpoints').then((json) => {
            cy.request(json.GetEndpoint + "1").as('GETResp');
                cy.get('@GETResp').its('body').then(($res) => {
                    expect($res).not.to.be.null
                    expect($res.data[0].first_name).equals('George');
                    cy.wrap($res.data[0].first_name).as("Name");
                    const userName = $res.data[0].first_name
                    cy.log("Name: "+ userName)
            });
    });
            cy.get('@Name').then((item) => {
            expect(item).equals('George');
            });
    });    

    it("RestAPI POST test", () => {
        cy.fixture('endpoints').then((ep) => {
            cy.fixture('PostReq').then((json) => {
                cy.request('POST',ep.PostEndpoint,json).as('POSTResp');
                cy.get('@POSTResp').its('body').then((res) => {
                    expect(res).to.have.property('job',json.job);
                    cy.wrap(res).as("ID");
                });
                cy.get("@ID").should('have.property','name',json.name);
            });
        });        
    });  
    
    it("RestAPI POST 2 test", () => {
        let payload = {
            "name": "Mak",
            "job": "QA dept"
        }
        cy.fixture('endpoints').then((ep) => {
                cy.request('POST',ep.PostEndpoint,payload).as('POSTResp');
                cy.get('@POSTResp').its('body').then((res) => {
                    expect(res).to.have.property('job',payload.job);
                });
            });        
    }); 

    it("RestAPI POST 3 test", () => {
        cy.fixture('endpoints').then((ep) => {
            cy.fixture('players').then((js) => {
                cy.request('POST',ep.PostEndpoint,js[0]).as('POSTResp');
                cy.get('@POSTResp').its('body').then((res) => {
                    expect(res).to.have.property('job',js[0].job);
                    cy.wrap(res.name).as("userName");
                });
                cy.get("@userName").should('equal',js[0].name);
            });
        });        
    });
});