const city = prompt("Enter the name of your city:").toLowerCase();


if (city === "Karachi") {
    alert("Welcome to the city of lights!");
} else {
    alert("Welcome to " + city + "!");
}


const gender = prompt("Please enter your gender (male/female):").toLowerCase();


if (gender === "male") {
    alert("Good Morning Sir.");
} else if (gender === "female") {
    alert("Good Morning Mam.");
} else {
    alert("Invalid input. Please enter 'male' or 'female'.");
}


const signalColor = prompt("Enter the color of the traffic signal (Red/Yellow/Green):").toLowerCase();


let message;
if (signalColor === "red") {
    message = "Must Stop";
} else if (signalColor === "yellow") {
    message = "Ready to move";
} else if (signalColor === "green") {
    message = "Move now";
} else {
    message = "Invalid color. Please enter Red, Yellow, or Green.";
}


alert(message);




const fuel = prompt("Enter the remaining fuel in your car (in liters):");


if (fuel < 0.25) {
    alert("Please refill the fuel in your car.");
} else {
    alert("You have enough fuel.");
}


// --------------------------------
const secretNumber = Math.floor(Math.random() * 10) + 1;

const userGuess = parseInt(prompt("Guess the secret number (between 1 and 10):"), 10);


if (userGuess === secretNumber) {
    alert("Bingo! Correct answer");
} else if (userGuess + 1 === secretNumber || userGuess - 1 === secretNumber) {
    alert("Close enough to the correct answer");
} else {
    alert("Sorry, that's not correct.");
}



const userInput = prompt("Enter a number:");
const number = parseInt(userInput, 10);
if (number % 3 === 0) {
    alert("The number " + number + " is divisible by 3.");
} else {
    alert("The number " + number + " is not divisible by 3.");
}



const userInput3 = prompt("Enter a number:");
const number3 = parseInt(userInput3, 10);
if (number3 % 2 === 0) {
    alert("The number " + number3 + " is even.");
} else {
    alert("The number " + number3 + " is odd.");
}



const userInput4 = prompt("Enter the temperature:");
const temperature = parseFloat(userInput4);

if (temperature > 40) {
    alert("It is too hot outside.");
} else if (temperature > 30) {
    alert("The Weather today is Normal.");
} else if (temperature > 20) {
    alert("Today's Weather is cool.");
} else if (temperature > 10) {
    alert("OMG! Today's weather is so Cool.");
} else {
    alert("It's pretty cold outside.");
}



