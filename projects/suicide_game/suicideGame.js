// //function creates Athlete object
// function Athlete(name, lane) {
//   this.name = name
//   this.stamina = Math.floor((Math.random()*100)+1);
//   this.posY = 0
//   this.posX = lane
// };

// //function makes athlete object run a direction and distance
// function run(athlete, direction, distance) {
//   var progressUpdater = document.getElementById("progress");
//   if (direction === "forward") {
//     athlete.posY += distance;
//     athlete.stamina -= (distance/15);
//     progressUpdater.innerHTML = athlete.name + " runs forward " + distance + " feet!"
//   }
//   else if (direction === "back") {
//     athlete.posY -= distance;
//     athlete.stamina -= (distance/15);
//     progressUpdater.innerHTML = athlete.name + " runs backward " + distance + " feet!"
//   }
//   else {
//     return "invalid direction"
//   };
// };

// //water object
// var water = {
//   volume: 100
// };

// //function makes athlete drink water.  restores some stamina and depletes from water object
// var drink = function(athlete) {
//   athlete.stamina += 20
//   water -= 20
// };

// // function makes athlete object run until it either reaches goalDistance or dies from lack of stamina
// var play = function(goalDistance, suicideIncrement, athlete) {
//   lap = 1
//   while (true){
//     if (athlete.stamina <= 0) {
//     alert(athlete.name + " has run out of stamina and died from exhaustion!");
//     break;
//   }
//   else if (athlete.posY < goalDistance) {
//     run(athlete, "forward", (suicideIncrement*lap));
//     if (athlete.posY >= goalDistance) {
//       alert(athlete.name + " has reached the finish!");
//       drink(athlete)
//       break;
//     }
//     else {
//       run(athlete, "back", (suicideIncrement*lap));
//     };
//   };
//   lap++
// };
// };

// //this is called when "Do you want to play?" button is clicked
// function playGame() {
//   var wantsToPlay = confirm("The game is called Suicide.  Are you sure that you are ready?")
//   var startgame = document.getElementById("startgame");
//   var stamina = document.getElementById("stamina");
//   var progress = document.getElementById("progress");
//   if (wantsToPlay) {
//     var playerName = prompt("All right, let's go!  What is your name?");
//     var player1 = new Athlete(playerName, 1);
//     startgame.innerHTML = "Welcome, " + playerName + "!";
//     stamina.innerHTML = "Your stamina is: " + player1.stamina;
//     progress.innerHTML = "You're at the starting point";
//     // play(100,10,player1);
//   }
//   else {
//     startgame.innerHTML = "You're a chicken!"
//   };

// };

var main = function () {
  "use strict";

  //adds athlete to lane
  var addAthleteFromInputBox = function() {
    var $new_athlete;

    if($(".name-input input").val() !== "") {
      //assigns what you type into box to new_athlete variable
      $new_athlete = $("<p>").text($(".name-input input").val());
      //hides new_athlete from screen so that it can fadeIn
      $new_athlete.hide();
      //adds a new lane for the athlete you enter
      $(".racetrack").append($new_athlete);
      $new_athlete.fadeIn();
      //empties out the input box
      $(".name-input input").val("");
    }
  }

  //adds athlete to lane upon clicking button
  $(".name-input button").on("click", function (event) {
      addAthleteFromInputBox();
  });

  //adds athlete to lane after hitting enter
  $(".name-input input").on("keypress", function(event) {
    if(event.keyCode === 13) {
      addAthleteFromInputBox();
    }
  });


}

$(document).ready(main);










