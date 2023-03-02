
// Execution of Programming Language is Simple as Known A Synchronous Coding(Programming)

function getMyname(name) {
    alert(`Hi, Mr. ${name} How are You`);
}

function inputUserName(callback) {
    const name = prompt("Enter Your Good Name");
    callback(name);
}

inputUserName(getMyname);