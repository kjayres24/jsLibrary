/* What is a variable?  Variables are named containers for storing data values. 
  We name the variables so that we can refer to this data again.
*/
let a = 2;
let     b      =      1; 
/*(1)    (2)    (3)    (4)     
1- Keyword
2- Variable name 
3- Assignment Operator
4- Variable value
*/

/*********************************
 Declarations
**********************************/
/*
Declarations are the LEFT SIDE of a variable
It is simply the var x
It is on the left side of the assignment operator (=)

Initializations are the RIGHT SIDE of a variable
It sets the value of the variable
It incorporates the variable name (x), the assignment operator (=), and the value (10) =>
*/
let x;
console.log('Declaration:',x);
x=10;
console.log('Initalization:',x);

x=33;
console.log('Initalization:',x);

let today = "Great";
const elevenFifty ="Wonderful!";
console.log(today, elevenFifty);

// elevenFifty = "Super"; Do NOT Do This!
console.log(today, elevenFifty);
