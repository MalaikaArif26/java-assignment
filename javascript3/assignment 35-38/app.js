//----------------QUESTION NO 1----------------------------

// 1. Write a function that displays current date & time in your
// browser.

//  function tellTime() {
//      var now = new Date();

//    alert(now);
//      }

//      tellTime();

//------------------------------QUESTION NO 2-------------------------

// 2. Write a function that takes first & last name and then it
// greets the user using his full name.

// function greetings(){
//     var firstName = prompt("Enter your First Name");
//     var lastName  = prompt("Enter Your Last Name");
//     document.write("Hello " + firstName + " " +  lastName);
// }
// greetings();

//-----------------------------QUESTION NO 3--------------------------

// 3. Write a function that adds two numbers (input by user)
// and returns the sum of two numbers.

// function numbers (x,y){
//     return x + y;
// }
// var result = numbers(7,8);
// alert(result);

//---------------------------QUESTION NO 4--------------------------------

// 4. Calculator:
// Write a function that takes three arguments num1, num2
// & operator & compute the desired operation. Return and
// show the desired result in your browser.

// function calculator(){
//     var num1 = +prompt("Enter Your number");
//     var num2 = +prompt("Enter your Second Number");
//     var operator = prompt("Enter your operator");
//     if (operator === "+"){
//         document.write(num1 + num2);
//     } if(operator === "-"){
//         document.write(num1 - num2);
//     }if(operator === "*"){
//         document.write(num1 * num2);
//     }if(operator === "/"){
//         document.write(num1 / num2);
//     }
// }
// calculator();

//-----------------------------QUESTION NO 5-----------------------------

// 5. Write a function that squares its argument.

// function squares(){
//     var num = +prompt("Enter your number");
//     var sq = num**2;
//     document.write(sq);
// }
// squares();

//-------------------------QUESTION NO 6------------------------------

// 6. Write a function that computes factorial of a number.

// let number = +prompt("Enter a Number ");
// let fact = 1;
// if(fact == 0) {
//     document.write("The factorial of a " + number + "is 1");
// }else if(fact < 0 ){
//     document.write("The Factorial of -ve number is not possible");
// }else{
// for (var i = 1; i <= number; i++){
//     fact = fact*i;
// }
// document.write("The Factorial of a " + number + " is " + fact);
// }


//-----------------------------QUESTION NO 7--------------------------


// 7. Write a function that take start and end number as inputs
// & display counting in your browser.


// let startNum = +prompt("Enter Starting Number");
// let endNum  = + prompt("Enter Ending Number ");
// function userNum (){
//     for(var i = startNum; i <= endNum; i++){
//     document.write(i)
//     }
// }
// userNum();




//-------------------------------QUESTION NO 8-----------------------------

// 8. Write a nested function that computes hypotenuse of a
// right angle triangle.
// Hypotenuse2 = Base2 + Perpendicular2

// function triangle(){
//     let base = +prompt("Enter Base Number");
//     let perp = +prompt("Enter Perpendicular Value");
//     let hypo = base*2 + perp*2;
//     document.write(hypo);
// }
// triangle();

//---------------------------QUESTION NO 9-----------------

//9. Write a function that calculates the area of a rectangle.
// A = width * height
// Pass width and height in following manner:

// i. Arguments as value
// ii. Arguments as variables

// function rectangle (){
//     var width = +prompt("Enter Width");
//     let height = +prompt("Enter Height");
//     let result = width * height;
//     document.write(result)
// }

// rectangle();

//-------------------------QUESTION NO 10----------------------------------

// let string = prompt("Enter Any String");

// function palin(){
//     var x = string;
//     var y = "";
//     for(var i =x.length-1; i >= 0; i--){
//         y=y+x[i];
//     }
//     if (x == y ){
//         document.write( "Is a palindrome");
//     }else {
//         document.write( "Its not a palindrome")
//     }


// }
// palin();

//--------------------------QUESTION NO 11-------------------------------

// 11. Write a JavaScript function that accepts a string as a
// parameter and converts the first letter of each word of the
// string in upper case.
// EXAMPLE STRING : 'the quick brown fox'
// EXPECTED OUTPUT : 'The Quick Brown Fox'

// function string (){
//     var apl = "the quick brown fox";
// var replace = apl.charAt(0).toUpperCase() + apl.slice(1,3).toLowerCase()+ " " + apl.charAt(4).toUpperCase() + apl.slice(5,9).toLowerCase() + " " + apl.charAt(10).toUpperCase() + apl.slice(11,15).toLowerCase() + " " + apl.charAt(16).toUpperCase() + apl.slice(17,19).toLowerCase();
// document.write(replace)

// }
// string();

//------------------------------QUESTION NO 12------------------------------

// 12. Write a JavaScript function that accepts a string as a
// parameter and find the longest word within the string.
// EXAMPLE STRING : 'Web Development Tutorial'
// EXPECTED OUTPUT : 'Development'

// function longWord(str){
// var newString = str.split(" ");
// newString.sort(function(a,b){return b.length - a.length});
// return newString[0]
// }console.log(longWord("web development tutorial"));

//-----------------------------------QUESTION NO 13-----------------------

// 13. Write a JavaScript function that accepts two arguments, a
// string and a letter and the function will count the number of
// occurrences of the specified letter within the string.


// function occur(){
// let string = prompt("Enter a string");
// let letter  = prompt("Enter a letter ");
// let strlen =    string.length;
// let counter = 0; 
// for (var i = 0; i < strlen; i++ ){
//     if (string[i] == letter){
//          counter++;
//     }
// }console.log(counter)
// }occur();


