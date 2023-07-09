import { positionNames } from '../../interface/Player';

const firstPlayerName = 'Dimitri Payet';
const secondPlayerName = 'Kylian Mbappé';
const positions = Object.values(positionNames);

describe('check the players list page', () => {


  beforeEach(() => {
    cy.visit('http://localhost:19006');
    // click on the Let's go button
    cy.get('[id="home-screen"] > :last-child').click();
  });

  it('default behaviour', () => {
    // select Attaquant
    cy.get('[id="position-selector"] > :first-child > div > :first-child').click();
    cy.get('[id="position-selector"] > :first-child > :last-child > div > div  > div').eq(5).click();

    // check positions of only the first 50 players
    cy.get('[id="players-list"] > div > div > div > :nth-child(2)')
      .each(($el, index) => {
        if (index < 50) {
          cy.wrap($el).contains(positions[5]);
        }
      });

    // type the player name
    cy.get('[id="search-bar"] > :first-child')
      .type(secondPlayerName)
      .should('have.value', secondPlayerName);

    // select the player
    cy.get('[id="players-list"] > div > div > div > :nth-child(2)')
      .contains(secondPlayerName)
      .click();

    // check if we are on the PlayerDetails page
    cy.get('[id="header"] > :nth-child(2) > :last-child').contains('Fiche détailée du joueur');
  });

  it('enter wrong position for a player', () => {
    // type the player name
    cy.get('[id="search-bar"] > :first-child')
      .type(secondPlayerName);

    // check if the player is there
    cy.get('[id="players-list"] > div > div > div > :nth-child(2)')
      .contains(secondPlayerName);

    // select a wrong position for this player
    cy.get('[id="position-selector"] > :first-child > div > :first-child').click();
    cy.get('[id="position-selector"] > :first-child > :last-child > div > div  > div').eq(0).click();

    // check message
    cy.contains('Pas de joueur correspondant à votre recherche');
  });

  it('enter the name of a player not on the list', () => {
    cy.get('[id="search-bar"] > :first-child')
      .type(firstPlayerName + secondPlayerName);

    // check message
    cy.contains('Pas de joueur correspondant à votre recherche');
  });


  it('check the searchBar', () => {
    // check placeholder
    cy.get('[id="search-bar"] > :first-child')
      .should('have.attr', 'placeholder')
      .and('equal', "Entrez le nom d'un joueur")

    //check type information
    cy.get('[id="search-bar"] > :first-child').type(firstPlayerName).should('have.value', firstPlayerName)

    //check clear button
    cy.get('[id="search-bar"] > :last-child').click()
    cy.get('[id="search-bar"] > :first-child').should('not.have.value', firstPlayerName)
  });

  it('check the dropDownList', () => {
    // check placeholder
    cy.get('[id="position-selector"] > :first-child > div > :first-child')
      .contains('Filtrer par poste')
      .click();

    //check values
    cy.get('[id="position-selector"] > :first-child > :last-child > div > div  > div')
      .each(($el, index) => {
        cy.wrap($el).contains(positions[index]);
      });

    //select a value
    cy.get('[id="position-selector"] > :first-child > :last-child > div > div  > div')
      .eq(0)
      .click();

    cy.get('[id="position-selector"] > :first-child > div > :first-child')
      .contains(positions[0]);

    //check clear button
    cy.get('[id="position-selector"] > :last-child').click();
    cy.get('[id="position-selector"] > :first-child > div > :first-child')
      .contains('Filtrer par poste');
  });
});