//"" ''
//"\'"

//console.log("hello\n\tWorld");
//console.log("\\");

//const str = `hello ${7 > 5} world`;
//console.log(str);
/*
const name1 = "Ifeatu";
const str = `hello ${name1} world`;
const str2 = "hello " + name1 + " world";
console.log(str, str2);
*/

const name1 = "Ifeatu";
const str = `hello ${name1} world`;
str[0] = "a"; //strings are immutable. they can't be changed but can be accessed.

console.log(str);
