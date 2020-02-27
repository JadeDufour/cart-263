"use strict";

/********************************************************************

Title of Project
Jade Dufour

This is a template. Fill in the title, author, and this description
to match your project! Write JavaScript to do amazing things below!

**Every 'friendly' thumbnails come from verified (certified) youtube channels (Nick Jr, Peppa Pig Official, Little Angel, Masha ans The Bear, Toddler Fun Learning, DC SuperHero Girls)**

*********************************************************************/

let $leftChoice;
let $rightChoice;
//each wrong guess scares more kids
let score = 0;

//An array of creepy clickbait thumbnails found online
let clickbait = [
  "no1.jpg",
  "no2.jpg",
  "no3.jpg",
  "no4.jpg",
  "no5.jpg",
  "no6.jpg",
  "no7.jpg",
  "no8.jpg",
  "no9.jpg",
  "no10.jpg",
  "no11.jpg"

]

//an array of actual thumbnails that kidsfriendly
let friendly = [
  "../assets/images/yes.jpg",
  "../assets/images/yes2.jpg",
  "../assets/images/yes3.jpg",
  "../assets/images/yes4.jpg",
  "../assets/images/yes5.jpg",
  "../assets/images/yes6.jpg",
  "../assets/images/yes8.jpg",
  "../assets/images/yes9.jpg",
  "../assets/images/yes10.jpg",
  "../assets/images/yes11.jpg",
]


$(document).ready(setup);



function setup(){
  $leftChoice = $('.left');
  $rightChoice = $('.right');
  //for a new round to begin
  newRound();
}


function newRound(){
  //we have to create a 1/2 chance to get a good or a bad thumbnail for each div
  let r = Math.random();

  if (r > 0.5){
    $leftChoice.attr('src','assets/images/' + clickbait[Math.floor(Math.random() * clickbait.length)]);
    $rightChoice.attr('src','assets/images/' + friendly[Math.floor(Math.random() * friendly.length)]);
  }

  else {
    $leftChoice.attr('src','assets/images/' + friendly[Math.floor(Math.random() * friendly.length)]);
    $rightChoice.attr('src','assets/images/' + clickbait[Math.floor(Math.random() * clickbait.length)]);
  }

  //checkAnswer();
}

function checkAnswer(){

  // linking the variables
  if (animalGuess === $correctButton.text()) {
    // updating the score()
    scoreCount(score +1);
    // removes the buttons
    $('.guess').remove();
    // time delay
    setTimeout(newRound, 1000);

  } else {
    // shake event
    $('.guess').effect('shake');

    // says answer backwards
    sayBackwards($correctButton.text());
  }
}
