describe('check the home page', () => {
  it('default behaviour', () => {
    cy.visit('http://localhost:19006');

    cy.contains('Voici le test technique de Tharick');

    cy.get('[id="home-screen"] > :last-child')
      .contains('LET\'S GO')
      .click();

    // check if we are on the ListOfPlayersScreen
    cy.get('[id="header"] > :nth-child(2) > :last-child').contains('Liste des joueurs');
  });
});