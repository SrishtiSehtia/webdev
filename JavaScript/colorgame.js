var numSquares = 6;
var colors = generateRandomColors(numSquares);

var sqaures = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

easyBtn.addEventListener("click", function() {
	hardBtn.classList.remove("selected");
	easyBtn.classList.add("selected");
	numSquares = 3;
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i < sqaures.length; i++) {
		if(colors[i]) {
			sqaures[i].style.backgroundColor = colors[i];
		} else {
			sqaures[i].style.display = "none";
		}
	}
});

hardBtn.addEventListener("click", function() {
	easyBtn.classList.remove("selected");
	hardBtn.classList.add("selected");
	numSquares = 6;
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i < sqaures.length; i++) {
		sqaures[i].style.backgroundColor = colors[i];
		sqaures[i].style.display = "block";
	}
});

resetButton.addEventListener("click", function() {
	// generate all new colors
	colors = generateRandomColors(numSquares);
	// pick a new random color from array
	pickedColor = pickColor();
	// change colorDisplay to match new color
	colorDisplay.textContent = pickedColor;
	messageDisplay.textContent = "";
	this.textContent = "New Colors";
	// change colors of sqaures
	for(var i = 0; i < sqaures.length; i++) {
		sqaures[i].style.backgroundColor = colors[i];
	}
	h1.style.backgroundColor = "#steelblue";
})

colorDisplay.textContent = pickedColor;

for(var i = 0; i < sqaures.length; i++) {
	// add initial color to sqaures
	sqaures[i].style.backgroundColor = colors[i];

	// add click listeners to sqaures
	sqaures[i].addEventListener("click", function() {
		// grab color of clicked sqauare
		var clickedColor = this.style.backgroundColor;
		// compare color to pickedColor
		if(clickedColor === pickedColor) {
			messageDisplay.textContent = "Correct!";
			resetButton.textContent = "Play Again?"
			changeColors(clickedColor);
			h1.style.backgroundColor = clickedColor;
		} else {
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "Try Again";
		}
	});
}

function changeColors(color) {
	// loop through all sqaures
	for(var i = 0; i < sqaures.length; i++) {
		// change each color to match given color
		sqaures[i].style.backgroundColor = color;
	}
}

function pickColor() {
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num) {
	// make an array
	var arr = []
	// repeat num times
	for(var i = 0; i < num; i++) {
		// get random color and push into array
		arr.push(randomColor())
	}
	// return that array
	return arr;
}

function randomColor() {
	// pick a "red" from 0 - 255
	var r = Math.floor(Math.random() * 256);
	// pick a "green" from 0 - 255
	var g = Math.floor(Math.random() * 256);
	// pick a "blue" from 0 - 255
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}