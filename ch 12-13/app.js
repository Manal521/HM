// QUESTION NO: 1

// let input = prompt('ENTER YOUR CHARACTER');

// function checkInputType(input) {

//     if (!isNaN(input)) {
//         document.write(input + " is a number.");

//     } else if (input >= "a" && input <= "z") {
//         document.write(input + " is a lowercase.");
//     } else if (input >= "A" && input <= "Z") {
//         document.write(input + " is a uppercase.");
//     } else {
//         document.write(input + " is neither a number nor a letter.");
//     }
// }
// checkInputType(input);

//QUESTION NO: 2

// let num1 = parseInt(prompt("Enter the first integer:"));
// let num2 = parseInt(prompt("Enter the second integer:"));


// if (num1 > num2) {
//     document.write(num1 + " is the larger number.");
// } else if (num1 < num2) {
//     document.write(num2 + " is the larger number.");
// } else {
//     document.write("Both numbers are equal.");
// }


//QUESTION NO: 3

// let input = parseFloat(prompt("ENTER NUMBER."));
// if (input > 0) {
//     document.write(input + " is positive.");
// } else if (input < 0) {
//     document.write(input + " is negative.");
// } else {
//     document.write(input + "is zero.");
// }



//QUESTION NO:4
// let character = prompt("Enter a character:");
// if (character.length === 1) {
//     character = character.toLowerCase();
//     if (character === 'a' || character === 'e' || character === 'i' || character === 'o' || character === 'u') {
//         document.write("It's a vowel");
//     } else {
//         document.write("It's not a vowel");
//     }
// } else {
//     document.write("Please enter only one character.");
// }


//QUESTION NO: 5
// let password = "manal1234";
// let input = prompt("ENTER YOUR PASSWORD.");
// if (password === input) {
//     document.write("Correct , password");

// } else if (password !== input) {
//     document.write("Wrong , password");

// }

//QUESTION NO: 6
// var greeting;
// var hour = 13;
// if (hour < 18) {
//     greeting = "Good day";
// } else {
// //     greeting = "Good evening";
// }


//QUESTION NO: 7

// let time = prompt("Enter the time in 24 hour format.");
// time = parseInt(time);

// if (time >= 0 && time < 1200) {

//     document.write("Good morning! The time is " + time);
// } else if (time >= 1200 && time < 1700) {

//     document.write("Good afternoon! The time is " + time);
// } else if (time >= 1700 && time < 2100) {

//     document.write("Good evening! The time is " + time);
// } else if (time >= 2100 && time < 2400) {

//     document.write("Good night! The time is " + time);
// } else {

//     document.write("Please enter correct time.");
// }