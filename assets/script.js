const hideStartDiv = function() {
    document.getElementById('start-game-prompt').style.display = 'none';
}

const showQDiv = function() {
    document.getElementById('game-questions').style.display = 'block';
}



//TIMER

let secondsLeft = 60;

let setTime = function() {
    const timerInterval = setInterval(function() {
    secondsLeft--;
    if(secondsLeft === 59){
        minute.textContent = 0;
    }
    second.textContent = secondsLeft;
    if (document.getElementById('end-game-display').style.display === 'block'){
        return;
        } else if(second.value === 0){
        return displayEndScreen()
        }
    if(secondsLeft < 10){
        second.textContent = '0' + secondsLeft
    }
    if(secondsLeft === 0) {
        displayEndScreen();
        clearInterval(timerInterval);
    }
  }, 1000);
}

//END TIMER

document.getElementById('start-button').addEventListener('click', hideStartDiv);
document.getElementById('start-button').addEventListener('click', showQDiv);
document.getElementById('start-button').addEventListener('click', setTime);

const gameQText = document.getElementById('game-question');

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

let allQA = [q1, q2, q3, q4];

//shuffle function found at https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
function shuffle(array) {
    let currentIndex = array.length, randomIndex;
    while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
    return array;
  }

shuffle(allQA);

let x = 0;
displayedQ = allQA[x];

gameQText.textContent = displayedQ.gameQ;

const answerSlots = document.getElementsByClassName('answer-slot');
ansSlotsArray = [answerSlots[0], answerSlots[1], answerSlots[2], answerSlots[3]]; 

shuffle(ansSlotsArray);
//important: the array of answers is NOT being shuffled, because the first answer in the array is always the correct one; instead, each answer is being assigned a random slot (A-D).

for (i = 0; i < ansSlotsArray.length; i++){
    ansSlotsArray[i].textContent = displayedQ.thisQAnswers[i]
};

const nextButton = document.getElementById('next-question');
const answerButtons = document.getElementsByClassName('answer-button');
const ansCheckSpace = document.getElementById('right-wrong');

let selectedAns = '';
const buttonA = document.getElementById('button-A');
const buttonB = document.getElementById('button-B');
const buttonC = document.getElementById('button-C');
const buttonD = document.getElementById('button-D');

const hideNextButton = function(){nextButton.style.display = 'none'};

let numCorrectAnswers = 0;
let numIncorrectAnswers = 0;

const displayScore = function(){
    document.getElementById('score').textContent = numCorrectAnswers;
}

const displayEndScreen = function(){
    document.getElementById('game-questions').style.display = 'none';
    document.getElementById('end-game-display').style.display = 'block'
    displayScore();
}

const displayQuestion = function(){
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
}

const displayNextScreen = function(){
    if (x < allQA.length -1){
        displayQuestion();
    } else {
        displayEndScreen();
    };
}

const displayEndButton = function(){
        if(displayedQ == allQA[allQA.length-1]){
        nextButton.textContent = 'End'
    }
}

const showNextButton = function(){nextButton.style.display = 'inline'};
const sayCorrect = function(){ansCheckSpace.textContent = '✨✔️✨'};
const sayIncorrect = function(){ansCheckSpace.textContent = '❌'};
const clearResult = function(){ansCheckSpace.textContent = ''};
let ansA = document.getElementById('ansA');
let ansB = document.getElementById('ansB');
let ansC = document.getElementById('ansC');
let ansD = document.getElementById('ansD');
let correctAnswer;

const onAnswerButtonClick = function (answerId, inputButton) {
    showNextButton();
    correctAnswer = displayedQ.thisQAnswers[0];
    selectedAns = document.getElementById(answerId).textContent;
    console.log('selected answer: ', selectedAns);
    console.log('correct answer: ', correctAnswer);
    if(selectedAns === correctAnswer){
        console.log('correct');
        sayCorrect(); 
        inputButton.style.background='rgb(0, 255, 76)'
        numCorrectAnswers++;
        console.log(numCorrectAnswers);
    } else {
        sayIncorrect();
        secondsLeft-=10;
        console.log('incorrect');
        numIncorrectAnswers++;
        console.log(numIncorrectAnswers);
        inputButton.style.background='rgb(255, 0, 85)';
        if (ansA.textContent === correctAnswer){
            buttonA.style.background='rgb(0, 255, 76)'
        } else if (ansB.textContent === correctAnswer){
            buttonB.style.background='rgb(0, 255, 76)'
        } else if (ansC.textContent === correctAnswer){
            buttonC.style.background='rgb(0, 255, 76)'
        } else if (ansD.textContent === correctAnswer){
            buttonD.style.background='rgb(0, 255, 76)'
        }
    }
    buttonA.disabled = true;
    buttonB.disabled = true;
    buttonC.disabled = true;
    buttonD.disabled = true;
}

nextButton.addEventListener('click', function() {
    clearResult();
    hideNextButton();
    displayNextScreen();
    displayEndButton();
    buttonA.disabled = false;
    buttonB.disabled = false;
    buttonC.disabled = false;
    buttonD.disabled = false;    
    }
);

buttonA.addEventListener('click', function() {onAnswerButtonClick('ansA', buttonA)});
buttonB.addEventListener('click', function() {onAnswerButtonClick('ansB', buttonB)});
buttonC.addEventListener('click', function() {onAnswerButtonClick('ansC', buttonC)});
buttonD.addEventListener('click', function() {onAnswerButtonClick('ansD', buttonD)});

   let testValue = 50;
buttonA.addEventListener('click', function(){testValue--; console.log(testValue)});

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

//❌end screen has to have some buttons I guess

//❌need to be able to enter initials

//❌something something local storage something something

//❌write questions