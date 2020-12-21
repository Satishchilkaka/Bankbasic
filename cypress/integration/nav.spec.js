
describe('basic bank navigation', () => {
    beforeEach(function() {
            cy.visit('/');
          });

          it('it should navigate to', () =>{
            cy.get('.btn--text').click()
            cy.get('.section__header').eq(0).click()


          })

          it('should navigate', () => {
            cy.wait(1000)
          })

})