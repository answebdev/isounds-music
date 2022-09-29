/// <reference types="cypress" />

describe('Second test suite - search functionality', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('visits the main page of the application', () => {
    cy.url().should('include', '/');
    cy.log('Checking that navbar has the text of the app');
    cy.get('[data-testid=app-name]').should('have.text', ' iSounds Music');
    cy.log('Checking that p tag has "Search for your favorite artists" text');
    cy.get('[data-testid=search-text]').should(
      'have.text',
      'Search for your favorite artists'
    );
  });

  it('searches for artist that does not exist', () => {
    cy.get('[data-testid=input]').type('lungfish');
    cy.contains(
      "Sorry, we couldn't find anything matching your search criteria. Please try again."
    ).should('exist');
  });

  it('searches for David Bowie', () => {
    cy.get('[data-testid=input]').type('David Bowie');
    cy.get('[data-testid=artist-name]').should('have.text', 'David Bowie');

    cy.get('[data-testid=genre]').should('have.text', 'Genre: Rock');
    cy.get('[data-testid=country]').should(
      'have.text',
      'Origin: London, England'
    );
    cy.get('[data-testid=website-link]').should(
      'have.text',
      'www.davidbowie.com'
    );

    cy.log(
      'Checking that user goes to David Bowie album page after clicking Albums button'
    );
    cy.get('[data-testid=go-to-albums]').should('have.text', 'Albums').click();
  });
});
