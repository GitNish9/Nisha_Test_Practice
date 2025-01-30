/// <reference types = "Cypress"/>

describe("API Chaining", ()=>
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
            Books_Available = response.body[0].id;
            console.log("Available Books " + Books_Available);
            return Books_Available;
        })

        .then((Books_Available)=>
        {
            cy.request({
                method : "POST",
                url    : "https://simple-books-api.glitch.me/orders",
                body   :{
                    bookId: Books_Available,
                    customerName: Math.random().toString(5).substring(2),
                },
                headers : {
                    "Authorization" : "Bearer " + B_Token
                }
            });
        })
   
        
    });




});