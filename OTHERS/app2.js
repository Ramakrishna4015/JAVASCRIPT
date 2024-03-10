// function outer(){

//     var outervar = "outer"

//     function innner(){
//         var innervar = "inner"
//         console.log(outervar);
//     }
//     innner()
// }
// outer()

// // var x;
// // function greet(){
// // console.log(x);
// // }
// // greet()
// console.log(x); // ReferenceError: Cannot access 'x' before initialization
// let x = 10;
// console.log(x);


// Function declaration
// function greet(name) {
//     return 'Hello, ' + name + '!';
// }
// console.log(greet("rk"));

// // Function expression
// const greetExpression = function(name) {
//     return 'Hello, ' + name + '!';
// };
// console.log(greetExpression("krishna"));

// // Arrow function
// const greetArrow = (name) => {
//     return 'Hello, ' + name + '!';
// };
// console.log(greetArrow("ramu"));





// let y=function (name){
//     var x="rk"
//     console.log(x +name);
// }
//  console.log(y("krsihna"));



// let x= function(a,b){
//     console.log("test" +(a+b));
// };
// x(1,2);

// const double = (num)=>{
//     for(let i=0;i<5;i++){
//     console.log(i + "=" +num*2);
//     }
// };
// double(2)


// function greet(name,fun){
//     console.log(name);
//     fun(name)
    
// }
// // greet("rk")
// function shout(name){
//     console.log(name.toUpperCase()+"!!!");
// }
// greet("rk",shout)

// const fruits = ["mango","banana","apple"]
// console.log(fruits[1]);
// console.log(fruits.toString());
// console.log(fruits);
// console.log(typeof(fruits));
// console.log(fruits.length);
// for(let i=0;i<fruits.length;i++){
//     console.log([i]+"="+fruits[i]);
// }
// fruits.push("tamato")
// console.log(fruits);

// for(let i=0;i<fruits.length;i++){
//     console.log(fruits[i]+"<br>"); 
// }
// console.log(fruits.unshift("rk"));
// console.log(fruits);
// console.log(fruits.shift());
// console.log(fruits);

// const arr1 = [1,2,3]
// const arr2 = [4,5,6]
// console.log(arr1,arr2)

// let arr4 = [2,3,4,5,6,7]
// // let arr5=arr4.slice(1,3);
// // console.log(arr5);
// console.log(arr4.includes(8));
// let arr5 = [2,5,9,7,4,3]
// console.log(arr5.sort());


// const color = ["blue","green","yellow","red"]
// color.forEach((color)=>{
//     console.log(color);
// })


// const numbers = [2,5,9,4,3]
// const sqNumb = numbers.map(function name(numbers){
//     return numbers*2;
// })
// console.log(sqNumb);



// const numb = [2,5,7,6,9]
// const even = numb.filter((numb)=> numb%2===0)
// console.log(even);


// const n = [25,56,8,7,60]
// const great = n.filter((n)=> n>10)
// console.log(great);

// const m=[5,6,8,6,2]
// const sum = m.reduce((total,m)=> total+m)
// console.log(sum);


// let arr1 = [1,2,3]
// let arr2 = [4,5,6]

// console.log([...arr1,...arr2]);

// const values = {
//     name:"rk",
//     age:30,
//     color:"brown",
//     greet(){
//         console.log("hello");
//     }

// }
// values.greet()
// console.log(values.name);
// function human(name,age,color){
//     this.name = "rk";
//     this.age = 30;
//     this.color= color;
//     this.isperson = true;
//     this.details = "details"; //we can have new properties here
//     this.printage = function(){ // can craete fun also
//         console.log(age);
//     }
// }
// const person = new human()
// console.log(human.prototype);

// let person = new human("rk",30,"brown")
// console.log(person);
// console.log(person.age);
// person.printage();

// function human(name,age,location){
//         this.name=name;
//         this.age=age;
//         this.location = location;
//         this.nationality = "bharat";

// }
// const person = new human("rk")
// console.log(human.prototype);
// console.log(human.prototype.person);

// const rk = new person("rk",30,"hyd");
// const krk = new person("krk",29,"mdk")

// // rk.nationality  = "bharat";
// //    rk.color = function(){
// //    // return "brown";
// //     console.log("brown");
// // }

// person.prototype.greet = function(){
//     console.log("hello");
// }

// console.log(rk.location);
// console.log(rk.nationality);
// // console.log(rk,color);
// // rk.color()
// krk.greet()





// let a  = 10;
// let c = a; //c value is stored as 10 but not as a ,in this line  
// console.log(a);
// console.log(c);
// a=100;
// console.log(a);
// console.log(c);
// function sqr(x){
//     x= x*x;
//     console.log(x);
// }
// let x=5;
// sqr(x)
// console.log(x);
//console.log(sqr(5));

// console.log(window.location);
// // window.open("https://www.w3schools.com/js/js_window.asp")
// //window.close()
// window.history.forward()
// console.log(window.screen.pixelDepth);
// console.log(window.navigator.product);
// console.log(window.confirm("yes"));
// console.log(window.prompt("yes","no"));

// console.log(document.links);
// let paragraph = document.getElementById("para");
// paragraph.innerHTML='<h1>rk</h1>';
// let heading = document.getElementsByTagName('h1');
// //console.log(heading);
// heading.setAttribute("class","head")


// let para = document.createElement('p');
// var body = document.querySelector('body')
// body.append(para)
// para.setAttribute('id','parag')
// para.setAttribute('class','grah')
// para.innerText = "hrllo"

// const button = document.getElementById('myButton')
// button.addEventListener("click","hello")

// const button = document.createElement("button")
// var body = document.querySelector('body')
// body.append(button)
// button.setAttribute('id','myButton')
// button.addEventListener('click',()=>{
//     alert("button clicked")
// })

// button.addEventListener('dblclick',()=>{
//     document.body.button.style.backgroundColor = 'red';
// });


// let divtag = document.getElementById("div")
// divtag.addEventListener("click",event=>{
    
//     console.log("callin event of parent");
// },false)
// let mybutton = document.getElementById("btn")
// mybutton.addEventListener("click",event=>{
//     //event.stopPropagation();
//     console.log("calling event oif child");
// })
// let str = new String("string methods")
// console.log(str[5]);


// let str1 = "hello rk";
// let str2 = str1.slice(2,5)
// console.log(str2);
// let str4 = str1.substring(-1,5);
// console.log(str4);

// const hi =setInterval(() => {
//     console.log("1");
    
// }, 1000);
// setTimeout(()=>{
//     clearInterval(hi)
//     console.log("stopped");
// },5000)'
// function fetchData(callback){
//     setTimeout(()=>{
//         const data = {name:"rk",age:30};
//         const error = null;
//         callback(error,data)
//     },3000)
// }
// function handleData(err,result){
//     if(err){
//         console.error("error",err);
//     }
//     else{
//         console.log("data",result);
//     }
// }
// console.log("start");
// fetchData(handleData);
// console.log("end");


// var promise = new Promise(function(resolve,reject){
// const x= "newton";
// const y = "newton";
// if(x==y){
//     resolve()
// }
// else{
//     reject()
// }
// });
// promise.
// then(function(){console.log("m as newton");})
// catch(function(){console.log("m not as newton");})


// function bakeCookies(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             if(Math.random()>0.5){
//                 const cookies=['','','']
//                 resolve(cookies);
//             }
//             else{
//                 reject(new Error("burned cookies"))
//             }
//         },2000)
//     })
// }
// bakeCookies()
// .then(cookies=>{
//     console.log("cookies baked");
// })
// .catch(error=>{
//     console.log("error");
// })



// const myPromise = ()=>{
//     return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         const randomNUmber = Math.random();
//         if(randomNUmber>0.5){
//             resolve(randomNUmber);
//         }
//         else{
//             reject(new Error("random numner i tto low"))
//         }
//     },2000)
// })
// }
// myPromise.then((randomNUmber)=>{
//     console.log("succes",randomNUmber);
// })
// .catch((error)=>{
//     console.log("error",error);
// })
const jsonData = '{ "name": "Bob", "age": 25 }';

// Parse JSON string into a JavaScript object
const jsonObject = JSON.parse(jsonData);

console.log(jsonObject.name); // Output: "Bob"

// Convert a JavaScript object back to a JSON string
const newJsonString = JSON.stringify(jsonObject);

console.log(newJsonString); // Output: '{"name":"Bob","age":25}'

