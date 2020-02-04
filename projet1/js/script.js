"use strict";

/********************************************************************

Title of Project
Author Name

This is a template. Fill in the title, author, and this description
to match your project! Write JavaScript to do amazing things below!

*********************************************************************/


let $water;
let $tBrush;

$(document).ready(setup);

function setup(){

$water= $('.faucet');
$tBrush= $('.toothbrush');

//ill do something else while im trying to figure out the cursor thing

// // $('selector').css('cursor', 'url("/assets/images/toothbrush1.png"), auto');
// $('selector').css({'cursor': url('assets/images/toothbrush.png'), default});
//
// // $('selector').css({
// //     cursor: 'url(assets/images/toothbrush1.png), default'});
//
//  // $('body').css('cursor', 'url(assets/images/toothbrush1.png),auto');
// // $(".body").css('cursor','url(assets/images/toothbrush1.png),auto');
//we can drag the toothbrush from left to right
// $tBrush.draggable({
//   containment: "parent",
//   axis: 'x',
//   grid: [ 43, 26 ]
// });

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


}


function yes(){}

function no(){}
