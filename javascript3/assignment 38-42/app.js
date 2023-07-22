//---------------------------------QUESTION NO 1--------------------------------

// Write a custom function power ( a, b ), to calculate the value of
// a raised to b.

// function xy(){
//   var x = +prompt("Enter the Base");
//   var y = +prompt("Enter the power");
//   var result = Math.pow(x,y);
//   console.log("The Result is: " + result);
// }
// xy();


//-----------------------------------QUESTION NO 2 ----------------------------------

// 2. Any year is entered through the keyboard. Write a function to
// determine whether the year is a leap year or not.
// Leap years ..., 2012, 2016, 2020, ...

// function leapYear(){
//   var a = +prompt("input year");
//   if (a % 4 == 0){
//     document.write("This is a leap year => "+ a);
//   }else{
//   document.write("This is not a leap year => " + a)
//   }
// }
// leapYear();
//--------------------------------------QUESTION NO 3 --------------------------------

// 3. If the lengths of the sides of a triangle are denoted by a, b, and
// c, then area of triangle is given by
// area = S(S − a)(S − b)(S − c)
// where, S = ( a + b + c ) / 2
// Calculate area of triangle using 2 functions

// function areaOfTriangle(){
// let a = +prompt("Enter a Value");
// let b = + prompt("Enter b Value");
// let c = +prompt("Enter c Value");
// let s = (a + b + c)/2;
// let area = s * (s-a) * (s-b) * (s-c);
// document.write(area);
// return area;
// }
// areaOfTriangle();

//-------------------------QUESTION NO 4-----------------------------------------

// 4. Write a function that receives marks received by a student in 3
// subjects and returns the average and percentage of these
// marks. there should be 3 functions one is the mainFunction
// and other are for average and percentage. Call those functions
// from mainFunction and display result in mainFunction.

// function average(subjectOne, subjectTwo, subjectThree) {
//     return (subjectOne + subjectTwo + subjectThree) / 3;
//   }
  
//   function percentage(totalMarks, maximumMarks) {
//     return (totalMarks / maximumMarks) * 100;
//   }
  
//   function mainFunction() {
//     let subjectOne = (prompt("Enter marks for Subject One"));
//     let subjectTwo = (prompt("Enter marks for Subject Two"));
//     let subjectThree = (prompt("Enter marks for Subject Three"));
  
//     let averageMarks = average(subjectOne, subjectTwo, subjectThree);
//     let percentage = percentage(averageMarks, 100);
  
//     console.log("Average marks:", averageMarks);
//     console.log("Percentage:", percentage + "%");
//   }
  
//   // Calling the main function
//   mainFunction();

//--------------------------------QUESTION NO 5--------------------------------

// 5. You have learned the function indexOf. Code your own custom
// function that will perform the same functionality. You can code
// for single character as of now.

// function singleCode(){
//     var user = "Pakistan";
//     var find = user.indexOf("a");
//     document.write(find)
// }
// singleCode();

//--------------------------------------QUESTION NO 6------------------------------

// 6. Write a function to delete all vowels from a sentence. Assume
// that the sentence is not more than 25 characters long.


// function removeVowels(sentence) {
//     var vowels = /[aeiou]/gi;  // Define a regular expression to match vowels
  
//     // Remove vowels using the replace() method
//     var result = sentence.replace(vowels, '');
  
//     return result;
//   }
//   var inputSentence = "This is a sample sentence.";
//   var outputSentence = removeVowels(inputSentence);
//   console.log(outputSentence);

//---------------------------------------QUESTION NO 7---------------------------------

// 7. Write a function with switch statement to count the number of
// occurrences of any two vowels in succession in a line of text.
// For example, in the sentence

// var string = prompt("Please Enter a String")
// var letter = prompt("Please Enter a Letter")
// let strLen = string.length;
// let counter = 0;
// for (var i = 0; i < strLen; i++ ){
//   if (string[i] == letter){
//   counter++;
//   }
//   console.log(counter)
// }

//--------------------------------question no 8--------------------------------------

// 8. The distance between two cities (in km.) is input through the
// keyboard. Write four functions to convert and print this
// distance in meters, feet, inches and centimeters.

// function convertToMeters(distanceKm) {
//   var distanceMeters = distanceKm * 1000;
//   return distanceMeters;
// }

// function convertToFeet(distanceKm) {
//   var distanceFeet = distanceKm * 3280.84;
//   return distanceFeet;
// }

// function convertToInches(distanceKm) {
//   var distanceInches = distanceKm * 39370.1;
//   return distanceInches;
// }

// function convertToCentimeters(distanceKm) {
//   var distanceCm = distanceKm * 100000;
//   return distanceCm;
// }

// var distanceKm = parseFloat(prompt("Enter the distance between two cities in kilometers:"));

// var distanceMeters = convertToMeters(distanceKm);
// var distanceFeet = convertToFeet(distanceKm);
// var distanceInches = convertToInches(distanceKm);
// var distanceCm = convertToCentimeters(distanceKm);

// console.log("Distance in meters:", distanceMeters);
// console.log("Distance in feet:", distanceFeet);
// console.log("Distance in inches:", distanceInches);
// console.log("Distance in centimeters:", distanceCm);



//-----------------------------------QUESTION NO 9---------------------------------

// 9. Write a program to calculate overtime pay of employees.
// Overtime is paid at the rate of Rs. 12.00 per hour for every hour
// worked above 40 hours. Assume that employees do not work
// for fractional part of an hour.

// function OverTime(workHour, hourRate) {
//   var regular = 40;
//   var overtimeRate = 12.00;
//   var overtimeHours = Math.max(workHour - regular, 0);
//   var overtimePay = overtimeHours * overtimeRate;
//   return overtimePay;
// }

// var workHour = parseInt(prompt("Enter the number of hours worked:"));
// var hourRate = parseFloat(prompt("Enter the hourly rate:"));

// var overtimePay = calculateOvertimePay(workHour, hourRate);

// console.log("Overtime Pay:", overtimePay.toFixed(2));


//------------------------------QUESTION NO 10----------------------------------

// function countSuccessiveVowels(text) {
//     var count = 0;
//     var vowels = ['a', 'e', 'i', 'o', 'u'];
  
//     for (var i = 0; i < text.length - 1; i++) {
//       var currentChar = text[i].toLowerCase();
//       var nextChar = text[i + 1].toLowerCase();
  
//       if (vowels.includes(currentChar) && vowels.includes(nextChar)) {
//         switch (currentChar + nextChar) {
//           case 'aa':
//           case 'ae':
//           case 'ai':
//           case 'ao':
//           case 'au':
//           case 'ea':
//           case 'ee':
//           case 'ei':
//           case 'eo':
//           case 'eu':
//           case 'ia':
//           case 'ie':
//           case 'ii':
//           case 'io':
//           case 'iu':
//           case 'oa':
//           case 'oe':
//           case 'oi':
//           case 'oo':
//           case 'ou':
//           case 'ua':
//           case 'ue':
//           case 'ui':
//           case 'uo':
//           case 'uu':
//             count++;
//             break;
//         }
//       }
//     }
  
//     return count;
//   }
  
//   var text = "This is a sentence with some vowels in succession.";
//   var numOccurrences = countSuccessiveVowels(text);
  
//   console.log("Number of occurrences of successive vowels:", numOccurrences);
  