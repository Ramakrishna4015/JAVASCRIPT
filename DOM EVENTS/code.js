

/*let outer = document.querySelector('.outer-container');
console.log(outer.parentElement); //gives body
console.log(outer.childNodes);
//selecting container
//let container = outer.children;
console.log(outer.children[0].children);//accessing both children (html collection)
console.log(outer.children[0].children[0]);//accesiing one children

//firstEleemnet
console.log(outer.firstElementChild);//gives first child
console.log(outer.firstElementChild.firstElementChild); //gives first child from first vhild
console.log(outer.lastElementChild); //gives last element child*/

/////////////////////////////////////////////
//////////EVENTS//////
//1)click
//2) mouseover
//3)key down/up
//4)scroll
//5)double click....etc

let Addbutton = document.getElementById('add')
let Subbutton  = document.getElementById('substract')
// Addbutton.style.background = 'brown';
// Addbutton.innerText = "RK";
// Addbutton.innerHTML='<b>RK</b>';
console.log(Addbutton);
console.log(Subbutton);
///select button
//Addbutton.addEventListener('click');

//selecting and adding some action t0 the clicling action
Addbutton.addEventListener('click',()=>{
    console.log("button clicked");
})
///or adding some functon to button clicking
function handler(){
    console.log("function called");
}
Subbutton = addEventListener('click',handler);

//
Addbutton = addEventListener('mo', () => {
    console.log("mouse moving on button");
})
//
//mousecenter i same as mouse over
//mouseleave is same as mouse out





////

