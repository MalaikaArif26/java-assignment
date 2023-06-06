//=============ASSIGNMENT NO 14-17==========

//----------------QUESTION NO 1----------------

//let arr = [];

//---------------QUESTION NO 2-------------

//let arr_1 = [];

//-------------QUESTION NO 3----------------

//let color = ["red", "blue","green"];

//-------------QUESTION NO 4----------------

//let num = [1,2,3];

//------------QUESTION NO 5-------------------
 
//let bool = [true,false];

//-----------QUESTION NO 6----------------------

//let mix = ["red", "blue", "green", 1,2,3];

//-----------QUESTION NO 7---------------------

// let edu = ["SSC", "HSC", "BCS", "BS","BCOM","MS","M.Phil","PhD"];
// for (i=0;i<edu.length;i++){
//     document.write(i+1);
//     document.write(edu[i] + "<br>");
// }

//----------QUESTION NO 8--------------------

// let studentName = ["ayesha", "kinza", "kosar"];
// let point = [320 , 230 , 480];
// // let total = 500;
// // let marks = score[0]/total;
// document.write("Score of " + studentName[0] + " is " + point[0] + " Percentage: " + point[0]/500 + "<br>");
// document.write("Score of " + studentName[1] + " is " + point[1] + " Percentage: " + point[1]/500 + "<br>");
// document.write("Score of " + studentName[2] + " is " + point[2] + " Percentage: " + point[2]/500 + "<br>");

//----------------QUESTION NO 9----------------


//=-=-=-=-=-=-=(a)


// let color = ["Red", "Green", "Blue" , "Black"];
// document.write(color + "<br>");
// let user = prompt("which color do you want add in the beginning of an array");
// color.unshift(user);
// document.write(color);

//=-=-=--=-=-=(b)

// let color = ["Red", "Green", "Blue" , "Black"];
// document.write(color + "<br>");
// let user = prompt("which color do you want add in the beginning of an array");
// color.push(user);
// document.write(color);

//=-=-=-=-=-=-=-(c)

// let color = ["Red", "Green", "Blue" , "Black"];
// document.write(color + "<br>");
// let user = prompt("which color do you want add in the beginning of an array");
// color.splice( 2,0,user);
// document.write(color);

//=-=-=-=-=-=-=-(d)

// let color = ["Red", "Green", "Blue" , "Black"];
// document.write(color + "<br>");

// color.shift();
// document.write(color);


//=-=-=-=-=-=-=-(e)

// let color = ["Red", "Green", "Blue" , "Black"];
// document.write(color + "<br>");

// color.pop();
// document.write(color);

//-=-=-=-=-=-=-==(f)
// let arr = ["red", "green", "blue", "brown"];
// document.write(arr + "<br>");
// let user = prompt("Enter your color name");
// let user_color = prompt("In which index you can add your color from (0 to 3)");
// arr.splice(user_color,0,user);
// document.write(arr);

//=-=-=-=-=-=-=-=(g)

// let arr = ["red", "green", "blue", "brown"];
// document.write(arr + "<br>");
// // let user = prompt("Enter your color name");
// let user_color = prompt("In which index you can delete your color from (0 to 3)");
// arr.splice(0,user_color);
// document.write(arr);

//----------------------QUESTION NO 10------------------------

let assend = [320,230,480,120];
for(i=0;i<assend.length;i++){
    document.write(assend[i])
    // document.write(assend[2])
    // document.write(assend[1])
    // document.write(assend[0])
}

//--------------QUESTION NO 11-----------
// let cities = ["karachi", "lahore", "islamabad", "punjab", "sukkar"];
// document.write("<h1>Cities List:</h1>");
// document.write(cities);

// document.write("<h1>Selected cities list</h1>");
// let city = cities.slice(1,3);
// document.write(city);

//  // ---------------------QUESTION : 12-----------------------


// let arr = ["This", " is", " my", " Cat"];
// let joined = arr.join(" ");
// document.write(arr.join(""));

//-----------------------QUESTION NO 15-----------------------

 
// let arr = ["Apple", "SamSung","Motorola", "Nokia", "Sony", "Haier" ];
// document.write("<select>");
// for (i=0; i<arr.length;i++){
//     document.write("option value" + arr[i] +  ">" arr[i] + "</option>")
// }
// document.write("</select>");

