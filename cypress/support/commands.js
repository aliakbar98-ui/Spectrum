// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --

const { select } = require("async")
const { action } = require("commander")

// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})

// -- This is a parent command --SPECTRUM-----
Cypress.Commands.add('spectrum', (visit) => {

  cy.visit('https://webprojectmockup.com/custom/spectrum-8-v2/login')// Spectrum
})
//---------------SPECTRUM--LOGIN-----//
Cypress.Commands.add('login', (email, password) => {
  cy.get("#email").type(email).should('have.length.lessThan',30)
  cy.get("#password").type(password).should('have.length.at.least',1).should('have.length.at.most',30)
  cy.get("button[type='submit']").click()
})
//----------------SIDE MENU----------//
Cypress.Commands.add('Menu',(action)=>{
cy.get("button[id='sidebarToggle']#sidebarToggle").click()
})
//---------------FACILITATOR------------//
Cypress.Commands.add('Facilitator',(select)=>{
  cy.get('[data-bs-target="#collapseLayouts3"]/*body > div:nth-child(2) > div:nth-child(1) > nav:nth-child(1) > div:nth-child(1) > div:nth-child(1) > a:nth-child(8)').click()
})
//---------------------SEARCH BOX------//
Cypress.Commands.add('Search',(search)=>{
   cy.get("label > input/*[input[type='search']]").type(search,{force:true}).clear()
        
})
Cypress.Commands.add('Particpants',(part)=>{
  cy.get("div[id='collapseLayouts4'] a:nth-child(2)").click({force:true})
})
//-----------------SELECT LIST COUNT---//
// Cypress.Commands.add('Mark',(name)=>{
// 
  
// })
/*Cypress.Commands.add('swopers', (visit) => {

  cy.visit('https://swopers.com/public')
})*/



////////////---------------------------MOTORIFIC----------------////////////////
Cypress.Commands.add('Motorific',(visit)=>{
  cy.visit('https://webprojectmockup.com/custom/motorific/public/')
})