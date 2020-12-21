
describe('basic bank navigation', () => {
    beforeEach(function() {
            cy.visit('/');
          });

          it('it should navigate to', () =>{
            cy.get('.btn--text').click()
            cy.get('.section__header').e(0).should('have.text', 'Everything you need in a modern bank and more.')


          })

          it('should navigate', () => {
            cy.wait(1000)
          })

})