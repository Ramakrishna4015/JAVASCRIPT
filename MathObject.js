console.log(Math.PI);
console.log(Math.SQRT2);
//round checks for 0.5
console.log(Math.round(4.5));
console.log(Math.round(4.7));
console.log(Math.round(4.1));
//floor goes below
console.log(Math.floor(4.8));
console.log(Math.floor(4.1));
console.log(Math.floor(4));
//ceil
console.log(Math.ceil(4.5));
console.log(Math.ceil(3/4));
console.log(Math.ceil(4));
//random randomly genrates numbers btw 0 and 1
// console.log(Math.random()*1000000);
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());
console.log(Math.random()*10); //0 to 10
console.log(Math.random()*10);
console.log(Math.random()*10);

console.log(Math.random()*10+50);
//TRUNC  gives the integer part
console.log(Math.trunc(10.9));
//MIN & MAX
console.log(Math.min(1,5,8,7,9));
console.log(Math.max(1,5,8,7,9));
//POWER
console.log(Math.pow(4,2));
///find max element in an array
let arr = [25,56,35,12]
console.log(Math.max(...arr));