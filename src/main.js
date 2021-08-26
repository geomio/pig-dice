import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Game from './game';
import Player from "./player";

// when you don't do a default export you have to use {} to list all imports like:
// import {Player, Game} from "./game";

// if you use a default export you don't use the {}, like this:
// import Game from './game';


export function highlightCurrentPlayer(currentPlayer) {
  if (currentPlayer === 1) {
      $("#player").addClass("player-selected");
      $("#pcPlayer").removeClass("player-selected"); 
  }else if (currentPlayer === 2) {
      $("#pcPlayer").addClass("player-selected");
      $("#player").removeClass("player-selected"); 
  } 
  $("#hold").hide();
}

// user interface below
$(document).ready(function () {
    
  $("button#resetThis").click(function(event) {
    event.preventDefault();
    let newPlayer = new Player("player1") // ERRORS
    let computerPlayer = new Player("Computer")
    let currentGame = new Game(newPlayer, computerPlayer)
    $(".well").show();
    $("#roll").show();
    $("#currentScoreArea").show();
    highlightCurrentPlayer(currentGame.currentPlayer);
    $(".startButtonText").html("<p> Start </p>");
    $(".startButtonText").text("Restart");
    $("#resetThis").hide();

    $("button#roll").click(function() {
        let diceRollMath = currentGame.rollDie();
        $("#hold").show();
        currentGame.addRollToScore(diceRollMath);
        $("#displayRoll").html("<p> 0 </p>")
        $("#displayRoll").text(diceRollMath)
        $("#currentScoreDisplay").html("0")
        $("#currentScoreDisplay").text(currentGame.currentScore)
    });

    $("button#hold").click(function(){
        $("#hold").hide();
        currentGame.endTurn();
        $("#playTotalScore").text(currentGame.player1.totalScore);
        $("#pcPlayTotalScore").text(currentGame.player2.totalScore);
        highlightCurrentPlayer(currentGame.currentPlayer);
    });

    $("button#trueGameReset").click(function(){
        location.reload();
    });
  });
});
