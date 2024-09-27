document.write("<br> <h4>Question 1</h4>");

let num = 1;
let price1 = num--;
document.write(price1 + "<br>");

let num2 = 30;
let price2 = --num2;
document.write(price2 + "<br>");
let num3 = 30;
let price3 = ++num3;
document.write(price3 + "<br>");
let num4 = 10;
let price4 = num4++;
document.write(price4 + "<br>");
let num5 = 5;
let price5 = +-num5;
document.write(price5 + "<br>");


document.write("<br> <h4>Question 2</h4>");

let a = 2;
let b = 1;


let step1 = --a; 
document.write('--a: ' + step1 + "<br>"); 

let step2 = step1 - --b; 
document.write('--a - --b: ' + step2 + "<br>");

let step3 = step2 + ++b;
document.write('--a - --b + ++b: ' + step3 + "<br>"); 

let result = step3 + b--;
document.write('--a - --b + ++b + b--: ' + result + "<br>"); 

document.write('Final values:<br>');
document.write('a: ' + a + "<br>"); 
document.write('b: ' + b + "<br>");
document.write('result: ' + result + "<br>");

document.write("<br> <h4>Question 3</h4>");


const name1 = prompt("Please enter your name:");

if (name1) {

    const greetingMessage = `Hello, ${name1}! Nice to meet you!`;


    alert(greetingMessage);
} else {
    alert("You didn't enter a name!");
}

document.write("<br> <h4>Question 5</h4>");


let myTable =  parseInt(prompt("Please enter your name:"));

for (let i = 1; i <= 10; i++) {
    document.write("<br>" + myTable + " x " + i + " = " + (myTable * i));
}



    
document.write("<br> <h4>Question 6</h4>");


const subject1 = prompt("Enter the name of the first subject:");
const subject2 = prompt("Enter the name of the second subject:");
const subject3 = prompt("Enter the name of the third subject:");

const totalMarksPerSubject = 100;
const totalSubjects = 3;

const obtainedMarks1 = parseInt(prompt(`Enter obtained marks for ${subject1}:`));
const obtainedMarks2 = parseInt(prompt(`Enter obtained marks for ${subject2}:`));
const obtainedMarks3 = parseInt(prompt(`Enter obtained marks for ${subject3}:`));

const totalObtainedMarks = obtainedMarks1 + obtainedMarks2 + obtainedMarks3;
const totalMarks = totalMarksPerSubject * totalSubjects;
const percentage = (totalObtainedMarks / totalMarks) * 100;


document.write("<h2>Results</h2>");
document.write(`<p><strong>${subject1}:</strong> ${obtainedMarks1} marks</p>`);
document.write(`<p><strong>${subject2}:</strong> ${obtainedMarks2} marks</p>`);
document.write(`<p><strong>${subject3}:</strong> ${obtainedMarks3} marks</p>`);
document.write(`<h3>Total Obtained Marks: ${totalObtainedMarks}</h3>`);
document.write(`<h3>Total Marks: ${totalMarks}</h3>`);
document.write(`<h3>Percentage: ${percentage.toFixed(2)}%</h3>`);





