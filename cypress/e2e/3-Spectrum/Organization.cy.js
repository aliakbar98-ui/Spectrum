///<reference types="cypress" />
///<reference types ='cypress-xpath'/>

describe('LOOK-UP', function(){
    beforeEach(()=>{
        cy.clearLocalStorage()
        cy.spectrum()
        })
    /Cypress.Cookies.defaults({
         preserve: 'spectrum_8_session'
    })

   /*
    it('Login-PAge Credentails As Super-Admin',function(){
             cy.spectrum()
             cy.wait(2000)
             cy.login('superadmin@gmail.com','12345678')
             cy.wait(2000)
        })*/
    it('Organizations', function(){
        cy.spectrum()
        cy.Menu()
        cy.get('[data-bs-target="#collapseLayouts2"]/*body > div:nth-child(2) > div:nth-child(1) > nav:nth-child(1) > div:nth-child(1) > div:nth-child(1) > a:nth-child(6)').click({force:true})
        cy.wait(1000)
        cy.get("#collapseLayouts2 > .sb-sidenav-menu-nested > .nav-link/*div[id='collapseLayouts2'] a[class='nav-link']").click({force:true})
        var list = ['10','25','50','100']
        let org = ['Playing Square','tipusulta@gmail.com','parent']
        for(let i= 0; i<list.length;i++)
        {
            cy.get('select').select(list[i],{force:true}).should('have.value',list[i])
            cy.wait(2000)
            cy.scrollTo('bottom',{easing:'swing',duration:'500'})
            cy.wait(1000)
            cy.scrollTo('top',{easing:'swing',duration:'500'})
        }
        for(let x= 0; x<org.length;x++)
        {
            cy.Search(org[x])
            cy.wait(1000)
        }
    })

})

afterEach(()=>{
})