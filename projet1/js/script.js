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


$tBrush.draggable({
  containment: "parent",
  axis: 'x',
  //weird grid but that's the point
  grid: [ 43, 26 ]
});

$('#introDialog').dialog({
    buttons:{
      "Yes I am!": yes,
      "No" : no
    }
  });



}


function yes(){

}

function no(){}
