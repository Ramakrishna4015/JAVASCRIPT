// javascvript is single threaeded and syncronous

///to do multiple things at a time we need asynchronous approach


//setTimeout
//is a func which is used to ececute the code after sometime
/*console.log("start");
setTimeout( ()=>{
    console.log("set time out");
},3000);
////


setTimeout( function(){
    console.log("func is here");
} ,5000)

///
function print(){
    console.log("another method");
}
setTimeout(print,4000)
*/
///
console.log("start");
function printone(){
    console.log('1');
}
function printwo(){
    console.log('2');
}
function printthree(){
    console.log('3');
}
setTimeout(printone,1000);
setTimeout(printwo,2000)
setTimeout(printthree,3000)

function test(){
    console.log("test");
    setTimeout(()=>{
        console.log("4");
    },0)
}
test()
console.log("end");
///

// one fun many settimeouts 
function print(x){
    console.log(x);
}
//settimeout arguments
//1.call back fun
//2.timer
//3.arguments to the call back func
setTimeout(print,1000,5)
setTimeout(print,2000,4)
///or//
for(let i=1;i<5;i++){
    setTimeout(print,i*1000,i)
}
//OR
for(let i=1;i<5;i++){
    setTimeout((x)=>{
        console.log(x);
    },i*1000,i)
}


////SET INTERVAL
setInterval(() => {
    console.log("1");
    
}, 1000);