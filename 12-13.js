var greeting;
var hour = prompt("Please enter any number");

if (hour < 18) {
    greeting = "Good day";
} else if (hour >= 18) {
    greeting = "Good evening";
} else {
    greeting = "please enter only in 0 to 23";
}

document.write(greeting + "<br>");




function compareIntegers(num1, num2) {
    if (num1 > num2) {
        document.write(num1 + " is larger than " + num2 + "<br>");
    } else if (num1 < num2) {
        document.write(num2 + " is larger than " + num1 + "<br>");
    } else {
        document.write("Both numbers are equal: " + num1 + "<br>");
    }
}
const num1 = parseInt(prompt("Enter the first integer:"));
const num2 = parseInt(prompt("Enter the second integer:"));
compareIntegers(num1, num2);



function categorizeTime(time) {
    if (time >= 0 && time < 1200) {
        document.write("It's Morning.<br>");
    } else if (time >= 1200 && time < 1700) {
        document.write("It's Afternoon.<br>");
    } else if (time >= 1700 && time < 2100) {
        document.write("It's Evening.<br>");
    } else if (time >= 2100 && time < 2400) {
        document.write("It's Night.<br>");
    } else {
        document.write("Invalid time entered. Please enter a time in 24-hour format (0000 - 2359).<br>");
    }
}
function categorizeTime(time) {
    if (time >= 0 && time < 1200) {
        document.write("It's Morning.<br>");
    } else if (time >= 1200 && time < 1700) {
        document.write("It's Afternoon.<br>");
    } else if (time >= 1700 && time < 2100) {
        document.write("It's Evening.<br>");
    } else if (time >= 2100 && time < 2400) {
        document.write("It's Night.<br>");
    } else {
        document.write("Invalid time entered. Please enter a time in 24-hour format (0000 - 2359).<br>");
    }
}


const timeInput = parseInt(prompt("Enter time in 24-hour format (e.g., 1900 for 7 PM):"));
categorizeTime(timeInput);