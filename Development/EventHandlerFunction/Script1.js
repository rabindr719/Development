// var btn=document.getElementById("mybtn");
// btn.addEventListener("click", showEvent);

// function showEvent()
// {
//     alert("VALUE IS SUBMITTED");
// }
var btn=document.getElementsByClassName('mybtn');
for(var i=0; i<btn.length;i++)
{
    btn[i].addEventListener('click', showEvent());
    function showEvent()
    {
        alert("VALUE IS SUBMITTED");
    }
}