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
      $(".player1").append($new_athlete);
      $new_athlete.fadeIn();
      //empties out the input box
      $(".name-input input").val("");
      $(".name-input").hide();
      $(".character-choices").fadeIn("fast");
    }
  }

// hides selection of characters (revealed after name is input)
$(".character-choices").hide()

//hides div until you've chosen name and character -- remember to fade this in
  $(".player1").hide()

//stores players name after clicking on "+" button
  $(".name-input button").on("click", function (event) {
      addAthleteFromInputBox();
  });

//stores players name after hitting enter on keyboard
  $(".name-input input").on("keypress", function(event) {
    if(event.keyCode === 13) {
      addAthleteFromInputBox();
    }
  });

//enlarges character icon upon mouseover
$(".character-choices div img").on('mouseover', function(event){
  event.preventDefault()
  $(this).css({"width": "5em"});
});

//returns character icon back to normal size after mouseleave

$(".character-choices div img").on("mouseleave", function(event){
  event.preventDefault();
  $(this).css({"width":"3em"});
});

$(".character-choices div img").on("click", function(event){
  event.preventDefault();
  $(".character-choices").hide();
  $(".player1").prepend($(this));
  $(".player1").fadeIn("fast");
})















//NOTE: these movements can be refactored into a Case WHen statement(look at codeAcademy jQuery)
//move down
  $(document).keydown(function(event){
    if(event.keyCode === 40){
      $(".player1").animate({top:"+=10px"}, "fast");
    }
  });

//move up
  $(document).keydown(function(event){
    if(event.keyCode === 38) {
      $(".player1").animate({top:"-=10px"}, "fast");
    };
  })

//move right

  $(document).keydown(function(event){
    if(event.keyCode === 39) {
      $(".player1").animate({left:"+=10px"}, "fast");
    };
  })

//move left
  $(document).keydown(function(event){
    if(event.keyCode === 37) {
      $(".player1").animate({left: "-=10px"}, "fast");
    };
  })



}

$(document).ready(main);










