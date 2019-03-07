/*
Arrays
************
Arrays are containers that hold lists of items

let list =  [  'item1',   'item2',    'item3'];
    (1)    (2)   (3)

1- name of the Array, or list; 
2- The Array is inside of these square brackets
3- each item, regardless of datatype, is separated by commas

Denoted by []
Has values ('blue', 'green', 'yellow'), separated with commas

console.log(typeof list);

Why is that?  The definition of an object is a container that can hold multiple datatypes.  Arrays fit under that category.

What is an array?
  Has [] brackets
  Can hold multiple datatypes
  Great for listing 
*/

let list = ['item1', 'item2', 'item3',];
console.log(typeof list); //typeof helps find the datatype of something in JS...in this case, the answer is object.

let list2 = ['orange', 'banana', 'oreos'];
console.log(list2[1]); //use [1] index in console.log to pull out a single string.

let students = ['Tony', 'Marshall', 'Rhys', 'Ray', 23, true, ['Ryan', 'Iesha', ['Randy', 'Trevor'], 'Amira']];
console.log(typeof students);
console.log(students instanceof Array);
console.log(students[2]);
console.log(students[6][1]); //pulling out a name within the second array. [6] indicates the sixth position in the first array and [1] the first position in the second array within the first array
console.log(students[6][2][1]); //the array within an array counts as one position. [Ryan - Amira] counts as one position (6)
let myFriend = students[6][2][1]; //use this with all of the console.logs commented out.
console.log(`Hello ${myFriend}, you look nice today.`);

//challenge
let students = ['Tony', 'Marshall', 'Rhys', 'Ray', 23, true, ['Ryan', 'Iesha', ['Randy', 'Trevor'], 'Amira']];
let myFriend = students[6][1];
console.log(`Hello ${myFriend}, you look nice today.`);
//********


let food = ['pecan pie', 'shrimp', 'quesadilla', 'cheese cake', 'hot dog'];
for(let item in food){
    console.log(food[item])
}

//adding a new item to an array
let food = ['pecan pie', 'shrimp', 'quesadilla', 'cheese cake', 'hot dog'];
let pizza = 'pizza'; 
food.push(pizza);
console.log(food); 

//taking out an item from an array and replacing it 
let food = ['pecan pie', 'shrimp', 'quesadilla', 'cheese cake', 'hot dog'];
food.splice(1,1, 'bananas'); //what index do we start at, how many do we delete, what do we replace it with
console.log(food);

//adding an index without deleting anything
let food = ['pecan pie', 'shrimp', 'quesadilla', 'cheese cake', 'hot dog'];
food.splice(2,0, 'sweet potato pie'); 
console.log(food);

//challenge
let food = ['pecan pie', 'shrimp', 'quesadilla', 'cheese cake', 'hot dog'];
food.splice(4,4, 'funnel cake');
console.log(food);

let food = ['pecan pie', 'shrimp', 'quesadilla', 'cheese cake', 'hot dog'];
food.splice(4,0, 'funnel cake');
console.log(food);

//removes the end part of the array (in this case, it removes hot dog)
let food = ['pecan pie', 'shrimp', 'quesadilla', 'cheese cake', 'hot dog'];
food.pop(); //nothing goes in the ()!!
console.log(food);

//forEach can give us the item and the index of the item
let food = ['pecan pie', 'shrimp', 'quesadilla', 'cheese cake', 'hot dog'];
food.forEach((food,number) => {
    console.log(number);
    console.log(food);
})

//Challenge
let movies = ['Phantom Menance','Attack of the Clones','Revenge of the Sith','Solo','Rogue One','A New Hope','The Empire Strikes Back','Return of the Jedi'];

movies.push('Force Awakens');
movies.splice(3,1,'Obi Wan');

movies.forEach(f => { console.log(f); });
