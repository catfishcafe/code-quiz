function hideStartScreen(){document.getElementById('start-screen').style.display = 'none';}

document.getElementById('start-button').addEventListener('click', hideStartScreen);


//The basic question format could be a div in the html that displays instead of the start page when the button is pressed...

//As could the results screen

//And the high score screen

//The "high score" text in the header then needs to show the high score instead of the questions div or anything else

//Need to add the timer, that might be the best next step

//Or making the questions div, which will have a space for the question and separate buttons for the multiple choice, and a section at the bottom that will say either right or wrong depending on the chosen question

//...which means an if statement that says if the correct button is pressed, then section at the bottom says "right". not sure it even needs to be hidden it just needs to be empty at first. one way or the other.

//The questions and answers themselves need to be selected by an array, like "if(q1){div content = question 1 content}", and then both the question and the multiple choice buttons will be given the appropriate content.

//end screen has to have some buttons I guess

//need to be able to enter initials

//something something local storage something something

//make sure you can define web api and know how to traverse the dom

//write questions

//while we're on the subject make sure you follow the correct steps to merge because I'm getting tired of these merge conflicts. I'm the only person using this :/