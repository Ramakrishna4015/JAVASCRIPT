//ways to create Object
//1) object literals or {}
//2) using Function constructor
//3)object.create
//4 classes
1//
let person = {
name:"RK",
color:"brown",
age:30,

}
console.log(person);
console.log(person.age);
2//
function human(name,age,color){
    this.name = name;
    this.age = age;
    this.color= color;
    this.isperson = true;
    this.details = "details"; //we can have new properties here
    this.printage = function(){ // can craete fun also
        console.log(age);
    }
}
let ram  = new human("ram",20,"brown")
console.log(ram);
console.log(ram.age);
console.log(ram.address);
ram.printage();//calling
let rk  = new human("rk",30,"brown")
console.log(rk);
rk.printage();
//this keyword role  
//1> craetes new obj
//2>refers the "this" to the craeted obj
//3>retturn the "this"


//VALUE AND REFERENCE TYPES
//value type example
//ex:boolean,null,undefined,string,number
let a  = 10;
let c = a; //c value is stored as 10 but not as a ,in this line  
console.log(a);
console.log(c);
a=100;
console.log(a);
console.log(c);//we havnt updated the c value so op is 10

///reference type
//ex:objects,arrays,and functions
let arr1 = [1,2,3]   //memory references of adress strored in arr1 not 1 2 3
let arr2 = [1,2,3]

console.log(arr1 === arr2); //false coz here we comparing memory refrencs not values
let arr11= arr1;//references of arr11 is assigned to arr1 
console.log(arr11 === arr1); //so it is corect
let arr3 = arr1.toString();
console.log(arr3);
let arr4 = arr2.toString();
console.log(arr4);
console.log(arr3 === arr4);//true coz values are directly stored in array storage



///ABSTRACTION

function humanbeing(name,YearOfBirth){
    this.name = name;
    this.YearOfBirth= YearOfBirth;
    //abstraction
  let calculateAge= function(){
        return 2024 - YearOfBirth;
    }
    this.age = calculateAge();

}
let krishna = new humanbeing("krishna",1994)
console.log(krishna.name);
console.log(krishna.age);//abstraction
console.log(krishna.calculateAge);
