///line 33 html
function AddToCart(){
    console.log("item added to card");
}
function hovering(){
    console.log("item hovered");
}

/////
let enteredName;
function nameChange(e){ 
    //hovering() //addnig mutlifuncton
    //e.target >gives the element where the event is occurung
    //e.target.value>gives the changed content
    console.log(e);
    console.log(e.target.value);
    enteredName = e.target.value;
    console.log("changing the name");
}
//store e.target.value in a varibale,then add it to the print buttin by adding to the div 
//printing the entered conetnt by clicking the print button
function printName(){
    document.getElementById('NameContainer').innerText=enteredName;
} 

//
// calculator
// +-*/
// 4buttons
// nos should be entered by user>input tags--2
// result