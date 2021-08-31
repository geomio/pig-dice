import Player from "./../src/player";

describe('will make a Player object with a total score 0f 0', () => {  
  test('Player Object creation test', () => {
   const player1 = new Player()
   expect(player1.totalScore).toEqual(0)
  });
});