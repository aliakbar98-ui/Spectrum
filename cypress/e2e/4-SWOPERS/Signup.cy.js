/// <reference types="cypress" />
///<reference types ='cypress-xpath'/>

describe('SWOPERS', function(){
  beforeEach(()=>{
    // URL
   
  })
  // Cypress.Cookies.defaults({
  //   preserve: 'spectrum_8_session'
})
    it('Sign-up-Page',function(){
      cy.swopers()
      cy.get("Free Sign Up or div[id='navbarNavDropdown'] a[class='btn btn-sm btn-outline-light rounded btn-sm-green text-white']").click({force:true})
    })
after(() =>
{
    cy.log('After All Test')
})
