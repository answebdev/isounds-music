/// <reference types="cypress" />

describe('First test suite - endpoints', () => {
  it('should return artist data', () => {
    cy.log('Checking that endpoint works and returns the artist data');
    cy.request({
      method: 'GET',
      url: 'https://theaudiodb.com/api/v1/json/2/search.php?s=david_bowie',
    }).should((response) => {
      cy.log(JSON.stringify(response.body));
    });
  });

  it('should return album data', () => {
    cy.log('Checking that endpoint works and returns album data');
    cy.request({
      method: 'GET',
      url: 'https://theaudiodb.com/api/v1/json/2/album.php?i=111444',
    }).should((response) => {
      cy.log(JSON.stringify(response.body));
    });
  });
});
