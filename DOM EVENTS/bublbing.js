
///bubblng examples
function mostouter(){
    console.log("mostouter");
}
function outer(){
    console.log("outer");
}
function inner(){
    //e.stopPropagation();//to stop propagating
    console.log("inner");
}
//





// document.getElementById('mostouter').addEventListener('click', mostouter)
// document.getElementById('outer').addEventListener('click', outer)
// document.getElementById('inner').addEventListener('click', inner)


// event propogation

// 1. capturing phase  ---> statrts from the top most el or object window then goes all the way to the inner most el
// 2. target phase --7> event goes to the target
// 3. buubling --> inner to outer
document.getElementById('mostouter').addEventListener('click', mostouter)//by default false hote hai
document.getElementById('outer').addEventListener('click', outer)
document.getElementById('inner').addEventListener('click', inner,true) //true= will go into capturing phase