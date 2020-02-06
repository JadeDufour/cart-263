"use strict";

/********************************************************************

Epic dentistry
Jade Dufour

Welcome to Sysiphus' dentist cabinet!

Maybe it's a dental hygiene simulator, maybe it's some kind of
anti-bad breath propaganda, maybe it's Maybeline... you find out


*********************************************************************/

//We create a shortcut for the water faucet clip and
let $water;
// The shortcut for the sfx coming out of the dialog box
let boringSFX;


$(document).ready(setup);

function setup() {
  boringSFX = new Audio('assets/sounds/elevatorMusic.wav');
  $water = $('.faucet');

  // the cursor is set to be a toothbrush, so you can clean the teeth
  $('body').css({
    cursor: 'url(assets/images/toothbrush2.png), auto'
  });


  //the pokemon intro dialog box, which serves no purpose
  $('#introDialog').dialog({
    buttons: {
      "Like no one ever was": one,
      "To catch them is my real test": two,
      "To train them is my cause": tree
    }
  });

  //when the toothbrush hovers the faucets, the water stops and the sound too
  $water.hover(function(event, ui) //on hover
    {
      $(this).attr('src', 'assets/images/source.png');
    },
    function() //on out
    { //We add the still image attribute so it looks like the water stops running
      $(this).attr('src', 'assets/images/waterFaucet.gif');
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
//the function for the teeth to go yellow
function goYellow() {
  $(this).animate({
    backgroundColor: '#F3E033'
  }, 1000 + Math.random() * 5500);
}

//------------------------------------------------------------------------------

// 3 functions I used for the dialgue box
// each show off my supreme skills at coding

//this one is a rip off of MSN's 'Wizz'
function one() {
  $(this).parent().effect('shake');
}
//this one plays music
function two() {
  boringSFX.play();
}
//this one make the dialogue disapear to an other dimension
function tree() {
  $(this).parent().effect('puff');
}
