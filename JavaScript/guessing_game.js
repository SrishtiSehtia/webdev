// create secret number
var secretNumber = 4;

// ask user for guess
var stringGuess = prompt("Guess a number");
var guess = Number(stringGuess);

// check is guess is right
if(guess === secretNumber) {
	alert("You got it right!");
}
// check if guess is higher
else if(guess > secretNumber) {
	alert("Too high, guess again");
}
// otherwise, check is lower
else {
	alert("Too low, guess again");
}
