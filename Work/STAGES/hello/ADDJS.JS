
// function myfun() {
//     let str = "";
//     const uname = document.getElementById('name').value;
//     const pass = document.getElementById('Password').value;
//     const add = document.getElementById('add').value;

//     //For Print the Value

//     str = "Name :  " + uname + "<br>" + "Password : " + pass + "<br>" + "Address : " + add;
//     document.getElementById('demo').innerHTML = str;
// }

var count=0;
btx.addEventListener('click', function(){
   
        let str = "";
        const uname = document.getElementById('name').value;
        const pass = document.getElementById('Password').value;
        const add = document.getElementById('add').value;
    
        //For Print the Value
        str = "Name :  " + uname + "<br>" + "Password : " + pass + "<br>" + "Address : " + add;
        count++;
        document.getElementById('demo').innerHTML = str;
        // str.innerHTML=count;
    }
   );

   let user={
                 uname:uname,
                 pass: pass,
                 add:add
   }

//     var count = 0;
//     var btn = document.getElementById("btn");
//     var disp = document.getElementById("display");
      
//     btn.onclick = function () {
//         count++;
//         disp.innerHTML = count;
//     }
// })

document.getElementById('edit').addEventListener('click', function() {
    let uname = document.getElementById('name').value = uname;
    let pass = document.getElementById('Password').value = pass;
    let add = document.getElementById('add').value = add;
});