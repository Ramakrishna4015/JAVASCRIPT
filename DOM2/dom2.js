let listItems = document.getElementsByClassName("product");
console.log(listItems);
// for(let i =0;i<listItems.length;i++){
//     //listItems[i].innerText = 'prodcut'+ " "+(i+1);
   
// } 
listItems[0].innerText = "apple";
listItems[1].innerText = "mango";
listItems[2].innerText = "banana";
listItems[3].innerText = "guva";




//craete node

let div = document.querySelector('div.card.content')
//adding paragarph
let footer = document.createTextNode('copyright')
div.appendChild(footer);//adding,, look code after this 

// creating Element
let footer1 = document.createElement('p');
footer1.innerText='copyright';
footer1.className = "className"; //adding class name//check code
footer1.id = "cardid"  //adding id
footer1.style.background = 'red'; //adding stle
div.appendChild(footer1);


////table

// let theadRow = document.createElement('tr');
// let theadhead = document.createElement('th');
// theadhead.innerText = "serialno";
// theadRow.appendChild(theadhead);
// // <tr>
// // <thead>
// //td>serialno</td>
// // </thead>
// // </tr>
// let theader = document.querySelector('.tableheader');
// theadRow.appendChild(theader);
/////
let mytable = document.createElement('table')
let thead = document.createElement('thead')
thead.className  = "table-header";
thead.innerText = "serialno";
let tbody = document.createElement('tbody');
console.log(mytable);
mytable.appendChild(thead);
mytable.appendChild(tbody)


let body =document.body
console.log(body);





//////table using funs
function createTd (data){
    let td = document.createElement('td')
    td.innerText = data;
    return td;
}

function createTr(d1,d2,d3,d4){
    let tr = document.createElement('tr')
    tr.appendChild(createTd(d1));
    tr.appendChild(createTd(d2));
    tr.appendChild(createTd(d3));
    tr.appendChild(createTd(d4));
    return tr;
}
tbody.appendChild(tr)