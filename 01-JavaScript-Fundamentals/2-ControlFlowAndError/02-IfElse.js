let weather = 75;
if(weather < 70){
    console.log('Wear a jacket!');
} else {
    console.log('No jacket necessary!');
}

let myName = 'Katie';
if(myName == 'Katie'){
    console.log('Hello, my name is', myName);
} else {
    console.log('Hello, is your name', myName+'?');
}

let name = 'aUTuMN';
if(name[0] == name[0].toUpperCase()){
console.log(name[0] + name.substr(1).toLowerCase());
} else {
    console.log(name[0].toUpperCase() +name.substr(1).toLowerCase());
}

/********************
 ELSE IF
********************/

let age = 30;
if (age >= 25){
console.log('Yay! You can rent a car!');
} else if (age >= 21){
console.log('Yay! You can drink!');
} else if (age >= 18){
    console.log('Yay! You can vote!');
} else {
console.log("Sorry, you're too young to do anything.");
}

