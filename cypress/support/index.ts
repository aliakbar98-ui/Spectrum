declare namespace Cypress{
    
    interface Chainable{
        login(email: string, password: string): void // as the method doesn't return, so void
    }
}
declare namespace Cypress{
    
    interface url{
        // spectrum(visit: string): void // as the method doesn't return, so void
        swopers(visit: string): void // as the method doesn't return, so void
    }
}
