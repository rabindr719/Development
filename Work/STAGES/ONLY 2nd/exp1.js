var list1 = [];
var list2 = [];

let n = 1;
let x = 0;
function adde() {
  var AddRow = document.getElementById("show");000
  var NewRow = AddRow.insertRow(n);

  list1[x] = document.getElementById("fname").value;
  list2[x] =  myButtonEdit();




  var cel1 = NewRow.insertCell(0);
  var cel2 = NewRow.insertCell(1);
  cel1.innerHTML = list1[x];
  cel2.innerHTML = list2[x];
  n++;
  x++;}

  function myButtonEdit()
  {
    var btn = document.createElement('button');
    btn.innerText = 'this button';
    document.getElementById('container').appendChild(btn);
    document.getElementById('markup').innerText = btn.outerHTML;
  }
