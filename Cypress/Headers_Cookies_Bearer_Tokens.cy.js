/// <reference types = "Cypress"/>

describe("HCBT", ()=>
{
let B_Token = null, Books_Available = null;

    before("Generate and Assign Tokens", ()=>
    {
        cy.request({
            method : "POST",
            url : "https://simple-books-api.glitch.me/api-clients/",
            body : {
                clientName: "Books Client",
                clientEmail: Math.random().toString(20).substring(2) + "@gmail.com"
            },
            headers: {
                "Content-Type" : "application/json",
            },
            cookies : "ChocoChip Cookie"
        }).then((response) =>
        {
            expect(response.status).to.eq(201);
            B_Token = response.body.accessToken;
        });
    });

    it ("Get All Avaialable Books", ()=>{

        cy.request({
            method : "GET",
            url    : "https://simple-books-api.glitch.me/books",
            
        })
        .then((response)=>
        {
            Books_Available = response.body.id;
            console.log("Available Books " + Books_Available);
            
        });


    });




    it("Place Book Order", ()=>
    {
        cy.request({
            method : "POST",
            url    : "https://simple-books-api.glitch.me/orders",
            body   :{
                bookId: 1,
                customerName: Math.random().toString(5).substring(2),
            },
            headers : {
                "Authorization" : "Bearer " + B_Token
            }
        });
    });




});