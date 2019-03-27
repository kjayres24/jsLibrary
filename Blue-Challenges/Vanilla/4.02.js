/*

Given 2 arrays:

const arrOne = [ 10, 20 , 30 , 40 , 50, 70 ];
const arrTwo = [ 5, 3, 2, 5 ];

Create a function that multiplies 'like' indexes (0 with 0, 1 with 1, etc.) together then place the value in a new array.

The function you create should return [50, 60, 60, 200] based on the arrays above.

Make sure the values given to the function are an array type and they have data inside of them. If not of type array, return string message.

If the first array has more values than the second, return an array with the same number of values as the shorter array.
*/

const arrOne = [10, 20, 30, 40, 50, 70];
const arrTwo = [5, 3, 2, 5];
const empty = [];
const str = 'hello';

const arrMultiplier = (arrOne, ArrTwo) => {
    let newArr = [];

    for (let i = 0; i < arrOne.length; i++) {
        if (arrTwo[i] == undefined) {
            console.log("skipping", arrOne[i]);
        } else {
            newArr.push(arrOne[i] * arrTwo[i]);
        }
    }
    return newArr;
}

let product = arrMultiplier(arrOne, arrTwo);
console.log(product);


//Explanation&different way of solving problem above

let arrOne = [10, 20, 30, 40, 50, 60, 70];
let arrTwo = [2, 4, 6, 8, 10];

const multiply = (x, y) => { //function declaration named multiply that takes in the parameters of x & y

    let newArr = []; //newArr variable is set to an empty array

    for (let i = 0; i < x.length; i++) { //for loop that is checking the length of the x parameter(this will be arrOne argument we pass in on line 18). 
        if (y[i] == undefined) { //if the index of our shorter array is undefined(y is our arrTwo argument we pass in on line 18)...
            newArr.push(x[i] * 1) //then push the value of x at said index into newArr
        } else { //else...
            newArr.push(x[i] * y[i]) //multiply the index of the x by the index of y, and push those values into newArr
        }
    }
    return newArr; //return newArr so we can access that information outside of our function
}

let product = multiply(arrOne, arrTwo); //declaring a new variable of product that is set equal to our multiply function, where we're passing in arrOne & arrTwo as our arguments
console.log(product); //console log our new variable of product