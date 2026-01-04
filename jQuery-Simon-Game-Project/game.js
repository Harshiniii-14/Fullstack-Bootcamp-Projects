var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];

var started = false;
var level = 0;

$(document).keypress(function() {

  if(!started) {

    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;

  }
});


$(".btn").click(function() {

  //In jQuery event handlers, use $(this) when you need the element that triggered the event.
  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);
  playSound(userChosenColour);
  animatePress(userChosenColour);

  checkAnswer(userClickedPattern.length-1);

});

// User clicks one button
// That color is pushed into userClickedPattern
// We check only the last index
// If wrong → game over
// If right but incomplete → wait for next click
// If right and complete → next level

function checkAnswer(currentLevel) {
  if(userClickedPattern[currentLevel] === gamePattern[currentLevel]) {
    console.log("success");
    if(userClickedPattern.length === gamePattern.length) {
      setTimeout(function() {
        nextSequence();
      }, 1000);
    }
  } else {
      console.log("wrong");
      var endAudio = new Audio("sounds/wrong.mp3");
      endAudio.play();

      $("body").addClass("game-over");
      setTimeout(function() {
        $("body").removeClass("game-over");
      }, 200);

      $("#level-title").text("Game Over, Press Any Key to Restart");
      startOver();
  }
}

function startOver() {
  level = 0;
  gamePattern = [];
  started = false;
}



function nextSequence() {

  userClickedPattern = [];

  level++;

  $("#level-title").text("Level "+level);

  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];

  gamePattern.push(randomChosenColour);
  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

  playSound(randomChosenColour);

}

function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function animatePress(currentColour) {
  $("#"+currentColour).addClass("pressed");

  setTimeout(function() {
    $("#"+currentColour).removeClass("pressed");
  }, 100);

}
