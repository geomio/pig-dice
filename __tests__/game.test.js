// import Triangle from '../src/triangle.js';

// describe('Triangle', () => {

//   test('should correctly create a triangle object with three lengths', () => {
//     const triangle = new Triangle(2, 4, 5);
//     expect(triangle.side1).toEqual(2);
//     expect(triangle.side2).toEqual(4);
//     expect(triangle.side3).toEqual(5);
//   });
  
//   test('should correctly find wether three lengths are not a triangle', () => {
//     const notTriangle = new Triangle(3, 9, 22);
//     expect(notTriangle.checkType()).toEqual("not a triangle");
//   })
  
//   test('should correctly determine wether three lengths make a scalene triangle', () => {
//     const scalTriangle = new Triangle(4, 5, 7)
//     expect(scalTriangle.checkType()).toEqual("scalene triangle");
//   })
  
//   test('should determine wether three length make isosceles triangle', () => {
//     const isocTriangle = new Triangle(5, 5, 7)
//     expect(isocTriangle.checkType()).toEqual("isosceles triangle");
//   })
  
//   test('should determine wether three length make equilateral triangle', () => {
//     const equiTriangle = new Triangle(5, 5, 5)
//     expect(equiTriangle.checkType()).toEqual("equilateral triangle");
//   })
// });

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
  
  test('addRollToScore should change this.current score', () => {
    const player1 = new Player("tom");
    const player2 = new Player("jerry");
    const newGame = new Game(player1, player2)
    newGame.addRollToScore(5)
    expect(newGame.currentScore).toEqual(5);
  });
  
  test('addCurrentScoreToPlayer', () => {
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
    newGame.addCurrentScoreToPlayer();
    expect(newGame.player1.totalScore).toEqual(100);
  });  
});


