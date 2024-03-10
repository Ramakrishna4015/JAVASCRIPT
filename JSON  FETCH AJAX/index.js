//JSON>javascript object notation> to tranfer data

let person1 = {
    name:"rk",
    age:29,
    color:"brown"
}


//for converting object into the JSON
//console.log(JSO  N.stringify(person1));
let jsonConverted = JSON.stringify(person1);
console.log(jsonConverted);


//to convert JSON into a JS OBJECT we use JSON.parse

let parsedObject = JSON.parse(jsonConverted);
console.log(parsedObject);


//JSON suppoeted types
// strings 
// numbers
// objects 
// arrays 
// booleans 
// null 



/////Asynchronus code
///is a code which runs after the main thread/global context


////Ajax ode
// Asynchronous javascript and xml
//fetch api
//getting data from server using fetch
fetch('https://jsonplaceholder.typicode.com/posts')
.then((res)=>{
    return res.json();//returns promise///response object
    //console.log(res);
})
.then((data)=>{     ///
    console.log(data);
})
.catch(()=>{

})
function test(){
    return'rk';
}
console.log(fetch('https://jsonplaceholder.typicode.com/posts'))
console.log(test());
