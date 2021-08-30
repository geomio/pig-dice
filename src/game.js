import $ from 'jquery';
// import { highlightCurrentPlayer } from "./main";
export default function Game(player1Object, player2Object) {
  this.player1 = player1Object;
  this.player2 = player2Object;
  this.currentPlayer = 1;
  this.currentScore = 0;
}

Game.prototype.addRollToScore = function(roll) {
  if (roll === 1) {
      this.currentScore = 0;
      this.changeCurrentPlayerValue();
  }else (
      this.currentScore += roll
  )
}

Game.prototype.addCurrentScoreToPlayer = function() {
  if (this.currentPlayer === 1) {
      this.player1.totalScore += this.currentScore;
  }else if (this.currentPlayer === 2) {
      this.player2.totalScore += this.currentScore;
  }
  this.currentScore = 0;
}

Game.prototype.changeCurrentPlayerValue = function() {
  if (this.currentPlayer === 1) {
      this.currentPlayer = 2;
  }else if (this.currentPlayer ===2) {
      this.currentPlayer = 1;
  }
}

//victory or loss conditions/reset of game
Game.prototype.checkScore = function() {
  if (this.currentPlayer === 1) {
      return this.player1.totalScore >= 100 ? true : false;
  }else if (this.currentPlayer === 2) {
      return this.player2.totalScore >= 100 ? true : false;
  }
}

Game.prototype.rollDie = function() {
  const rollResult = Math.floor(Math.random() * 6) + 1;
  return rollResult;
}
