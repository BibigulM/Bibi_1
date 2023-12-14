describe('', () => {
    it('should verify the new tab', () => {
        cy.visit('https://tablepress.org/demo/')
        cy.get('[id="tablepress-demo_wrapper"]')
        .contains('td','Barry')
        .should('have.text', 'Barry')
        .debug()
        
        cy.get('#tablepress-demo td').first().should('have.text', 'Gloria')

        cy.get('#tablepress-demo td').last().should('have.text', '$20')


    });
    
});