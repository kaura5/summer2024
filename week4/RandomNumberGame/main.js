function init() {

    let randomNumber = Math.floor(Math.random() * 100) + 1;
    let guessButton = document.getElementById("guessButton");
    let inputNum = document.getElementById("inputNum");

    guessButton.addEventListener("click", guessNumber);

    function guessNumber(ev) {
        ev.preventDefault();
        let value = inputNum.value.trim();
        if (value !== "") {
            let guess = parseInt(value);
            if (guess > randomNumber) {
                alert("Too high, try again!");
            } else if (guess < randomNumber) {
                alert("Too low, try again!");
            } else if (isNaN(guess)) {
                alert("Please enter a number"); 
            } else {
                alert("Congratulations! You guessed the right number!");
                randomNumber = Math.floor(Math.random() * 100) + 1;
            }
            inputNum.value = "";
        }
    }


}

window.addEventListener("DOMContentLoaded", init);