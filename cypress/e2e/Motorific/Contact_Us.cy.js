/// <reference types="cypress" />
///<reference types ='cypress-xpath'/>

describe('MOTORIFIC', function()
{
    beforeEach(()=>{
    })
    /*Cypress.Cookies.defaults
    ({
       
    })*/
      it('Contact Us Page',function(){
        cy.Motorific()
        cy.wait(2000)
        cy.get('.head-btns > :nth-child(3)/*[Contact Us]').click().should('be.enabled')
        // cy.screenshot()
        cy.get('.head-btns > :nth-child(3)/*[Contact Us]').then(($btn) => {
            if ($btn.is(":enabled")) {
                cy.wrap($btn).click() //Button is enabled
            } else {
                //Button is disabled
            }
        })

      })
})
afterEach(() =>{

})