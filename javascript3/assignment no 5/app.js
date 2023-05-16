// // ======================= ASSIGNMNET 5===========================
// //              ========== QUESTION 1 ===================
//  let numOne = +prompt("enter number 1");
//  let numTwo = +prompt("enter number 2");
// let result = numOne + numTwo;
//  document.write("The sum of " + numOne + " and " + numTwo + " is " + result);

 //                ========== QUESTION 2 ===================
//  let numOne = +prompt("enter number 1");
//  let numTwo = +prompt("enter number 2");

// let result = numOne - numTwo;

//  document.write("The sum of " + numOne + " and " + numTwo +   " is " + result);

 //                ========== QUESTION 3 ===================


//  let value = +prompt("enter number");
// document.write("initial value : ", value, "<br>")
// ++value;
// document.write("value after increment is : ", value, "<br>")
// value = value +7;
// document.write("value after adding 7 is : ", value, "<br>")
// --value;
// document.write("value after decrement is : ", value, "<br>")
// value = value%3;
// document.write("remainder of value after dividing by 3 is : ", value, "<br>")

 //                ========== QUESTION 4 ===================

//  let ticket = "600";
//  let no = +prompt("how much you want ticket");
//  document.write ( "Total cost to buy "+ no +" ticket to a movie is " + no * ticket + "PKR"); 

 //                ========== QUESTION 5 ===================

//  let table = +prompt("enter number");
// document.write("table of ",table,  " <br> ");
// for (let i =1; i<=10;i++){
//     document.write(table + " X  "+  i+ " = "+ + table*i+ " <br> ")
// }

 //                ========== QUESTION 7 ===================
 
//  let item_1 = "650";
//  document.write("Price of item 1 is " + item_1 + "<br>");
//  let quan = +prompt("how much to want to buy item 1 ");
// document.write("Quantity of item 1 is " + quan + "<br>");
// let item_2 = "100";
// document.write("Price of item 1 is " + item_2 + "<br>");
// let quan2 = +prompt("how much to want to buy item 2 ");
// document.write("Quantity of item 1 is " + quan2 + "<br>");
// let charges = "100";
// document.write("Shipping Charges is " + charges);
// let va = "<br>";

// document.write ("Total cost of your order is " + (item_1 * quan) + (item_2 * quan2)+ charges);

 //                ========== QUESTION 8 ===================

// let total_marks = +prompt("enter total marks");
// let obtained_marks = +prompt("enter obtained marks");
// let per = (obtained_marks*100)/total_marks;
// document.write("total marks are: ",total_marks, "<br>");
// document.write("obtained marks are: ",obtained_marks, "<br>");
// document.write("percentage is: ",per, "%");

 //                ========== QUESTION 9 ===================

//  let dollar = +prompt("how many dollars you want to convert");
// let riyal = +prompt(" how many riyals you want to convert");
// let convert = (dollar*104.80) + (riyal*28);
// document.write("<b> Currency in PKR</b> <br><br>");
// document.write("Total currency in PKR is : ", convert)

 //                ========== QUESTION 10 ===================

//  let num = +prompt("Enter Your Number");
//  let cal = ((num + 5)*10/2);
//  document.write(cal);


 //                ========== QUESTION 11 ===================

//  let currentYear = +prompt("Enter Current Year");
//  let birthYear = +prompt("Enter your birth year");
//  let result = currentYear - birthYear;
// document.write("Current Year:" + currentYear ,"<br>");
// document.write("Birth Year:" + birthYear , "<br>");
// document.write("Your Age:" + result);

 //                ========== QUESTION 12 ===================

// let curr_year = +prompt("enter current year");
// let birth_year = +prompt("enter birth year");
// let age = curr_year - birth_year ;

// document.write("current year is: ", curr_year, " <br>")
// document.write("birth year is: ", birth_year, " <br>")
// document.write("age is: ", age);

 //                ========== QUESTION 13 ===================

 let lifeTime =   "<h1>The Lifetime Supply Calculator  </h1>";
 document.write(lifeTime);

 let snack = prompt("Enter Your Favourite Snack");
 document.write( "Favourite snack: " +  snack , "<br>");

 let age = prompt("Enter Your Age" );
 document.write( "Current Age: " + age, "<br>");

 let maxAge = prompt("Enter Your Estimited Maximum Age" );
 document.write( "Estimited Maximum Age: " + maxAge, "<br>");

 let snackPer = +prompt("Amount of snack per day" );
 document.write( "Amount of snack per day: " + snackPer, "<br>");

 let value = 0;
let loop_value = (maxAge - age)*365;
for (let i=1;i<=loop_value;i++){
     value = value+snackPer;
}
document.write("you will need : ",value, " snack to last you until the ripe old age of ", maxAge , "<br>");