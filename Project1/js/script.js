"use strict";

/********************************************************************

Clean your room!
Jade Dufour

This is the story of every messy person...

*********************************************************************/
let $bedSheets;
let $pillow;
let $chair;

$(document).ready(setup);


function setup(){

  $bedSheets= $('.sheets');
  $pillow = $('.pillows');
  $chair = $('#officeChair');


//the bed sheets cannot be put proprely on the bed and cannot leave the room
//because of containment (why would they anyways)
  $bedSheets.draggable({
    containment: "parent",
    //weird grid but that's the point
    grid: [ 43, 26 ]
  });

//make the pillow draggable as well
  $pillow.draggable({
    grid: [ 143, 126 ]
  });

//The chair moves by itself
  $chair.addEventListener('mouseover',moveChair);

}



function moveChair(){
    $(this).animate({
       margin: 400 });
}
