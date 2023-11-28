const age = prompt("Enter your Age: ");//when you get a value from a prompt it is a string type value. unless you convert to a number


if (age > 12 && age <= 20) {
    alert("you can ride the rollercoaster");
}else if (age >= 40) {
    alert("gotta ride with a youngin")
}else {
    alert("you can't ride the rollercoaster")
}