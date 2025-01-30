

describe ("POST Method using Fixtures",()=>
{

        it("Post Method",()=>
        {
            cy.fixture('Request_Body').then((RequestBody)=>
            {
                cy.request({
                    method : "POST",
                    url : "https://reqres.in/api/users",
                    body : RequestBody
                })
                .then((response)=>
                {
                    expect(response.status).to.eq(201)
                    expect(response.body.name).to.eq(RequestBody.name)
                    expect(response.body.job).to.eq(RequestBody.job)
            })
        })


})
})