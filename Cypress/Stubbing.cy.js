describe("Stub Network Requests",()=>
{

    it("Stub GET Request", ()=>
    {
        cy.intercept({
            method : 'GET',
            url    : 'http://localhost:3000/Students'

        })
    })

    it("Stub GET Response", ()=>
        {
            cy.intercept('GET','http://localhost:3000/Students', {fixture : "Stubbing_Record.json"})
        })

    it.only("Stub GET with Static Response", ()=>
    {
        cy.intercept('GET','http://localhost:3000/Students',
        {
        SID: 10,
        Name: "Student Ten",
        City: "Texas"
    })
    /*.then((response)=>
    {
        expect(response.status).to.eq(200)
    })*/
    })

    it("Stub POST Request", ()=>
    {
        cy.intercept('POST','http://localhost:3000/Students')
    })

    it("Stub POST with Static PayLoad", ()=>
        {
            cy.intercept('POST','http://localhost:3000/Students',
            {
            SID: 10,
            Name: "Student Ten",
            City: "Texas"
        })
    })

    it("Stub POST PayLoad using Fixture", ()=>
        {
            cy.intercept('POST','http://localhost:3000/Students', {fixture : "Stubbing_Record.json"})
        })

})