//  Box object constructor
function ColourBox(colour,sound,cssClass){
    this.colour = colour;
    this.sound = sound;
    this.cssClass = cssClass;

    this.handler = function(){       //execute when clicked
      this.cssClass.fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
      this.sound.play();
    }
}

// function handler(ojb){
//   obj.cssClass.fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
// }

//   Sounds
var blueSound = new Audio('sounds/blue.mp3');
var greenSound = new Audio('sounds/green.mp3');
var redSound = new Audio('sounds/red.mp3');
var yellowSound = new Audio('sounds/yellow.mp3');

//boxes
var blueBox = new ColourBox("blue", blueSound, $(".blue"));
var greenBox = new ColourBox("green", greenSound, $(".green"));
var redBox = new ColourBox("red", redSound, $(".red"));
var yellowBox = new ColourBox("yellow", yellowSound, $(".yellow"));

var buttons = [blueBox,greenBox,redBox,yellowBox];
var userClickedPattern=[];


$(".btn").click(function(event){
  console.log(this.id);
  for (var i=0; i<4 ; i++){
    if (this.id == buttons[i].colour){
      buttons[i].handler();   //execute click function of object clicked
    }
  }
})



var gamePattern = [];

buttonColours = ["blue", "green", "red", "yellow"];


function nextSquence(){
  var randomNumber = Math.floor(Math.random()*4);
  randomChosenColour = buttons[randomNumber].colour;
  //console.log(randomChosenColour);
  gamePattern.push(randomChosenColour);
  buttons[randomNumber].handler();
  console.log(gamePattern);
}
