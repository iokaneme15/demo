/*for (let i = 0; i < 10; i++) {
    console.log(i);
};

for (let i = 100; i > -100; i -= 10) {
    console.log(i);
};

const divBy2 = [];
for (let i = 0; i <= 100; i++) {
    if (i % 3 === 0 && i !== 0) continue;// Continue is better than break for making code more easy to read.
    
    if (i % 2 === 0 && i !== 0) divBy2.push(i);
    
    //if (divBy2.length >= 20) break;
}

console.log(divBy2.length);
*/
/*
const numberElements = Number(prompt('Enter a number between 1 and 10.'));

if (numberElements >= 1 && numberElements <= 10) {
    const list = document.getElementById("list");
    
    for (let i = 0; i < numberElements; i++) {
        const li = document.createElement("li") //creating an element 
        li.appendChild(document.createTextNode(i.toString())) //putting something inside the element. a text of string. type i converted to string.
        list.appendChild(li); //inserting the li tag inside the list with the text.
    }
} else {
    alert("Invalid Input")
}
*/

const str = prompt("Enter a string of characters: ");
const target = "!";

for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (char === target) {
        alert(`We found the ${target} in ${i + 1} characters`);
        break;
    } else {
        alert("We did not find the target character");
    }
}