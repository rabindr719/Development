function myfun() {
    let str = "";
    const uname = document.getElementById('name').value;
    const pass = document.getElementById('Password').value;
    const add = document.getElementById('add').value;
    str = "Name :  " + uname + "<br>" + "Password : " + pass + "<br>" + "Address : " + add;
    document.getElementById('demo').innerHTML = str;
}

document.getElementById('edit').addEventListener('click', function() {
   
    document.getElementById('demo').innerHTML = "";
    document.getElementById('edit').style.display = 'none';
    document.getElementById('opt').style.display = 'none';
    let uname = document.getElementById('name').value = uname;
    let pass = document.getElementById('Password').value = pass;
    let add = document.getElementById('add').value = add;
})