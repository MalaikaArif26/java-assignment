//------------------------------QUESTION NO 1--------------------------
// 1. Write a program that takes a positive integer from user &
// display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number


// let user = +prompt("Enter postive Integer");
// document.write("Number " + user + "<br>");
// let round = Math.round(user);
// document.write("Round of Value " + round + "<br>");
// let floor = Math.floor(user);
// document.write( " Floor value "+ floor + "<br>");
// let ceil = Math.ceil(user);
// document.write("Ceil Value " + ceil + "<br>")

//--------------------------------QUESTION NO 2 --------------------------------

// 2. Write a program that takes a negative floating point
// number from user & display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number

// let user = +prompt("Enter integer Integer");
// document.write("Number " + user + "<br>");
// let round = Math.round(user);
// document.write("Round of Value " + round + "<br>");
// let floor = Math.floor(user);
// document.write( " Floor value "+ floor + "<br>");
// let ceil = Math.ceil(user);
// document.write("Ceil Value " + ceil + "<br>")

//-----------------------------QUESTION NO 3-----------------------------

// 3. Write a program that displays the absolute value of a
// number.
// E.g. absolute value of -4 is 4 & absolute value of 5 is 5

// let user = +prompt("Enter value");
// let absNum = Math.abs(user);
// document.write(absNum);




//-----------------------QUESTION NO 4---------------------------------------

// 4. Write a program that simulates a dice using random()
// method of JS Math class. Display the value of dice in your
// browser.:

// let roll = Math.floor(Math.random()*6) + 1;
// document.write("Random Dice Value: " + roll +"<br>");

// let rol = Math.floor(Math.random()*6) + 1;
// document.write("Random Dice Value: " + rol);



//------------------------------QUESTION NO 5----------------------------

// 5. Write a program that simulates a coin toss using random()
// method of JS Math class. Display the value of coin in your
// browser

// let rand = Math.random();

// let one = rand.toFixed();

// if (one == 0){
//     document.write(one + "<br>" + "Random coins value: " + "Head")
// }else{
//     document.write(one +"<br>"+ "Random coins value: " + "Tail")
// }




//------------------------------------QUESTION NO 6--------------------------

// 6. Write a program that shows a random number between 1
// and 100 in your browser.

// let rand = Math.random();
// let mul = rand * 100;
// let floor = Math.ceil(mul)
// if (rand <= 100 ){
//     document.write("Random number Between 1 and 100: " + floor);

// }
//--------------------------------QUESTION NO 7 ------------------------------

// 7. Write a program that asks the user about his weight. Parse
// the user input and display his weight in your browser.
// Possible user inputs can be:
// a. 50
// b. 50kgs
// c. 50.2kgs
// d. 50.2kilograms

// let user = prompt("Enter Your weight in kilogram");
// document.write("The weight of user is " + user + " Kilogram" );  

//----------------------------------------QUESTION NO 8--------------------------

// 8. Write a program that stores a random secret number from
// 1 to 10 in a variable. Ask the user to input a number
// between 1 and 10. If the user input equals the secret
// number, congratulate the user.

// let secret = "6";
// let user = +prompt("Enter a Number Between 1 to 10");
// if (user == secret){
//     document.write( "<h1>CONGRATULATIONS</h1> ");
// }
//  else {
// document.write("<h2>TRY AGAIN</h2>");
// }