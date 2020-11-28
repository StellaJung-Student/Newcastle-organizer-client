describe('Sign in page', () => {
    beforeEach(() => {
        cy.visit('/');
        cy.get('h1').contains('Sign in');
    });

    it('should display 2 input username and password', () => {});

    it('should go to sign up page on click', () => {});

});