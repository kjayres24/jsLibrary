/* Create a function that swaps the value of any 2 specified properties in a object, 
make sure you don't mutate (change) the original object.
Your function may have 3 parameters, the original object, property1, property2
Example Object :
const testObj = {
  language : 'JavaScript',
  library : 'React'
}; */

//This code is mutated! 
let swap1 = {
    language: 'JavaScript',
    library: 'React'
};

function swap(swap1, language, library) {

    [swap1[language], swap1[library]] = [swap1[library], swap1[language]];
    console.log(swap1);
}
swap(swap1, 'language', 'library');

/* if you want to use an arrow function:
const testObj = {
    language: 'JavaScript',
    library: 'React'
};
 const propSwap = (obj, propOne, propTwo) => {
let newObj = {};

newObj[propOne] = obj[propTwo];
newObj[propTwo] = obj[propOne];

return newObj;
};

let newObj = propSwap(testObj, 'language', 'library');
console.log(newObj);

**************************Another example:

const randomObj = {
    os : 'test',
    city  : 'another test'
}

function keySwapper (object, keySwap1, keySwap2){

    let newobj = object

    let key1value = newobj[keySwap1];
    let key2value = newobj[keySwap2];

    newobj[keySwap1] = key2value;
    newobj[keySwap2] = key1value;

    console.log(newobj);

 }

 keySwapper(randomObj, "os", "city");
 console.log(randomObj);
*/



