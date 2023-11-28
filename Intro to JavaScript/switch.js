const color = prompt("Enter your fav color: ");
//switch is when you want to match certain conditions.
//when you have a bunch of different values that you're checking for a specific value
switch(color) { 
    case "red":
        alert("red is pretty cool");
        break;

    case "blue":
        alert("blue is ugly");
        break;
    case "orange":
        alert("orange is my fav");
        break;
    default:
        alert("i dont know that color");
        break;
}
//break keywords are necessary to prevent 'fall-throughs'

const age = Number(prompt("Enter your age: "));
//switch is when you want to match certain conditions.
//when you have a bunch of different values that you're checking for a specific value
switch(age) { 
    case 10:
        alert("you are 10");
        break;

    case 20:
        alert("you are 20");
        break;
    case 30:
        alert("you are old");
        break;
}