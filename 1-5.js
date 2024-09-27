// javacript alerts chapter 1
document.write("<br> <h1>Chapter 1 assignment</h1>");
document.write("<br> ALERTS");



alert("Welcome to BK Baby Fashion! Discover adorable and comfy babywear for your little ones!");

alert("Welcome to BK Baby Fashion! \n Discover adorable and comfy babywear for your little ones!");

console.log("Welcome to BK Baby Fashion! \n Discover adorable and comfy babywear for your little ones!");



// javacript alerts chapter 2
document.write("<br> <h1>Chapter 2 assignment</h1>");


let username;

let myName = "David Raya";
alert(myName);


let message;
message = "Hello World";
alert(message);



let studentName = "Ahnaf Hafeez";
let studentAge = 25;
let studentSubject = "Computer Science";
let studentID = "WMA-274750";
let studentEmail = "ahnafhafeez2020@gmail.com";



alert("Student Name: " + studentName);
alert("Student Age: " + studentAge);
alert("Student Major: " + studentSubject);
alert("Student ID: " + studentID);
alert("Student Email: " + studentEmail);

let eat = "PIZZA";
alert(eat + "\n" + eat.slice(0, -1) + "\n" + eat.slice(0, -2) + "\n" + eat.slice(0, -3) + "\n" + eat.slice(0, -4));


let book = "A smarter way to learn javascript";
alert("I am learning from the book " + book);


document.write("Yeah! I can write HTML content through javascript");

let symbol1 = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬";


alert(symbol1);
document.write("<br>" + symbol1);



// javacript alerts chapter 3
document.write("<br> <h1>Chapter 3 assignment</h1>");


let age = 20;
alert("i am " + age + " years old");


let birthYear = 1999;
document.write("<br> Data type of my declared variable is " + typeof (birthYear));



let visitorName = "John Doe";
let productTitle = "T-shirt";
let quantity = 5;


let order = "<br>" + visitorName + " ordered " + quantity + " " + productTitle + "(s) on XYZ Clothing store";


document.write(order);



// javacript chapter 4
document.write("<br> <h1>Chapter 4 assignment</h1>");



let variable1 = "value1", variable2 = "value2", variable3 = "value3";


let legalNames = ["myVariable", "var1", "_myVar", "$myVar", "name123"];
let illegalNames = ["1stVariable", "my-Variable", "var name", "my variable", "for"];


document.write("<br> Legal names: " + legalNames + "<br> illegal names: " + illegalNames  + "<br> Variables name are case sensitive. <br> Variables names should not be a JS keyword " );


// javacript chapter 5
document.write("<br> <h1>Chapter 5 assignment</h1>");


let num1 = 3;
let num2 = 5;
let add = num1 + num2;
let sub = num1 - num2;
let mul = num1 * num2;
let div = num1 / num2;
let mod = num1 % num2;


document.write("<br> Addition of " + num1 + " and "+ num2 + " is " + add );
document.write("<br> Subtraction of " + num1 + " and "+ num2 + " is " + sub );
document.write("<br> Multiplication of " + num1 + " and "+ num2 + " is " + mul );
document.write("<br> Division of " + num1 + " and "+ num2 + " is " + div );
document.write("<br> Modulus of " + num1 + " and "+ num2 + " is " + mod );


let myVariable;

console.log("Value after variable declaration is: " + myVariable);

myVariable = 5;

console.log("Initial value: " + myVariable);

myVariable++;

console.log("Value after increment is: " + myVariable);

myVariable += 7;

console.log("Value after addition is: " + myVariable);

myVariable--;

console.log("Value after decrement is: " + myVariable);

let remainder = myVariable % 3;

console.log("The remainder is: " + remainder);



let ticket = 600;

document.write("<br> The cost of 5 movie ticket is: " + (ticket*5) + " PKR");

let myTable = 6;

document.write("<br>" + myTable + " x " + 1 + " = " + (myTable*1) );
document.write("<br>" + myTable + " x " + 2 + " = " + (myTable*2) ); 
document.write("<br>" + myTable + " x " + 3 + " = " + (myTable*3) ); 
document.write("<br>" + myTable + " x " + 4 + " = " + (myTable*4) ); 
document.write("<br>" + myTable + " x " + 5 + " = " + (myTable*5) ); 
document.write("<br>" + myTable + " x " + 6 + " = " + (myTable*6) ); 
document.write("<br>" + myTable + " x " + 7 + " = " + (myTable*7) ); 
document.write("<br>" + myTable + " x " + 8 + " = " + (myTable*8) ); 
document.write("<br>" + myTable + " x " + 9 + " = " + (myTable*9) ); 
document.write("<br>" + myTable + " x " + 10 + " = " + (myTable*10) ); 



let celsius = 25;


let fahrenheit = (celsius * 9/5) + 32;
console.log(celsius + "°C is " + fahrenheit + "°F");


let fTemp = 77;


let cTemp = (fTemp- 32) * 5/9;
console.log(fTemp + "°F is " + cTemp + "°C");


let item1 = 650;
let item2 = 100;
let shippingcost = 100;
let totalCost = ((item1*3) + (item2*7) + shippingcost) ;

console.log(totalCost);

document.write("<br> Total cost of your order is: "  + totalCost  );




let totalMarks = 980; 
let marksObtained = 804; 

let percentage = (marksObtained / totalMarks) * 100;

document.write("<br> Percentage: " + percentage + "%");
