function Outer(oneFunction){
    let a = 10;
    let b = 20;
    console.log(a+b);
    oneFunction();
}
// Outer();
function smaller(){
    console.log("iam smaller function");
}
Outer(smaller);