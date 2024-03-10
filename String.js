var name = 'rk';
var role  = "student";
var backquote = 'this is "rk"'
var backslash = "this is \"rk\""
//string constuctor
let str = new String("string methods")
console.log(name);
console.log(role);
console.log(str);//object
console.log(name.length);
console.log(backquote);
console.log(backslash);

//STRING METHODS

// 1)SLICE

let str1 = "this is rk";
let str2 = str1.slice(1,3);
console.log(str2);
let str3 = str1.slice(-7,-3) //counting from right to left
console.log(str3);

//2) SUSBTRING
//is similar to slice but you cant use negative values
let str4 = str1.substring(0,5);
console.log(str4);
//3)SUBSTR
//similar to splicing
let str5 = str1.substr(4,2);
console.log(str5);
//4)REPLACE 
//>returns the new stmt but wont change original stmt
let stmt = "This is krishna";
let stmt2 = stmt.replace("This","it")
console.log(stmt2);
console.log(stmt);

//UPPERCASE AND LOWEE CASE
//converts cases
let userName = "rk";
let Modifiedname = userName.toUpperCase();
console.log(Modifiedname);

let userName1 = "RK";
let Modifiedname1 = userName1.toLowerCase();
console.log(Modifiedname1);

//TRIM
let str6 = "    HI!!!!";
console.log(str6);
let trimmed = str6.trim();
console.log(trimmed);
//SEARCH
//charat
//indexof
//split

///////