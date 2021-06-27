/// <reference types="cypress" />
describe('Sampletest for learning', () => {
  it('Verify the title of the Page', () => {
    cy.visit("https://www.iselect.com.au");
    cy.title().should('eq', 'iSelect Australia | Compare & Save on Car, Travel, Life, Home Loans & More')
    cy.url().should('eq','https://www.iselect.com.au/')
  })

});
