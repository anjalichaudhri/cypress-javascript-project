describe('Javascript concepts in cypress', () => {
    const url = Cypress.config('baseUrl') + '/posts'; //constent var
    let userId = 1; // mutent variable

    it('uses variables and constants', () => {
        cy.request('GET', url).then((response) => {
            expect(response.status).to.equal(200);
            expect(response.body[0].userId).to.equal(userId);
        })
    })
})