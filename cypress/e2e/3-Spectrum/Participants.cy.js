 ///<reference types="cypress" />
///<reference types ='cypress-xpath'/>

describe('LOOK-UP', function(){
    beforeEach(()=>{
        cy.clearLocalStorage()
        cy.spectrum()
        })
    Cypress.Cookies.defaults({
         preserve: 'spectrum_8_session'
    })

   
   /* it('Login-PAge Credentails As Super-Admin',function(){
             cy.spectrum()
             cy.wait(2000)
             cy.login('superadmin@gmail.com','12345678')
             cy.wait(2000)
        })*/
    it('Paricipants',function(){
     cy.spectrum()
     cy.get("[data-bs-target='#collapseLayouts4']/*[@class='nav-link collapsed'][normalize-space()='Participants']").click({force:true})
     cy.Particpants()
     cy.get('.set_table').scrollTo('right',{easing:'swing',duration:3000}).should('be.visible')
     cy.wait(3000)
     var part = ["Participant Type","Participants Email"]
     for(let i=0;i<part.length;i++)
     { 
        cy.get("[data-bs-target='#collapseLayouts4']/*[@class='nav-link collapsed'][normalize-space()='Participants']").click({force:true})
        cy.get(".nav-link").contains(part[i]).click({force:true})
        cy.wait(3000)
     }
    })
})
afterEach(()=>{

})