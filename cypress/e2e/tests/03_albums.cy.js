/// <reference types="cypress" />

describe('Third test suite - album details', () => {
  beforeEach(() => {
    cy.visit('/artist/111444');
  });

  it('visits the albums page', () => {
    cy.once('uncaught:exception', () => false);
    cy.url().should('include', '/artist/111444');
    cy.log('Checking that h1 tag has "albums" text');
    cy.get('[data-testid=albums]').should('have.text', 'Albums');
  });

  it('gets Hunky Dory album information', () => {
    cy.get('[data-testid=album-title]').should('contain.text', 'Hunky Dory');

    cy.log('Checking that Hunky Dory album title text displays');
    cy.get('[data-testid=album-title]').eq(9).should('contain', 'Hunky Dory');

    cy.log('Checking that Hunky Dory year text displays');
    cy.get('[data-testid=album-year]').eq(9).should('contain', 'Year: 1971');

    cy.log('Checking that Hunky Dory genre text displays');
    cy.get('[data-testid=album-genre]').eq(9).should('contain', 'Genre: Rock');

    cy.log('Checking that Hunky Dory label text displays');
    cy.get('[data-testid=album-label]').eq(9).should('contain', 'Label: RCA');

    cy.log('Checking that Hunky Dory Description dropdown opens');
    cy.get('[data-testid=description]').eq(9).click();

    cy.log('Checking that Hunky Dory Description dropdown closes');
    cy.get('[data-testid=description]').eq(9).click();
  });

  it('scrolls to top of page', () => {
    cy.get('[data-testid=back-to-top-btn]')
      .should('have.text', 'BACK TO TOP')
      .click();
  });

  it('goes back to main page', () => {
    cy.get('[data-testid=app-name]')
      .should('have.text', ' iSounds Music')
      .click();
  });
});
