//regular way
function test(){
    console.log("test");
}
var test1 = function(){
    console.log("test1");
}

//arrow funs
var test2 =()=>{
    console.log("test2");
}
//ex
var tenmulti = function(a){
    return 10*a;
}
console.log(tenmulti(10));
//
var twentymult = (a)=>{
    return 20*a;

}
console.log(twentymult(10));
/// short form
var thirteenmult =(a)=>30*a;
console.log(thirteenmult(10));