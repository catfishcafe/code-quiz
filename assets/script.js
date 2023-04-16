function hideStartDiv(){document.getElementById('start-game-prompt').style.display = 'none';}
function showQDiv(){document.getElementById('game-questions').style.display = 'block';}

document.getElementById('start-button').addEventListener('click', hideStartDiv);
document.getElementById('start-button').addEventListener('click', showQDiv);

//❌Do I want to combine those two functions into one so that I only need one line to call it? I think yes but I don't wnat to rock the boat rn :/ also maybe not bcs I also need to add a function for that button to populate the answer slot

//This gets the h2 element where each question will display
const gameQText = document.getElementById('game-question');

//empty variable that will be passed the information to display questions randomly
let displayedQ = {
    gameQ: '',
    thisQAnswers: [],
}

//Below: variables containing all the questions and arrays of their corresponding answer options as properties. The correct answer is always the first in the array. (The answers will later be assigned random slots, but these arrays will remain constant.)

const q1 = {
    gameQ:  'If a property of an object is a function, that property is called a:',
    thisQAnswers: ['method', 'variable', 'argument', 'index']
};

const q2 = {
    gameQ: 'The symbol for an ID selector is:',
    thisQAnswers: ['#', '.', '$', '%']
};

const q3 = {
    gameQ: 'Which of these is my favorite video game?',
    thisQAnswers: ['LoZ: Breath of the Wild', 'Fire Emblem: The Blazing Blade', 'Pokemon Ultra Moon', 'Universal Paperclips']
};

const q4 = {
    gameQ: 'Which of these is not a chapter the Fellowship of the Ring?',
    thisQAnswers: ['Second Breakfast', 'Strider', 'Lothlórien', 'Many Meetings']
};

const q5 = {
    gameQ: "Which of these is the worst Fire Emblem spinoff?",
    thisQAnswers: ['Heroes', 'Warriors', 'TMS', 'Super Smash Brothers']
};

//an array of all the question variables
let allQA = [q1, q2, q3, q4, q5];

//shuffle function found at https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
    while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
    return array;
  }
  
//allQA array is shuffled
shuffle(allQA);

//❌Now displayedQ has value of whichever q variable was shuffled to the front of the allQA array
displayedQ = allQA[0];

//gets the actual words of the question from displayedQ and displays them in the H2 text space 
gameQText.textContent = displayedQ.gameQ;

//all of the spans where the answers will go are grabbed and put in an array, and then that array is shuffled
//❌I think I should put this all in one function but I don't know how :(
let answerSlots = document.getElementsByClassName('answer-slot');
ansSlotsArray = [answerSlots[0], answerSlots[1], answerSlots[2], answerSlots[3]]; 
shuffle(ansSlotsArray);

//loops through the shuffled array above and puts each answer option in one of the empty areas
for (i = 0; i < ansSlotsArray.length; i++){
    ansSlotsArray[i].textContent = displayedQ.thisQAnswers[i]
};

const ansButtons = document.getElementById('answer-button');

//❌if this returns true, then the correct answer is displayed in the first slot

const correctAnswer = displayedQ.thisQAnswers[0];


    let selectedAns = '';
    document.querySelector('#button-A').addEventListener('click', function() {
        selectedAns = document.querySelector('#ansA').textContent;
        if(selectedAns === correctAnswer){console.log('✔️')} else {console.log('❌')};
    });
    document.querySelector('#button-B').addEventListener('click', function() {
        selectedAns = document.querySelector('#ansB').textContent;
    });
    document.querySelector('#button-C').addEventListener('click', function() {
        selectedAns = document.querySelector('#ansC').textContent;
    });
    document.querySelector('#button-D').addEventListener('click', function() {
        selectedAns = document.querySelector('#ansD').textContent;
    });
    console.log(selectedAns);





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