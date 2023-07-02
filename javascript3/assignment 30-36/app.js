//----------------------QUESTION NO 1 ----------------------

// Write a program that displays current date and time in
// your browser.

// let date = new Date();
// document.write(date);

//--------------------QUESTION NO 2----------------------

// 2. Write a program that alerts the current month in words.
// For example December.


//  var da = new Date();
//  var Month = da.getMonth();
//  document.write("Current month: "+ Month);

//--------------------QUESTION NO 3-----------------

// 3. Write a program that alerts the first 3 letters of the current
// day, for example if today is Sunday then alert will show
// Sun.
//   var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
//  var now = new Date();
//  var theDay = now.getDay();
//  var nameOfToday = dayNames[theDay];
//  document.write(nameOfToday)


 //-------------QUESTION NO 4-----------------


//  4. Write a program that displays a message “It’s Fun day” if
// its Saturday or Sunday today.

//  var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
//  var now = new Date();
//  var theDay = now.getDay();
//  var nameOfToday = dayNames[theDay];
//  if (dayNames == "sat" , "Sun"){
//     document.write("<h1>ITS FUNDAY</h1> ")
//  }

//---------------QUESTION NO 5 ---------------

//-5. Write a program that shows the message “First fifteen
// days of the month” if the date is less than 16th of the month
// else shows “Last days of the month”.
// let ne = new Date();
// let day = ne.getDate();

// if(day < 16){
//     document.write("First Fifteen days of a month");
// }else {
//     document.write("Last fifteen days of a month");
// }

//------------------------QUESTION NO 6---------------------------------

// 6. Write a program that determines the minutes since
// midnight, Jan. 1, 1970 and assigns it to a variable that
// hasn't been declared beforehand. Use any variable you like
// to represent the Date object.



// var currentDate = new Date();
// var minutes = Math.floor(currentDate.getTime() / (1000 * 60));

// alert("Minutes since midnight on Jan. 1, 1970: " + minutes);




//---------------------------QUESTION  NO 7--------------------------
// 7. Write a program that tests whether it's before noon and
// alert “Its AM” else “its PM”.

// let now  = new Date();
// let hours = now.getHours();

// let min = now.getMinutes();

//  if (hours >= 12){
//     document.write("Its PM");
//  }else {
//     document.write("Its AM")
//  }
//--------------------QUESTION NO 8------------------------------------
// 8. Write a program that creates a Date object for the last day
// of the last month of 2020 and assigns it to variable named
// laterDate.

// let now = new Date("2021");
// document.write(now)

// let now = new Date();
// document.write(now + "<br>");
// let old = new Date("June 18 , 2015 ")
// document.write(old + "<br>")
// let fun = now-old;
// document.write(fun);

//-----------------------QUESTION NO 9 --------------------------------

// 9. Create a date object of the starting date of this Ramadan
// and alert the number of days past since 1st Ramadan?
// Note: 1st Ramadan was on June 18, 2015

// let currentDate = new Date();
// let ramzan = new Date("June 18,2015");
  
// let set = Math.abs( currentDate.getTime()-ramzan.getTime());
// let pass = Math.ceil(set/1000*3600*24);

// document.write(pass + " days have passed")

//----------------------QUESTION NO 10 --------------------------

// let currentDate = new Date();
// let one = new Date("january 1, 2023");

// let sec = (currentDate.getTime()-one.getTime())/1000;
// document.write( currentDate + sec + "second had passed since beginning of 2023");

//-----------------------QUESTION NO 11---------------------

// 11. Create a Date object for the current date and time.
// Extract the hours, reset the date object an hour ahead and
// finally display the date object in your browser.


// let currentDate = new Date();
// let hours = currentDate.getHours();
// let set = currentDate.setHours(hours-1);
// alert ("1 hour ago, it was " + currentDate);

//-----------------------------QUESTION NO 12-----------------------------

// Write a program that creates a date object and show the
// date in an alert box that is reset to 100 years back?

// let currentDate = new Date();
// let year = currentDate.getFullYear()-100;
// let month = currentDate.getMonth();
// let day = currentDate.getDate();
//  let past = new Date(year,month,day);
//  alert("100 years back, it was " + past);

//----------------------------------QUESTION NO 13---------------------------------

// 13. Write a program to ask the user about his age. Calculate
// and show his birth year in your browser.

// let age = prompt("entrer your age");
// let currentYear = new Date();
// let year = currentYear.getFullYear();
// let birthYear = year - age;
// document.write("Your Birth Year is " + birthYear);



//------------------------------------QUESTION NO 14------------------------------

// 14. Write a program to generate your K-Electric bill in your
// browser. All the amounts should be rounded off to 2
// decimal places. Display the following fields:

// document.write("<h1>K-ELECTRIC BILL</h1>" + "<br>");
// let user = prompt("Enter your name");
// document.write("Customer Name: " + user + "<br>");
// var monthName = ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "Octuber", "November" , "December"];
// let dat = new Date();
// let mon = dat.getMonth();
// document.write("Month: " + monthName[mon] +"<br>");
// let unit = +prompt("Enter no of unit");
// document.write("Numbers of unit: " + unit + "<br>");
// let charges = +prompt("Enter Charges per unit");
// document.write("Charges per unit: " + charges +"<br>")
// let net = unit * charges;
// let result = net + 350;
// document.write("Net Amount payable (within due date): " + net );
// document.write("<br>")
// document.write("Late payment surcharge:  350 " )
// document.write("<br>")
// let late = "350";
// document.write("Gross Amount payable (after due date): "  +result);
