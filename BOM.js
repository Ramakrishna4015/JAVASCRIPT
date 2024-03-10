//browser object model
//window object
console.log(window);
// whatever we create in the global context will be attached to the window object
 
var a =10; //attaches to the window object
console.log(a);
console.log(window.a);

let b =10;
console.log(b);
console.log(window.b);
//let ,const will not attach to the window object

function test(){
    console.log("text");
}
test();
window.test();


///USES////
console.log(window.innerHeight);
console.log(window.outerHeight);
console.log(window.innerWidth);
console.log(window.outerWidth);
//
//window.open("https://www.bing.com/?FORM=Z9FD1","bing","height=500,width = 100");
//window.close();

console.log(window.location);
console.log(window.location.href);

//
//window.location.assign("https://www.bing.com/?FORM=Z9FD1")
//window.history.back();
//window.history.forward();
//bom navigator
console.log(window.navigator);
console.log(window.screen);