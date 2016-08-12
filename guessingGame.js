var guesses = 0;
var answer = prompt("I'm thinking of a number between one and one hundred. Can you guess it?");
var chosenNumber = Math.floor(Math.random()*100 /1);

while (answer != chosenNumber) {
   if (answer > chosenNumber) {
    answer = prompt("Go lower!");
    guesses++;
    }
  else if (answer < chosenNumber) {
    answer = prompt("Go higher!");
    guesses++;
    }
  }

if (answer == chosenNumber) {
  alert("You win! It took only took you " + guesses + " guesses!");
}
