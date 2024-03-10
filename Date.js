let today = new Date();
console.log(today);

//check months starts from 0 like jan =>0
let today1 = new Date(2022,11,10,10,12,45);
console.log(today1);


///1 jan 1970
let milliseconds = new Date(5000000000);
console.log(milliseconds);

console.log(milliseconds.toDateString());
//METHODS
//getDay  0>sun,1>mon
console.log(today.getDay());
///etc