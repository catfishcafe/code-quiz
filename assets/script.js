function hideStartDiv() {
    document.getElementById('start-game-prompt').style.display = 'none';
}

function showQDiv() {
    document.getElementById('game-questions').style.display = 'block';
}

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

// const q1 = {
//     gameQ:  'If a property of an object is a function, that property is called a:',
//     thisQAnswers: ['method', 'variable', 'argument', 'index']
// };

// const q2 = {
//     gameQ: 'The symbol for an ID selector is:',
//     thisQAnswers: ['#', '.', '$', '%']
// };

const q1 = {
    gameQ: 'Which of these is the worst Fire Emblem spinoff?',
    thisQAnswers: ['Heroes', 'Warriors', 'TMS', 'Super Smash Bros']
};

const q2 = {
    gameQ: 'Which of these is my favorite video game?',
    thisQAnswers: ['LoZ: Breath of the Wild', 'Fire Emblem: The Blazing Blade', 'Pokemon Ultra Moon', 'Universal Paperclips']
};

const q3 = {
    gameQ: "Why can't I think of another good question?",
    thisQAnswers: ["Let's just move on", 'idk', 'idk', 'idk']
};

const q4 = {
    gameQ: "Which of these is not a Daft Punk song?",
    thisQAnswers: ["I Am Not A Robot", "Digital Love", 'Robot Rock', 'Human After All']
};

//an array of all the question variables
let allQA = [q1, q2, q3, q4];

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

//Now displayedQ has value of whichever q variable was shuffled to the front of the allQA array
let x = 0;
displayedQ = allQA[x];

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

const nextButton = document.getElementById('next-question');
const answerButtons = document.getElementsByClassName('answer-button');
const ansCheckSpace = document.getElementById('right-wrong');

let correctAnswer = displayedQ.thisQAnswers[0];
let selectedAns = '';
let sayCorrect = function(){ansCheckSpace.textContent = '✨✔️✨'};
let sayIncorrect = function(){ansCheckSpace.textContent = '❌'};
let clearRightWrong = function(){ansCheckSpace.textContent = ''};
let buttonA = document.getElementById('button-A');
let buttonB = document.getElementById('button-B');
let buttonC = document.getElementById('button-C');
let buttonD = document.getElementById('button-D');

let allButtons = document.getElementsByClassName('answer-button');
//❌So with this I'd like to make it so that whenever any button is pressed, the button with the correct answer turns green; somehow I need to say "if any button's text content is equal to the correct answer, THAT BUTTON turns green"


//I think is is only running once and that's why on subsequent screens the buttons don't know if they're correct or not

//Things I need the next button to do:
//-Increase the value of x by 1 up to end of array
//-display the updated dispayedQ
//-turn all buttons back to purple
//-empty the text from the bottom div
//-hide itself (it will reappear when next question button is clicked)
//-change to say 'end' on the last question
//-hide the questions div on the last question
//-unhide the endgame screen on the last question

nextButton.addEventListener(
    'click', function() {
        clearRightWrong();
        let hideNextButton = function(){
            nextButton.style.display = 'none'
        };
        hideNextButton();
        if (x < allQA.length -1){
            x = x+1;
            displayedQ = allQA[x];
            gameQText.textContent = displayedQ.gameQ;
            shuffle(ansSlotsArray);
            for (i = 0; i < ansSlotsArray.length; i++){
                ansSlotsArray[i].textContent = displayedQ.thisQAnswers[i]
            };
            for (i = 0; i < answerButtons.length; i++){
                answerButtons[i].style.background = 'rgb(195, 0, 255)'
            };
        } else {
            document.getElementById('game-questions').style.display = 'none';
            document.getElementById('end-game-display').style.display = 'block'
        };
        if(displayedQ == allQA[allQA.length-1]){
            nextButton.textContent = 'End'
        }
    }
);

function showNextButton(){nextButton.style.display = 'inline'};

function onButtonClick(answerId, button) {
    showNextButton();
    correctAnswer = displayedQ.thisQAnswers[0];
    selectedAns = document.getElementById(answerId).textContent;
    console.log(selectedAns);
    console.log(correctAnswer);
    if(selectedAns === correctAnswer){
        console.log('correct');
        sayCorrect(); 
        button.style.background='rgb(0, 255, 76)'
    } else {
        sayIncorrect();
        console.log('incorrect');
        button.style.background='rgb(255, 0, 85)'
    }
}

buttonA.addEventListener('click', function() { onButtonClick('ansA', buttonA); });
buttonB.addEventListener('click', function() { onButtonClick('ansB', buttonB); });
buttonC.addEventListener('click', function() { onButtonClick('ansC', buttonC); });
buttonD.addEventListener('click', function() { onButtonClick('ansD', buttonD); });

//❌BELLOW ARE TEST BUTTONS, MAKE SURE TO DELETE ALL THIS, AND DELETE THE HTML AND CSS❌
function hideStartTest(){document.getElementById('start-game-prompt').style.display = 'none';}
document.getElementById('hideStart').addEventListener('click', hideStartTest);

function hideQTest(){document.getElementById('game-questions').style.display = 'none';}
document.getElementById('hideQ').addEventListener('click', hideQTest);

function showStartTest(){document.getElementById('start-game-prompt').style.display = 'block';}
document.getElementById('showStart').addEventListener('click', showStartTest);

function showQTest(){document.getElementById('game-questions').style.display = 'block';}
document.getElementById('showQ').addEventListener('click', showQTest);


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