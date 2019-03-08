//What is a ternary? A great way to write a single line for an if/ if else statement.

let w = 6;

//Ternary:

(w > 0) ? console.log('yes') : console.log('no');

//Instead of:

if(w > 0){
    console.log('yes');
} else {
    console.log('no');
}

if(w == 0) {
    console.log('hey hey hey');
} else if(w < 0){
    console.log('nah nah nah, goodbye!');
} else {
    console.log('see ya later!');
}

(w == 0) ? console.log('hey hey hey') : (w < 0) ? console.log('nah nah nah, goodbye!') : console.log('see ya later!');

//Challenge
let age = 10;
(age >= 25) ? console.log('Yay! you can rent a car!') : (age >= 21) ? console.log('Yay! You can drink!') : (age >= 18) ? console.log('Yay! You can vote!') : console.log("Sorry, you're too young to do anything fun.");

