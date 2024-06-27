function init() {
  let randomNumber = Math.floor(Math.random() * 100) + 1;
  let guessButton = document.getElementById("guessButton");
  let inputNum = document.getElementById("inputNum");

  guessButton.addEventListener("click", guessNumber);

  let df = new DocumentFragment();

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
  // attempt.append(df);

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

      if (guess > randomNumber) {
        alert("Too high, try again!");
        inputNum.value = "";
        updateAttempt();
      } else if (guess < randomNumber) {
        alert("Too low, try again!");
        inputNum.value = "";
        updateAttempt();
      } else {
        alert("Congratulations! You guessed the right number!");
        randomNumber = Math.floor(Math.random() * 100) + 1;
        inputNum.value = "";
        resetAttempt();
      }
    } else {
      alert("Please enter a number between 1 and 100!");
      inputNum.value = "";
    }
  }
}

window.addEventListener("DOMContentLoaded", init);
