var color =["color1","color2","color3","color4"];
var gamePattern=[];
var userClickPattern=[];

var started=false;
var level=0;

$(".START").click(function(){
   if(!started){
      // playSound("Audio/levelUp.wav");
      animate("START");
      started=true;
      // alert("start");
      setTimeout(nextSequence(),6000);
   }
});

$('.btn').click(function(){
   userChosenColor=$(this).attr("id");
   console.log(userChosenColor);
   userClickPattern.push(userChosenColor);
   var arr=userClickPattern;
   console.log(arr);
   playSound("Audio/buttonClick.wav");
   animate(userChosenColor);
   checkAnswer(userClickPattern.length-1);
})

function checkAnswer(currentLevel) {
       console.log("in checkanswer");
   if (gamePattern[currentLevel] === userClickPattern[currentLevel]) {
     if (userClickPattern.length === gamePattern.length){
       setTimeout(function () {
         nextSequence();
       }, 100);
     }
   } else {
     playSound("Audio/gameOver.wav");
     $("body").addClass("game-over");
     $("h2").text("Game Over, Press start to Restart");

     setTimeout(function () {
       $("body").removeClass("game-over");
     }, 200);

     startOver();
   }
}


function nextSequence(){
   playSound("Audio/levelUp.wav");
   userClickPattern=[];
   level++;
   $("h2").text("LEVEL "+level);

   var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = color[randomNumber];
  gamePattern.push(randomChosenColour);

  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
   console.log(gamePattern);
    
   // playSound("Audio/buttonClick.wav");

}

 function animate(blinkbtn){
     $( "." + blinkbtn ).addClass("buttonblink");
     setTimeout(function(){
      $( "." + blinkbtn ).removeClass("buttonblink");
     },100);
}

function playSound(song){
   var audio = new Audio(song);
   audio.play();
}
 
 function startOver(){
   level = 0;
   gamePattern = [];
   started = false;
 } 