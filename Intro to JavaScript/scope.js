//Scope is defined where you define an object or functi on
/*
let x = 2;
function accessX(){
    x = 4;
}
accessX();
console.log(x)
*/

/*
function accessX(){
   let x = 4;
   //if (true){
  //  console.log(x);//this is defined only within the function
   //}
    function test(){
        console.log(X);
    }

    test();
}

accessX();

console.log(x); //X here is looking at the global scope NOT the local scope

//Let vs Var
function test(x) {
    if (x === 3) {
        let val = 5;// here 'let val' is only defined within this IF statement. Anything outside that scope that access it
    } else if (x === 4) {
        let val = 6;  
    } else {
        let val = 0;
    }
}
test(3); //with let it is only accessible in its current block meaning this code will get an error


function test(x) {
    if (x === 3) {
        var val = 5;//with VAR this code will execute because the scope when using VAR is the most outer function where defined
    } else if (x === 4) {
        var val = 6;  
    } else {
        var val = 0;
    }
    console.log(val);
}
test(3);//LET is in the current block; while VAR is in the current function.
*/
/*
//Better Illustration of this
function test(x) {
    function test2(){
        if (x === 3) {
            var val = 5;
        } else if (x === 4) {
            var val = 6;  
        } else {
            var val = 0;
        }
    }
    test2();
    console.log(val);
}

test(3);
//Initial you'll get an error because val is defined in the test2 function but not the test function


//Const in this example would work the same as LET
function test(x) {
    if (x === 3) {
        const val = 5;
    } else if (x === 4) {
        const val = 6;  
    } else {
        const val = 0;
    }
    console.log(val);
}
test(3);
*/

//Looking for the variables that is closest in the current scope
const x = 5;

function test(x) {//within the x as the parameter we default to getting the else value
    if (x === 3) {
        console.log("one")
    } else if (x === 4) {
        console.log("two")  
    } else {
        console.log("three")
    }
    
}
test(3);