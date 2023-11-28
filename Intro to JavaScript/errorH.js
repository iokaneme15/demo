//In JS we can throw and catch our own errors
/*
const x = 2;

try {
    console.log("try");
    x.toUpperCase();
    console.log("success");
} catch {
    console.log("recovery");
}


const x = 2;

try {
    console.log("try");
    x.toUpperCase();
    console.log("success");
} catch(err) {
    console.log(err.message, err.name);
}
*/

/*
const x = 2;

try {
    console.log("try");
    //x.toUpperCase();
    console.log("success");
} catch(err) {
    console.log(err.message, err.name);
} finally { //runs no matter what
    console.log("finally");
}


const x = 2;

try {
    console.log("try");
    throw "this is an error";
} catch(err) {
    console.log(err);
} finally { //runs no matter what
    console.log("finally");
}
*/
/*
const x = 2;

try {
    console.log("try");
    throw {name: "error"};//treats this like an error
} catch(err) {
    console.log(err.name);
} finally { //runs no matter what
    console.log("finally");
}
*/

const x = 2;

try {
    console.log("try");
    throw Error("this is an error");//can use a string, number, object, etc.
} catch(err) {
    console.log(err.message, err.name);
} finally { //runs no matter what
    console.log("finally");
}