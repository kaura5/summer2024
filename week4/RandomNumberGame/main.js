function init() {
  let randomNumber = Math.floor(Math.random() * 100) + 1;
  let guessButton = document.getElementById("guessButton");
  let inputNum = document.getElementById("inputNum");

  guessButton.addEventListener("click", guessNumber);

  function counter() {
    let count = 0;

    return {
      increase: function () {
        count++;
        return count;
      },

      current: function () {
        return count;
      },

      reset: function () {
        count = 0;
        return count;
      },
    };
  }

  let attempt = document.getElementById("attempt");
  const myCounter = counter();

  function updateAttempt() {
    myCounter.increase();
    attempt.innerHTML = myCounter.current();
    let message = document.getElementById("message");
    message.innerHTML = "Current attempt..";
  }

  function resetAttempt() {
    myCounter.reset();
    attempt.innerHTML = "";
    message.innerHTML = "";
  }

  

  function guessNumber(ev) {
    ev.preventDefault();
    let value = inputNum.value.trim();

    if (value !== "" && value > 0 && value < 101) {
      let guess = parseInt(value);
      let alertMessage = document.getElementById('alertMessage');

      if (guess > randomNumber) {
        alertString = "Too high, try again!";
        inputNum.value = "";
        updateAttempt();
      } else if (guess < randomNumber) {
        alertString = "Too low, try again!";
        inputNum.value = "";
        updateAttempt();
      } else {
        alertString = "Congratulations! You guessed the right number!";
        randomNumber = Math.floor(Math.random() * 100) + 1;
        inputNum.value = "";
        resetAttempt();
      }
    } else {
      alertString = "Please enter a number between 1 and 100!";
      inputNum.value = "";
    }
    alertMessage.innerHTML = alertString;
  }
}


window.addEventListener("DOMContentLoaded", init);
