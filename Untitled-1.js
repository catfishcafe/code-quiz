//TIMER

// let timer = setInterval(function() {
//     if (document.getElementById('end-game-display').style.display === 'block'){
//         return;
//     } else if(second.value === 00 && minute.value === 00){
//         return displayEndScreen()
//     } else if(second.value === 00){
//         second.value = 59
//     } else if (second.value > 00){
//         second.value--; second.textContent = second.value;
//     };
//     if(second.value === 59){
//         minute.value--; minute.textContent = minute.value;
//     }
//    }, 1000)


let second = document.getElementById('second')
let minute = document.getElementById('minute')
var secondsLeft;

let setTime = function() {
    minute.textContent = 0;
    secondsLeft = 59;
    const timerInterval = setInterval(function() {
    secondsLeft--;
    second.textContent = secondsLeft;
    if (document.getElementById('end-game-display').style.display === 'block'){
        return;
        } else if(second.value === 0){
        return displayEndScreen()
        }
    if(secondsLeft === 0) {
      clearInterval(timerInterval);
    }
  }, 1000);
}

   let testValue = 50;
buttonA.addEventListener('click', function(){testValue--; console.log(testValue)});
