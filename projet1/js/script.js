
"use strict";

/********************************************************************

Epic dentistry
Jade Dufour

Welcome to Sysiphus' dentist cabinet!



*********************************************************************/

//We create a shortcut for the water faucet clip and
let $water;
let boringSFX;


$(document).ready(setup);

function setup() {
  boringSFX = new Audio('assets/sounds/elevatorMusic.wav');

  $water = $('.faucet');

  // the cursor is set to be a toothbrush
  $('body').css({
    cursor: 'url(assets/images/toothbrush2.png), auto'
  });




  //the into dialog box, which serves no purpose
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
    {
      $(this).attr('src', 'assets/images/waterFaucet.gif');
    })


  //------------------------------------------------------------------------------

  //the teeth go back to white when the mouse hovers them
  //and then back the yellow (it's an infinite spiral of disgusting teeth cleaning)


  $('.teeth').each(goYellow);


  $('.teeth').mouseenter(function() {
    $(this).stop();
    $(this).animate({
      backgroundColor: 'white'
    }, 100);
  });

  $('.teeth').on('mouseleave', goYellow);

}

function goYellow() {
  $(this).animate({
    backgroundColor: '#F3E033'
  }, 1000 + Math.random() * 5500);


  //------------------------------------------------------------------------------

}


function one() {
  $(this).parent().effect('shake');
}

function two() {
  boringSFX.play();

}

function tree() {
  $(this).parent().effect('puff');
}
