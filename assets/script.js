function hideStartDiv(){document.getElementById('start-game-prompt').style.display = 'none';}
function showQDiv(){document.getElementById('game-questions').style.display = 'block';}

document.getElementById('start-button').addEventListener('click', hideStartDiv);
document.getElementById('start-button').addEventListener('click', showQDiv);
document.getElementById('start-button').addEventListener('click', populateAnswers);

//❌Do I want to combine those two functions into one so that I only need one line to call it? I think yes but I don't wnat to rock the boat rn :/

const gameQBlank = document.getElementById('game-question');
let A = document.getElementById('ansA').textContent;
let B = document.getElementById('ansB').textContent;
let C = document.getElementById('ansC').textContent;
let D = document.getElementById('ansD').textContent;
let answerSlots = [A, B, C, D, 'E'];

let displayedQ = {
    gameQ: '',
    thisQAnswers: [],
}

q1 = {
    gameQ:  'If a property of an object is a function, that property is called a:',
    thisQAnswers: ['method', 'variable', 'argument', 'index']
};

q2 = {
    gameQ: 'Which of these is not an animal?',
    thisQAnswers: ['cat', 'fish', 'bird', 'cinderblock']
};

q3 = {
    gameQ: 'Which these is not a color?',
    thisQAnswers: ['mauve', 'puce', 'fucsia', 'oxygen']
};

q4 = {
    gameQ: 'Which of these is not a fish?',
    thisQAnswers: ['shark', 'tuna', 'salmon', 'dolphin']
};

q5 = {
    gameQ: "Why can't I think of another example question?",
    thisQAnswers: ['idk', 'beats me', 'try harder', 'lol']
};

let allQA = [q1, q2, q3, q4, q5];

let randomIndex = Math.floor(Math.random()*allQA.length);

displayedQ = allQA[randomIndex];

console.log ('current question: ' + displayedQ.gameQ);
console.log ('current answers: ' + displayedQ.thisQAnswers);

// gameQBlank.textContent = displayedQuestion.gameQ;




function populateAnswers(){
    if(A = ''){A = Q1answers[ranodmIndex]} else if(B = ''){B = Q1answers[ranodmIndex]} else if(C = ''){C = Q1answers[ranodmIndex]} else {D = Q1answers[ranodmIndex];
    };
};

const answerButtonsDiv = document.getElementById('answer-buttons');


//❌BELLOW ARE TEST BUTTONS, MAKE SURE TO DELETE ALL THIS, AND DELETE THE HTML AND CSS❌
function hideStartTest(){document.getElementById('start-game-prompt').style.display = 'none';}
document.getElementById('hideStart').addEventListener('click', hideStartTest);

function hideQTest(){document.getElementById('game-questions').style.display = 'none';}
document.getElementById('hideQ').addEventListener('click', hideQTest);

function showStartTest(){document.getElementById('start-game-prompt').style.display = 'block';}
document.getElementById('showStart').addEventListener('click', showStartTest);

function showQTest(){document.getElementById('game-questions').style.display = 'block';}
document.getElementById('showQ').addEventListener('click', showQTest);

//❌The basic question format could be a div in the html that displays instead of the start page when the button is pressed...

//❌As could the results screen

//❌And the high score screen

//❌The "high score" text in the header then needs to show the high score instead of the questions div or anything else

//❌Need to add the timer, that might be the best next step

//❌Or making the questions div, which will have a space for the question and separate buttons for the multiple choice, and a section at the bottom that will say either right or wrong depending on the chosen question

//❌...which means an if statement that says if the correct button is pressed, then section at the bottom says "right". not sure it even needs to be hidden it just needs to be empty at first. one way or the other.

//❌The questions and answers themselves need to be selected by an array, like "if(q1){div content = question 1 content}", and then both the question and the multiple choice buttons will be given the appropriate content.

//❌end screen has to have some buttons I guess

//❌need to be able to enter initials

//❌something something local storage something something

//❌make sure you can define web api and know how to traverse the dom

//❌write questions

//❌while we're on the subject make sure you follow the correct steps to merge because I'm getting tired of these merge conflicts. I'm the only person using this :/