/// <reference types="cypress" />
///<reference types ='cypress-xpath'/>
const { skip } = require("rxjs")

describe('Settings',function(){
    beforeEach(()=>{
        cy.spectrum()
        cy.fixture('testdata').then(function(Credentails){
            this.Credentails=Credentails
        })
        // cy.viewport(768,1024)
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
    skip.this
    it.skip('Results',function(){
        // cy.spectrum()
        // cy.get("button[id='sidebarToggle']#sidebarToggle").click()
        cy.get('[data-bs-target="#collapseLayouts0"]').trigger('mouseover').click()
        cy.wait(3000)
        cy.get("div[id='collapseLayouts0'] a:nth-child(1)[href]").click()
        cy.wait(2000)
        cy.get("button[id='sidebarToggle']#sidebarToggle").click()
        cy.wait(2000)
        cy.contains("Percent").scrollIntoView({easing:'swing',duration:'5000'}).should('be.visible')
        cy.wait(2000)
        cy.get("input[type='search']").type('female',{force:true})
        cy.wait(2000)
        cy.get(".select_all[class$='select_all']").should('not.be.checked').check({force:true})
        cy.wait(2000)
        cy.wait(2000)
        cy.get(".select_all[class$='select_all']").scrollIntoView({easing:'swing',duration:'3000'}).should('be.visible')
        cy.wait(2000)
    })
    skip.this
    it.skip('Users', function(){
        cy.get("button[id='sidebarToggle']#sidebarToggle").click()
        cy.get('[data-bs-target="#collapseLayouts0"]').trigger('mouseover').click()
        cy.wait(3000)
        cy.get("div[id='collapseLayouts0'] a:nth-child(2)").click({force:true})
        cy.wait(1000)
        cy.get("button[id='sidebarToggle']#sidebarToggle").click()
        cy.wait(2000)
        cy.get(".justify-content-between > .btn-info[class$='btn btn-info text-white']").click({force:true})
        cy.wait(1000)
        cy.get("button[id='sidebarToggle']#sidebarToggle").click()
        cy.wait(2000)
        var roles   = ['System Manager','Manage Role', 'Manage Profile','Manage Guest','Application Manager','Manage Organization','Manage Facilitators','Manage Participants','Manage Class','Manage Group']
        var name    = ['Luke','Marcus','Timothy','Candace','Simon','Eunice',' Paul',' Judah','Alexandra','Harper']
        var Email   = ['Testone@yahoomail.com','akramalitest@gmail.com','fahemanism@gmail.com','fahemanoms@gmail.com','fahemantest@gmail.com','fahemantest2@gmail.com','fahemantest3@gmail.com','fahemantest4@gmail.com','fahemantest5@gmail.com','fahemantest6@gmail.com']
        for(let i = 1 ,x=0,y=0;i<roles.length && x<Email.length && y<name.length;i++ ,x++,y++)
        {
            cy.get('#user_check').select(i)
            cy.wait(1000)
            cy.get("input[placeholder='Name']").clear().type(name[x])
            cy.wait(1000)
            cy.get("input[placeholder='Email']").clear().type(Email[y])
            cy.wait(1000)
            cy.get("input[placeholder='Password']").clear().type(this.Credentails.Password)
            cy.get("input[placeholder='Confirm Password']").clear().type(this.Credentails.Confirm)
            if(cy.get("input[value='Submit']").click())
            cy.wait(4000)
        }
    })
    skip.this
    it.skip('Edit User', function(){
        cy.spectrum()
        // cy.get("button[id='sidebarToggle']#sidebarToggle").click()
        cy.get('[data-bs-target="#collapseLayouts0"]').trigger('mouseover').click()
        cy.wait(2000)
        cy.get("div[id='collapseLayouts0'] a:nth-child(2)").click({force:true})
        cy.wait(1000)
        cy.get("button[id='sidebarToggle']#sidebarToggle").click()
        cy.wait(1000)
        cy.get('select').select('100',{force:true}).should('have.value','100')
        cy.scrollTo('bottom',{easing:'swing',duration:'500'})
        cy.wait(3000)
        cy.scrollTo('top',{easing:'swing',duration:'500'})
        cy.get('tbody tr:nth-child(1) td:nth-child(6) div:nth-child(1) a:nth-child(1)').click({force:true})
        cy.get(':nth-child(2) > .form-control').clear().type('System Manager Role')
        cy.get("input[placeholder='Password']").clear().type(this.Credentails.Password)
        cy.get("input[placeholder='Confirm Password']").clear().type(this.Credentails.Confirm)
        cy.wait(2000)
        cy.get("input[value='Update']/*[.text-center > .btn]").click()
        cy.wait(1000)
        cy.contains("User Updated Successfully ").should('be.visible')
    })
    it('Trash', function(){
        cy.spectrum()
        cy.get('[data-bs-target="#collapseLayouts0"]').trigger('mouseover').click()
        cy.wait(2000)
        cy.get("div[id='collapseLayouts0'] a:nth-child(2)").click({force:true})
        cy.wait(1000)
        cy.get("button[id='sidebarToggle']#sidebarToggle").click()
        cy.wait(1000)
        cy.get("input[value='Bulk Delete']").click({force:true})
        cy.contains("Select Atleast One Record")
        cy.wait(1000)
        cy.get('select').select('100',{force:true}).should('have.value','100')
        cy.scrollTo('bottom',{easing:'swing',duration:'500'})
        cy.wait(3000)
        cy.get("input[value='57']").should('not.be.checked').check()
        cy.wait(1000)
        cy.scrollTo('top',{easing:'swing',duration:'500'})
        cy.get("input[value='Bulk Delete']").click({force:true})
        cy.wait(2000)
        cy.get(".justify-content-between > div > .btn/*a[class='btn btn-danger text-white']]").click({force:true})
        cy.contains('akraeameen@gmail.com').should('be.visible')
        cy.wait(2000)
        cy.get(".d-flex > .btn/*//a[@title='restore']//*[name()='svg']//*[name()='path' and contains(@fill,'currentCol')]").click({force:true})
        cy.get("div[id='collapseLayouts0'] a:nth-child(2)").click({force:true})
        cy.wait(1000)
        cy.get("button[id='sidebarToggle']#sidebarToggle").click()
        cy.wait(1000)
        cy.get('select').select('100',{force:true}).should('have.value','100')
        cy.scrollTo('bottom',{easing:'swing',duration:'500'})
        cy.contains('akraeameen@gmail.com').should('be.visible')
       

    })
})