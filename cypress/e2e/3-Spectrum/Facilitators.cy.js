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

   /*
    it('Login-PAge Credentails As Super-Admin',function(){
             cy.spectrum()
             cy.wait(2000)
             cy.login('superadmin@gmail.com','12345678')
             cy.wait(2000)
        })*/
    it('Facilitators', function(){
        cy.Facilitator()

        var choice = ['25','50','100']
        var org = ['Playing Square','tipusulta@gmail.com','parent']
        var faccalss = ['Edward bernosky','Class 4','Overhead']
        cy.get("body > div:nth-child(2) > div:nth-child(1) > nav:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(9) > nav:nth-child(1) > a:nth-child(1)").click({force:true})
        cy.get('.set_table').scrollTo('right',{easing:'swing',duration:3000}).should('be.visible')

        for(let y=0,z=0;y<choice.length,z<org.length;y++,z++)
        {
         cy.get('select').select(choice[y],{force:true}).should('have.value',choice[y])
         cy.wait(2000)
         cy.scrollTo('bottom',{easing:'swing',duration:'500'})
         cy.wait(1000)
         cy.scrollTo('top',{easing:'swing',duration:'500'})
         cy.scrollTo('bottomRight',{easing:'swing',duration:1000})
         cy.Search(org[z])
         cy.wait(2000)
        }
        cy.get("body > div:nth-child(2) > div:nth-child(1) > nav:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(9) > nav:nth-child(1) > a:nth-child(2)").click({force:true})
        for(let y=0,z=0;y<choice.length,z<org.length;y++,z++)
        {
         cy.get('select').select(choice[y],{force:true}).should('have.value',choice[y])
         cy.wait(2000)
         cy.scrollTo('bottom',{easing:'swing',duration:'500'})
         cy.wait(1000)
         cy.scrollTo('top',{easing:'swing',duration:'500'})
         cy.scrollTo('bottomRight',{easing:'swing',duration:1000})
         cy.Search(org[z])
         cy.wait(2000)
        }
    })
 })
afterEach(()=>{

})