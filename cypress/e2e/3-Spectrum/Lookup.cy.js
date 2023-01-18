/// <reference types="cypress" />
///<reference types ='cypress-xpath'/>

describe('LOOK-UP', function(){
    beforeEach(()=>{
        cy.clearLocalStorage()
        cy.spectrum()
        })
    /Cypress.Cookies.defaults({
         preserve: 'spectrum_8_session'
    })

   
   /* it('Login-PAge Credentails As Super-Admin',function(){
             cy.spectrum()
             cy.wait(2000)
             cy.login('superadmin@gmail.com','12345678')
             cy.wait(2000)
        })*/
    it('Grades',function(){
        cy.spectrum()
        // cy.get("[data-bs-target='#collapseLayouts1']/*a[normalize-space()='Lookup'])[1]").trigger('mouseover').click()
        var looks = ["Grades","Email Type","Colors","Class","Assessment Type","Ninty Five","Organization Type","Assessments",
                    "Assessments Evaluates","Event Category","Event Type","Contact","Contact Type"]
        var search = ["Grade","Gmail","Green","Class 5","Distance","Yes","Greenwich Organizing Committee","8 Mile Beeper","Power Symmetry","Public Event","Virtual Inter - Organization - School","Grisby@gmail.com","School"]
                
        for(let i =0,m=0;i<looks.length && m<search.length;i++,m++)
        {
            cy.get("[data-bs-target='#collapseLayouts1']/*a[normalize-space()='Lookup'])[1]").trigger('mouseover').click()
            cy.get(".nav-link").contains(looks[i]).click({force:true})
            cy.wait(200)
            cy.get('.justify-content-between > .btn-info').should('not.exist')
            cy.wait(200)
            cy.get("input[value='Bulk Delete']").should('not.exist')
            cy.wait(200)
            cy.get(".justify-content-between > div > .btn/*a[class='btn btn-danger text-white']]").should('not.exist')
            cy.wait(200)
            cy.get('tbody tr:nth-child(1) td:nth-child(6) div:nth-child(1)').should('not.exist')
            cy.wait(1000)
            cy.get("label > input/*[input[type='search']]").type(search[m],{force:true})
            cy.wait(1000)
        }

    })
})
afterEach(()=>{

})