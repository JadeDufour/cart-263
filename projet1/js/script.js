"use strict";

/********************************************************************

Epic dentistry
Author Name

This is a template. Fill in the title, author, and this description
to match your project! Write JavaScript to do amazing things below!

*********************************************************************/


let $water;
let $tBrush;

// let animationTime = Math.random()*(10000);

$(document).ready(setup);

function setup(){

$water= $('.faucet');
$tBrush= $('.toothbrush');



$('body').css({
   cursor: 'url(assets/images/toothbrush2.png), auto'
 });




//the into dialog box
$('#introDialog').dialog({
    buttons:{
      "Yes I am!": yes,
      "No" : no
    }
  });

//when the toothbrush hovers the faucets, the water stops and the sound too
// $('.faucet').hover(function(){
//   $(this).attr('src','assets/images/source.png'), function(){
//     $(this).removeAttribute('src','assets/images/source.png')
//   }
// });

$water.hover(function(event,ui) //on hover
{
   $(this).attr('src','assets/images/source.png');
},
function()  //on out
{
  $(this).attr('src','assets/images/waterFaucet.gif');
})


$('#teeth1 , #teeth3  , #teeth4').animate({
  backgroundColor: '#F3E033'
}, 10000);

$('#teeth2 , #teeth6  , #teeth7').animate({
  backgroundColor: '#F3E033'
}, 18000);

$(' #teeth8 , #teeth5').animate({
  backgroundColor: '#F3E033'
}, 30000);

}



function yes(){}

function no(){}
