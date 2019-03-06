/*  
Var vs. Let:

Remember how, since ES6, we now have three keywords for variables: var, let, and const?

Const is pretty straight forward; it is a constant that cannot be re-expressed.

Var and let seem to operate the same, right? So why do we insist on using let excusively? Well, check out the below:

NOTE:  We have not seen functions before, we will go in depth tomorrow. WATCH, DONT CODE!
*/

let x =12; 

function letTest() {
    let x = 33; 
    if(true){
        let x =45; 
        console.log(x);
    }
    console.log(x)
}
letTest(); 
console.log(x);


/* What is a variable? Variables are named containers for storing data values. 
 We name the variables so that we can refer to this data again.
*/
 let a = 2;



/* 
Booleans
******************
What is a boolean? Boolean can represent: true/false, yes/no, on/off
*/ 

/* 
Null
******************
Null = empty value (not 0; not undefined)
It is like an empty container; nothing is in it, but it still exists as a space to fill
Click to expand inline (10 lines)
Undefined 

/*
Undefined
******************
Undefined = no value assigned (not even an empty container)
​
Click to expand inline (14 lines)
Null Vs. Undefined 

/*
Null vs. Undefined 
******************
Null is like a container with nothing in it
Undefined is when a variable has never been set, or hasnt been created yet. 
Click to expand inline (7 lines)

Autumn [3:02 PM]
Numbers 

/* 
Numbers
**********
Numbers are exactly what they sounds like, numbers. In JS, you dont need anything special to write them. 
*/


/*
Objects
*************
​
*/


/*
Strings
*********
Strings are Datatypes used to represent text and are wrapped in either a single or double quote
Strings are Primative Datatype. This also includes Numbers, Booleans, Null, Undefined and others 
Click to expand inline (25 lines)

Arrays 

/*
Arrays
************
Arrays are containers that hold lists of items
*/


/* 
Var vs. Let:
​
Remember how, since ES6, we now have three keywords for variables: var, let, and const?
​
Const is pretty straight forward; it is a constant that cannot be re-expressed.
​
Var and let seem to operate the same, right? So why do we insist on using let excusively? Well, check out the below:
​
NOTE: We have not seen functions before, we will go in depth tomorrow. WATCH, DONT CODE!
*/

/* SCOPE */
var x = 12; 

function varTest() {
    var x = 3;
    if(1 == 1){
        var x = 45;
        console.log(x);
    }
    console.log(x);
}

varTest();
console.log(x);



var x =12; 

function letTest() {
    var x = 33; 
    if(true){
        let x =45; 
        console.log(x);
    }
    console.log(x)
}
letTest(); 
console.log(x);



function constTest() {
    const scope = 1;
    if (true) {
      const scope = 2;
      console.log(scope); // 2
    }
    console.log(scope); // 1
  }
  
  constTest();