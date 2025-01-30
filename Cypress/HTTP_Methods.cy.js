

describe("HTTP Methods",()=>
{
    
    it("GET Method",()=>
    {
        cy.request('GET','https://reqres.in/api/users?page=2')
        .then((response)=>
        {
            expect(response.status).to.eq(200)
        })
    })

    it("POST Method", ()=>
    {
        let payload = {
            name: Math.random().toString(36).substring(2),
            job: Math.random().toString(36).substring(5)
        }

        cy.request({
            method: 'POST', 
            url:"https://reqres.in/api/users" ,
            body: payload
    })
    .then((response)=>
    {
        expect(response.status).to.eq(201)
        expect(response.body.name).to.eq(payload.name)
        expect(response.body.job).to.eq(payload.job)
    })
})
    
    it("PUT Method", ()=>
    {
        
        cy.request({
            method: 'PUT', 
            url:"https://reqres.in/api/users/967" ,
            body: {
                name: "Modified Name",
                job: "King resident"
            }
    })
    .then((response)=>
    {
        expect(response.status).to.eq(200)
        expect(response.body.name).to.eq("Modified Name")
        expect(response.body.job).to.eq("King resident")
    })

})
    it("DELETE Method", ()=>
    {
        
        cy.request({
            method: 'DELETE', 
            url:"https://reqres.in/api/users/967" 
    })
    .then((response)=>
    {
        expect(response.status).to.eq(204)
    })

    })


})
