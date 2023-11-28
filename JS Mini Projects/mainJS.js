function generatePass() {
    const lengthInput = document.getElementById('passGen');
    const passwordOutput = document.getElementById('generatedPass');

    const length = parseInt(lengthInput.value, 10);

    if(isNaN(length) || length <= 0) {
        alert("Please enter a valid password length.");
        return;
    }

    const password = generateRandPass(length);
    passwordOutput.value = password;
}

function generateRandPass(length) {
    const allChars = upperCase + lowerCase + numbers + specialChars;
    let password = '';

    for(let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allChars.length);
        password += allChars[randomIndex];
    }

    return password;
}

const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
const numbers = '0123456789';
const specialChars = '!@#$%^&*()_+=;:,.[]{}|~`<>?';

const password = generateRandPass(document.getElementById("passGen"));
console.log(password);

//const passwordLength = prompt('Enter the length of the password:');
//const password = generateRandPass(parseInt(passwordLength, 10));
//console.log(password);
