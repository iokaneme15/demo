const country = prompt("What country do you live in? ");

if (country === "CA" || country === "Canada") {
    const age = prompt("Please enter your age.");
    if (age >= 18) {
       // alert("Continue");
       const color = prompt("Please enter favorite color");
       /*alert(color);
       if (color === "blue") {
        alert("that is also my favorite color");
       }*/
       const text = document.getElementById("color");
       text.innerHTML = color;
       text.style = "color: " + color;

    } else {
        alert("Thanks. We do not need any further info");
    }
} else {
    alert("Thanks. We do not need any further info");
}
