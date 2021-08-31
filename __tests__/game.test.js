import Game from "./../src/game";
import Player from "./../src/player";

describe('Game', () => {

  test('Game object should make a new game object with current player value of 1 and a current score of 0', () => {
    const player1 = new Player("tom");
    const player2 = new Player("jerry");
    const newGame = new Game(player1, player2);
    expect(newGame.currentPlayer).toEqual(1)
    expect(newGame.currentScore).toEqual(0);
  });
  
  test('addRollToScore should change this.current score if 2-6 are rolled', () => {
    const player1 = new Player("tom");
    const player2 = new Player("jerry");
    const newGame = new Game(player1, player2)
    newGame.addRollToScore(5)
    expect(newGame.currentScore).toEqual(5);
  });
  
  test('addRollToScore should change this.current score to 0 if 1 is rolled', () => {
    const player1 = new Player("tom");
    const player2 = new Player("jerry");
    const newGame = new Game(player1, player2)
    newGame.addRollToScore(1)
    expect(newGame.currentScore).toEqual(0);
  });
  
  test('addCurrentScoreToPlayer will add the current score to player', () => {
    const testPlayer1 = new Player("tom");
    const testPlayer2 = new Player("jerry");
    const newGame = new Game(testPlayer1, testPlayer2);
    newGame.currentScore = 8;
    newGame.addCurrentScoreToPlayer();
    expect(newGame.player1.totalScore).toEqual(8);
    expect(newGame.currentScore).toEqual(0);
  });
  
  test('changeCurrentPlayerValue should change current value from 1 to 2', () => {
    const testPlayer1 = new Player("tom");
    const testPlayer2 = new Player("jerry");
    const newGame = new Game(testPlayer1, testPlayer2);
    newGame.changeCurrentPlayerValue();
    expect(newGame.currentPlayer).toEqual(2)
  });
  
  test('checkScore should see is 100 is reached', () => {
    const testPlayer1 = new Player("tom");
    const testPlayer2 = new Player("jerry");
    const newGame = new Game(testPlayer1, testPlayer2);
    newGame.player1.totalScore = 100;
    newGame.player2.totalScore = 100;
    newGame.checkScore();
    expect(newGame.checkScore()).toEqual(true);
  });
  
  test('checkScore should see is 100 is not reached', () => {
    const testPlayer1 = new Player("tom");
    const testPlayer2 = new Player("jerry");
    const newGame = new Game(testPlayer1, testPlayer2);
    newGame.player1.totalScore = 10;
    newGame.player2.totalScore = 10;
    newGame.checkScore();
    expect(newGame.checkScore()).toEqual(false);
  });  
  
  test('rollDice should return a number between 0-7 excluding 0 and 7', () => {
    const newGame = new Game();
    newGame.rollDie();
    expect(newGame.rollDie()).toBeGreaterThanOrEqual(1);
    expect(newGame.rollDie()).toBeLessThan(7);
  });
});


