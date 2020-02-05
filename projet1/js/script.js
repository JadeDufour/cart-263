"use strict";

/********************************************************************

Epic dentistry
Author Name

This is a template. Fill in the title, author, and this description
to match your project! Write JavaScript to do amazing things below!

*********************************************************************/

//We create a shortcut for the water faucet clip and
let $water;
let boringSFX;

// let animationTime = Math.random()*(10000);

$(document).ready(setup);

function setup(){
boringSFX = new Audio('assets/sounds/elevatorMusic.wav');
$water= $('.faucet');

// the cursor is set to be a toothbrush
$('body').css({
   cursor: 'url(assets/images/toothbrush2.png), auto'
 });


//the into dialog box, which serves no purpose
$('#introDialog').dialog({
    buttons:{
      "Like no one ever was": one,
      "To catch them is my real test" : two,
      "To train them is my cause" : tree
    }
  });




//when the toothbrush hovers the faucets, the water stops and the sound too
$water.hover(function(event,ui) //on hover
{
   $(this).attr('src','assets/images/source.png');
},
function()                      //on out
{
  $(this).attr('src','assets/images/waterFaucet.gif');
})






//------------------------------------------------------------------------------
//**Not final
//The teeth turn yellow with different delays with .animate
//
$('#teeth1 , #teeth3  , #teeth4').animate({
  backgroundColor: '#F3E033'
}, 10000);

$('#teeth2 , #teeth6  , #teeth7').animate({
  backgroundColor: '#F3E033'
}, 18000);

$(' #teeth8 , #teeth5').animate({
  backgroundColor: '#F3E033'
}, 30000);


//the point would be to make them go back to white when the mouse hovers them


$('#teeth1, #teeth2, #teeth3 , #teeth4 ,#teeth5, #teeth6, #teeth7,#teeth8').mouseenter(function () {

  $('#teeth1, #teeth2, #teeth3 , #teeth4 ,#teeth5, #teeth6, #teeth7,#teeth8').animate({
    backgroundColor: 'white'
  }, 2000);




//some code i found online
      // var roll = null;
      // var that = $(this);
      //
      //
      //   if (that==="#trigger1"){roll = "$('#roll1r')";}
      //   else if(that==="#trigger2"){roll ="$('#roll2r')";}
      //   else if(that==="#trigger3"){roll = "$('#roll3r')";}
      //   console.log(roll);
      //   roll.fadeOut({
      //       duration:300,
      //      // fail: that.hide()
      //   });
    });
//------------------------------------------------------------------------------

}



function one(){
  $(this).parent().effect('shake');
}

function two(){
  boringSFX.play();

}

function tree(){
  $(this).parent().effect('puff');
}
