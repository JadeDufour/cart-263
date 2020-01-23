"use strict";

/********************************************************************

Title of Project
Author Name

This is a template. Fill in the title, author, and this description
to match your project! Write JavaScript to do amazing things below!

*********************************************************************/

// When the document is loaded we call the setup function
$(document).ready(setup);

let $spans;
let probability = 0.1;

function setup(){

  // Save the selection of all spans (since we do stuff to them multiple times)
  $spans = $('span');

  $spans.on('click', spanClicked);

  console.log('setup()');


  setInterval(update,500);

}

function spanClicked(){
  $(this).removeClass('revealed');
  $(this).addClass('redacted');
}

function update(){
  console.log('update!');
  $spans.each(updateSpan);
}


// With random chance it unblanks the current span by removing the
// redacted class and adding the revealed class. Because this function is called
// by each(), "this" refers to the current element that each has selected.

function updateSpan(){
  console.log('updating span!');
  let r = Math.random();

  if (r < probability){
    $(this).removeClass('redacted');
    $(this).addClass('revealed');
  }
}
