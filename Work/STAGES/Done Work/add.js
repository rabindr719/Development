var list1 = [];
var list2 = [];
var list3 = [];
var list4 = [];
var list5 = [];
// var list6 = [];

// var buttonE = document.createElement('BUTTON');
// buttonE.id='editbtn';

// var editBt=buttonE.innerHTML='Edit';
//console.log(buttonE.innerHTML='Edit');

// var editb =document.createElement("button");
// // editb.id="edit";

// editb.innerHTML = "Do Something";

// 2. Append somewhere
// var body = document.getElementsByTagName("body")[0];
//body.appendChild(editb);


// // creating text to be
// //displayed on button
// var text = document.createTextNode("Edit");
 
// // appending text to button
// let xf=buttonE.appendChild(text);
 
// // appending button to div
// // myDiv.appendChild(buttonE);

// function editBtn()
// {
//   for(let i=0; i<=adde().length; i++)
//   {
//     document.getElementById().value;
//   }
// }



let n = 1;
let x = 0;

function adde() {
  var AddRow = document.getElementById("show");
  var NewRow = AddRow.insertRow(n);

  var editb =document.createElement("button");
// editb.id="edit";

editb.innerHTML = "Edit";

// 2. Append somewhere
var tr = document.getElementsByTagName("tr")[0];
tr.append(editb);

  

  list1[x] = document.getElementById("fname").value;
  list2[x] = document.getElementById("lname").value;
  list3[x] = document.getElementById("address").value;
  list4[x] = displayRadio();
  list5[x] = list5[x].append(editb).value;
  // list4[x] = document.getElementById("address").value;
  // list5[x]=list5[x].appendChild(buttonE.innerHTML='Edit'
  // );


  // myDiv.appendChild(buttonE);



  var cel1 = NewRow.insertCell(0);
  var cel2 = NewRow.insertCell(1);
  var cel3 = NewRow.insertCell(2);
  var cel4 = NewRow.insertCell(3);
  var cel5 = NewRow.insertCell(4);
  

  cel1.innerHTML = list1[x];
  cel2.innerHTML = list2[x];
  cel3.innerHTML = list3[x];
  cel4.innerHTML = list4[x];
  cel5.innerHTML = list5[x];




  console.log(x);
  n++;
  x++;
}
function displayRadio() {
  var ele = document.getElementsByName("gender");
  for (var i = 0; i <= ele.length; i++) {
    if (ele[i].checked) {
      return (document.getElementById("gender").innerHTML = ele[i].value);
    }
  }
}

