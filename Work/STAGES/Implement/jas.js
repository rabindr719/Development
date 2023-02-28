
var list1=[];
var list2=[];
var list3=[];
var list4=[];
// var list5=[];
// var list6=[];
var n=1;
var x=0;

function adde(){

      
    var AddRow=document.getElementById('show');
    var NewRow=AddRow.insertRow(n);

    list1[x]=document.getElementById("fname").value;
    list2[x]=document.getElementById("lname").value;
    list3[x]=document.getElementById("address").value;
    list4[x]=document.getElementsByName("gender").values;
    // list5[x]=document.getElementByName("").value;
    //list6[x]=document.getElementById("btn").value;

 

    var cel1=NewRow.insertCell(0);
    var cel2=NewRow.insertCell(1);
    var cel3=NewRow.insertCell(2);
    var cel4=NewRow.insertCell(3);
   

    cel1.innerHTML=list1[x];
    cel2.innerHTML=list2[x];
    cel3.innerHTML=list3[x];
    cel4.innerHTML.list4[x];
    
    
    // cel5.innerHTML=list5[x];
    // cel6.innerHTML=list6[x];

    n++;
    x++;


}

document.addEventListener('DOMContentLoaded',function(e){
    console.log('HTML parsed and DOM Tree is Build', e);
});
function displayRadio()
    {
            var ele = document.getElementsByName('gender');
            for(var i = 0; i <= ele.length; i++) {
                if(ele[i].checked){
                    document.getElementById('show').innerHTML = ele[i].value;
                }
               
               
                
    }
}

