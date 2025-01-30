


describe ("Query Parameters", ()=>
{
    it("Pass QP", ()=>
    {
        cy.request({
            method : 'GET',
            url    : "https://reqres.in/api/users",
            qs     :  { page: 2}
                   
                    })
        .then((response) =>
        {
            expect(response.status).equal(200);
            expect(response.body.page).equal(2);
            
        })
    })

})