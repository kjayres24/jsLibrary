/**************************
CALLING FUNCTIONS
*************************
function hi() {
  console.log('HI');
}

hi();
(1);

1- This is how we call, or 'invoke' our function

*/

function hi() {
    console.log('Hi!');
}
hi();

//Another example

function hi(){
    return 'Hi!';
}
hi();
console.log(hi());


function numbers() {
for (let i = 1; i <= 10; i++){
    console.log(i);
}
}
numbers();


function something() {
    for( let x = 0; x <= 10; x++) {
        console.log(x);
    }
}
something();



function something() {
    let arr = ['This', 'is', 'really', 'cool'];
    
     for (let dog of arr) { 
     console.log(dog);
    }
}
something();



/**************************
PARAMETERS
***********************

function hi(name){
            (1)
  console.log(`Hi ${name}`)
                    (2)
}

hi('Autumn');
      (3)

1- The parameter(s) we need to take into the function
2- Using string interpolation, we can refer to the parameter we passed
3- This is where we define what the parameter's value will be
*/

function pet(animal){
    console.log(`I have a ${animal} for a pet.`);
}
pet('cat');


function name(first, last) {
    //let fullName = `${first} ${last}`; (in console.log, change ${first} {$last} to ${fullName} from let!)
    console.log(`Hello, my name is ${first} ${last}`);
}
name('Katie', 'Ayres');

/**************************
FAT ARROW FUNCTIONS
*********************
let hi = ()   => {
      (1)     (2)
  console.log('hi')
};

1- We need to set the fat arrow function to a variable
2- We use the 'fat arrow' to signify its a function


Concise
*********************
let hi = () => console.log('hi');

Block Body
*********************
let hi = () => {
  console.log('hi')
}
*/

function coffee(){
    console.log('Coffee is good!');
}
coffee();

let coffee = () => {
    console.log('I like coffee!');
}
coffee();


let apples = x => console.log(`There are ${x} apples.`);//concise has implied return
apples(10);

//OR can be written like this

let apples = x => `There are ${x} apples.`; //block will not have implied return if more than one line
console.log(apples(10));

/**************************
RETURN
***************

let hi = () => {
  return 'hi';
    (1)
};

let newName = hi();
      (2)      (3)

console.log(newName)

1- The keyword that brings our data out of our function
2- We need a new variable to hold the value of the return
3- When called, the function becomes the value of the return



***********/

function captializeName(name) {
    let capName = '';
    for (let l in name){
      if (l == 0){
        capName += name[l].toUpperCase();
      } else {
        capName += name[l].toLowerCase();
      }
    }
 
    return capName
  }

const myNameIs =  captializeName('Autumn');

console.log(`${myNameIs} how are you doing?`);

//challenge, make a tip calculator using a function and have it return the value

function tipCalc(bill){
    let tip = (bill *0.2);
    return tip.toFixed(2);
}

let totalTip = tipCalc(19.88);
console.log(totalTip);

