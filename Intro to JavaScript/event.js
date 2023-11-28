/*
function enterUsername () {
    const username = document.getElementById("username").value;
    alert("You entered " + username);
}
*/

function enterUsername () {
    const username = document.getElementById("username").value;
    document.getElementById("text").innerHTML = username;
}
