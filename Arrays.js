let arr = [1,2,3]
console.log(arr);
arr.push(10) //push adds the elemnent at end of the array
console.log(arr);
arr.pop() //pop removes the elemnet from the end of the array
console.log(arr);
let arr1 = new Array(3)
console.log(arr1);
arr1[0] = 10;
arr1[1] = 10;
arr1[2] = 10;
console.log(arr1);
let arr2 = [2,3,4,5];
console.log(arr2);
arr2.unshift(1);//unshift method adds the data at the start
console.log(arr2);
arr2.shift();// removes data from the starting index
console.log(arr2); 
///slicling& splicing
let arr3 = [2,3,4,5,6,7]
let slicedarr3 = arr3.slice(1,5)
console.log(slicedarr3);//only changes happned to slicded array not to the origiinal array
console.log(arr3);
///splicing
let arr4 = [2,3,4,5,6,7]
arr4.splice(3,2);
console.log(arr4);
//splicing for adding elelmemts
let arr5 = [5,8,11]
arr5.splice(2,0,9,10)
arr5.splice(1,0,6,7)
arr5.splice(0,0,1,2,3,4)
arr5.splice(11,0,12)
console.log(arr5);
/////loop methods -------->map
let arr6=[1,3,5]
let newArr = arr6.map(function(el){
    return el*2;
})
console.log(newArr);
console.log(arr6);
///////////ARRAYS///////
////MAP METHOD//
let arr7 = [1,3,5,7]
let newarr7 = arr7.map(function(elemnent,index){
    return elemnent*index;
})
console.log(newarr7);
/////////////filetr////
let arr8 = [2011,2222,2051,2365,1991,1854]
let filteredArray = arr8.filter(function(el){
    // console.log(el);
    return el>2010
})
// let filteredArray = arr8.map(function(el){
//     // console.log(e++66669l);
//     return el>2010
// })
console.log(filteredArray);
console.log(arr8);
////FIND//////////////// returns the first element which satisfies the condition wont return array
let age = [15,17,23,51,45]
let qualified = age.find(function(el){
    return el>18
})
console.log(qualified);


////SPREAD OPERATOR////
let array1 = [12,23,45,56,78]
let array2 = [21,32,54,65,98]
let array3 = array1.concat(array2);//here we created a new array to store output
console.log(array3);
//i want array2 to be merged with array1 means op should be stored in array2
let array11 = [12,23,45,56,78]
let array21= [21,32,54,65,98]
// for(let i=0;i<=array11.length-1;i++){
//     array21.push(array11[i]);
// }
// console.log(array21);
////USING SPREAD OPERATOR for arrays
console.log(...array21);
array21 = [...array21,...array11]
console.log(array21);


///PRINT EVEN NUMBERS NO FROM 2 TO 16 IN AN ARRAY
let ar = [4,6,8,10,12]
let even = [2,...ar,14,16]
console.log(even);

//spread operator on objects
let man1 = {
    name : 'akhil',
    age: 22,
    place :'hyderabad',
}
let man2 ={
    name2: 'rk',
    age2 : 23,
    place2: 'karimmagar',
}
console.log(man1.age);
console.log({...man1});
let man = {...man1, ...man2}
console.log(man);