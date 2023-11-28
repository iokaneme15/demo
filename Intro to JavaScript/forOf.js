//const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
/*
const strs = ["one", "two", "three"];

for (let i = 0; i < strs.length; i++) {
    const str = strs[i];
}
// there a better way
//'Of' lets you loop through the elements of this array
const strs = ["one", "two", "three"];

for (const [i, str] of strs.entries()) //{ [[0, "one"], [1, "two"]]
    console.log(i, str);
}
*/

//const [str1, str2, str3] = strs;
//console.log(str1, str2, str3);

const str = "hello world";

//Can't use str.entries() on a string 
for (const char of str) {
    console.log(char);
}