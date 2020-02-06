"use strict";

/********************************************************************

Epic dentistry
Jade Dufour

Welcome to Sysiphus' dentist cabinet!

Maybe it's a dental hygiene simulator, maybe it's some kind of
anti-bad breath propaganda, maybe it's Maybeline... you find out


*********************************************************************/

//We create a shortcut for the water faucet clip
let $water;
// The shortcut for the sfx coming out of the dialog box and the faucet
let boringSFX;
let faucetSFX;


$(document).ready(setup);

function setup() {
  boringSFX = new Audio('assets/sounds/elevatorMusic.wav');
  faucetSFX = new Audio('assets/sounds/faucetSFX.wav');
  $water = $('.faucet');

  // the cursor is set to be a toothbrush, so you can clean the teeth
  $('body').css({
    cursor: 'url(assets/images/toothbrush2.png), auto'
  });


  //the pokemon intro dialog box, which serves no purpose but to play music
  $('#introDialog').dialog({
    buttons: {
      "Like no one ever was": wizz,
      "To catch them is my real test": music,
      "To train them is my cause": disapear
    }
  });


  //the reminder dialog box
  $('#dialogAnger').dialog({
    position: ["left", "top"],
    buttons: {
      "Tell them to go push a boulder up a hill": mad,
      "Accept your tragic fate": close
    },
  });


  //the water SFX plays unless the player hovers the mouse over the gif
  faucetSFX.play();

  //when the toothbrush hovers the faucets, the water stops and the sound too
  $water.hover(function(event, ui) //on hover
    {
      $(this).attr('src', 'assets/images/source.png');
      //the water sfx stops
      faucetSFX.pause();
    },
    function() //on out
    { //We add the still image attribute so it looks like the water stops running
      $(this).attr('src', 'assets/images/waterFaucet.gif');
      //the water sfx resumes
      faucetSFX.play();
    })
  //------------------------------------------------------------------------------

  //the teeth go back to white when the mouse hovers them
  //and then back the yellow (it's an infinite spiral of disgusting teeth cleaning)
  //Each go yellow at a different speed
  $('.teeth').each(goYellow);
  //When the mouse enters a div, the color animation stops
  //so it looks like you're cleaning the teeth
  $('.teeth').mouseenter(function() {
    $(this).stop();
    $(this).animate({
      backgroundColor: 'white'
    }, 100);
  });
  //When the mouse leaves the tooth div , it goes back to being disgusting
  $('.teeth').on('mouseleave', goYellow);
}
//the function for the teeth to go yellow at random s
function goYellow() {
  $(this).animate({
    backgroundColor: '#F3E033'
  }, 1000 + Math.random() * 5500);
}

//------------------------------------------------------------------------------

// functions I used for the dialgue boxes
// each show off my supreme skills at coding

//this one is a rip off of MSN's 'Wizz'
function wizz() {
  $(this).parent().effect('shake');
}
//this one plays music
function music() {
  boringSFX.play();
}
//this one sends the dialogue to an other dimension
function disapear() {
  $(this).parent().effect('puff');
}
//this one makes the dialogue bounce and go red ( to represent anger) with a slight delay
function mad() {
  $(this).parent().effect('bounce');
  $(this).parent().effect("highlight", {
    color: 'red'
  }, 900);
}
//this one makes the dialogue disapear (fold)
function close() {
  $(this).parent().effect('fold');
}

//a popup message to tell the instructions
alert("\nDay 942 492\n\nWelcome, Sisyphus\nMake those teeth shine ");
