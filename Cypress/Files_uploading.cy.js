import 'cypress-file-upload';

describe("Handling Files", ()=>
{

    it("File Uplaod", ()=>
    {
        cy.visit("https://the-internet.herokuapp.com/upload")
        cy.get("#file-upload").attachFile("Test_File.txt");
        cy.get("#file-submit").click();
        cy.wait(5000)
        cy.get("#content > div > h3").contains("File Uploaded!")
    })

    it("MultiFiles Upload", ()=>
    {
        cy.visit("https://the-internet.herokuapp.com/upload")
        cy.get("#drag-drop-upload").attachFile(["Test_File.txt", "Request_Body.json"], {subjectType : "drag-n-drop"});
        cy.get("#drag-drop-upload").contains("Test_File.txt");
        cy.get("#drag-drop-upload > div:nth-child(2) > div.dz-details > div > span").contains("Request_Body.json")
        cy.get("#file-submit").click();
    }
    )
    


})