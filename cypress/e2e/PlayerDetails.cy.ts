const playerName = 'Rayan Cherki';
const playerPost = 'Milieu offensif du OL'

describe('check the player details page', () => {

  it('default behaviour', () => {
    cy.visit('http://localhost:19006');

    // click on the Let's go button
    cy.get('[id="home-screen"] > :last-child').click();

    // select a player
    cy.get('[id="search-bar"] > :first-child')
      .type(playerName);
    cy.get('[id="players-list"] > div > div > div > :nth-child(2)')
      .contains(playerName)
      .click();

    // check main information
    cy.get('[id="player-main-info"] > :first-child').contains(playerName)
    cy.get('[id="player-main-info"] > :last-child').contains(playerPost)
  });
});