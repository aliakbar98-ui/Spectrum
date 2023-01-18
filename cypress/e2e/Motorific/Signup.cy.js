/// <reference types="cypress" />
///<reference types ='cypress-xpath'/>

describe('MOTORIFIC', function()
{
    beforeEach(()=>{
    })
    /*Cypress.Cookies.defaults
    ({
       
    })*/
      it('Sign-Up Page',function(){
        cy.Motorific()
        cy.wait(2000)

      })
})
afterEach(() =>{

})