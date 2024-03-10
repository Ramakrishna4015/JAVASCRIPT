//FUNCTION DECLARATIONS 1-16
function greet(){
    console.log("rk");
}
greet();

function arg(x){
    console.log(x + "is a good person");
}
arg("rk")


function rtn(a,b){
    return a+b;
}
console.log(rtn(2,3));

//FUNCTION EXPRESSION 19-22
let wish = function (){
    console.log("hello");
}
wish();

//ARROW FUNCTOINS
let wish2 = ()=>{
    console.log("world");
}
wish2();

//CALLBACK FUNCTIONS

function process(callback){
    //code
    console.log("process");
    callback();
}
function greet2(){
    console.log("hello");
}
process(greet2);