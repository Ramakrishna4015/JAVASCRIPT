/*
let array = [];
console.log(array);
console.log(Array.prototype);
//


function person(name,role){
    this.name = name;
    this.role = role;
    this.printdetails = function(){
        console.log("details are "+this.name+ " "+this.role);
    }
    //below code takes more memory coz we call this fun for every obj
    // this.calculatesalary = function(){
    //     if(role ==="admin"){
    //         return 2000;
    //     }
    //     if(role ==="user"){
    //         return 1000;
    //     }
    //     
    // }
}
person.prototype.calculatesalary = function(){
    if(this.role ==="admin"){
        return 200;
    }
    if(this.role ==="user"){
        return 100;
    }
    console.log();
}
//we shouldnot use below code 
// Object.prototype.calculatesalary = function(){
//     if(this.role ==="admin"){
//         return 20;
//     }
//     if(this.role ==="user"){
//         return 10;
//     }
//     console.log();
// }
 let ram  = new person("ram","admin");
 console.log(ram);
 console.log(ram.role);
 ram.printdetails();
 console.log(ram.calculatesalary());//

 let rk  = new person("rk","user");
 console.log(rk);
 console.log(rk.role);
 rk.printdetails();
 console.log(rk.calculatesalary());//

 function Employee(name){

 }*/

 //PROTOTYPES FOR OBJECTS

 let obj1 = {
    name1: "name1",
    add1:"add1"
 }
 let obj2 = {
    name2: "name2",
    add2:"add2",
    print:function(){
        console.log("printing");
    }
 }
 Object.setPrototypeOf(obj1,obj2) //accessing obj2 proprties from obj1
 console.log(obj1.add2);
 console.log(obj1.print());// undefined coz we didnt retuen anythng from fun
 console.log(obj1); //check console .look intside the prototype
 console.log(obj1.__proto__);//obj prroto
 console.log(obj1.__proto__.__proto__);//main obj
 console.log(obj1.__proto__.__proto__.__proto__);//null
 