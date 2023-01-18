/// <reference types="cypress" />
/<reference types ='cypress-xpath'/>
describe('SPECTRUM-8', () => {
  beforeEach(()=>{
})
    it('Login-Pgae Credentails As Super-Admin', ()=>{
      cy.visit("https://webprojectmockup.com/custom/spectrum-8-v2/login")
      cy.wait(2000)
      cy.login('superadmin@gmail.com','12345678')
    })
    it('Spectrum Title', ()=>{
      cy.contains("Super Admin")
    })

    })