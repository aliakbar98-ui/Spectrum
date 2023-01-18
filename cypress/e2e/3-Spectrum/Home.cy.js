/// <reference types="cypress" />
///<reference types ='cypress-xpath'/>

describe('SPECTRUM-8', function(){
  beforeEach(()=>{
  })
  Cypress.Cookies.defaults({
    preserve: 'spectrum_8_session'
})
    /*it('Login-Pgae Credentails As Super-Admin',function(){
        cy.spectrum()
        cy.wait(2000)
        cy.login('superadmin@gmail.com','12345678')
    })*/
    it('Home Page',()=>{
        cy.spectrum()
        cy.get(".navbar-brand.ps-3[class^='navbar-brand ps-3']").click()
        cy.wait(2000)
        cy.get('input[type=search]').type('John Carlos',{force:true})
        cy.get('#resultTable_wrapper').contains('John Carlos')
        cy.wait(4000)
        cy.get('input[type=search]').clear().type('Overhead',{force:true})
        cy.wait(3000)
        cy.get('input[type=search]').clear().type('!&%$_)(*&',{force:true})
        cy.wait(3000)
        cy.get(".dataTables_empty[class$='dataTables_empty']").contains('No matching records found')
        })
    
})
after(() =>
{
    cy.log('After All Test')
})
