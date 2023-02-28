var list1 = [];
var list2 = [];
var list3 = [];
var list4 = [];
var list5 = [];
var list6 = [];


var buttonE = document.createElement("button");
buttonE.id='editbtn';
console.log(buttonE);

var buttonD = document.createElement("button");
buttonD.id='deletebtn';
console.log(buttonD);
  //document.querySelector("deletebtn").style.color="red";

let n = 1;
let x = 0;

function adde() {
  var AddRow = document.getElementById("show");
  var NewRow = AddRow.insertRow(n);

  // const deletB=document.getElementById("deletebtn")
  // deletB.style.color="red";

  list1[x] = document.getElementById("fname").value;
  list2[x] = document.getElementById("lname").value;
  list3[x] = document.getElementById("address").value;
  list4[x] = displayRadio();
  list5[x] = buttonE.value='Edit';
  list6[x]=  buttonD.innerText='Delete';


  


  // list4[x] = document.getElementById("address").value;
  // list5[x]=list5[x].appendChild(buttonE.innerHTML='Edit'
  // );


  // myDiv.appendChild(buttonE);



  var cel1 = NewRow.insertCell(0);
  var cel2 = NewRow.insertCell(1);
  var cel3 = NewRow.insertCell(2);
  var cel4 = NewRow.insertCell(3);
  var cel5 = NewRow.insertCell(4);
  var cel6 = NewRow.insertCell(5);
  

  cel1.innerHTML = list1[x];
  cel2.innerHTML = list2[x];
  cel3.innerHTML = list3[x];
  cel4.innerHTML = list4[x];
  cel5.innerHTML = list5[x];

  cel6.innerHTML = list6[x];




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

