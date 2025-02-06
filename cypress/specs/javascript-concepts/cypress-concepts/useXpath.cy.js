describe('Using XPath in Cypress', () => {
    it('should find an element using XPath and click it', () => {
      // Visit the page you want to test
      cy.visit('https://example.com');
  
      // Use XPath to locate an element and click it
      cy.xpath(`//a[normalize-space()='More information...']`).click({force:true});
  
      // Verify the result after the click
    //   cy.url().should('include', '/new-page');
    });
  });
  