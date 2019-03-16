//challenge taking two arrays and using both of them in a function

/*challenge text:
Challenge (Arrays):
Color List:

Create a function that can take in arrays.
Create an array of colors
Create an array of suffixes for placement (i.e. st (for 1st), nd (for 2nd), rd (for 3rd), etc)

In the function, filter through both arrays and print out the placement and the color for each individual colors (i.e. 1st is green, 2nd is blue, 3rd is red, 4th is orange, etc) until all of the colors are listed out with the appropriate placement.

Not to make it too hard on yourself, you can stop the count at ten
Tools: 
function that has two parameters
two arrays, one with colors, one with suffixes
some kind of for loop
should give back 1st is green or whatever color in console log. 
tells me i can stop at 10
*/
let colors = ['blue', 'black', 'purple', 'green', 'yellow', 'grey', 'brown', 'red', 'grey', 'teal'];
let suffixes = ['st', 'nd', 'rd', 'th', 'th', 'th', 'th', 'th', 'th', 'th'];
function colorNums(color, sufx) {
    for (x = 0; x < 10; x++) {
        console.log(`${x + 1}${sufx[x]} is ${color[x]}`);
    }
}
colorNums(colors, suffixes);


/*
Challenge (Strings):
Pig Latin:

Create a function that takes in strings
In the function, translate a phrase into pig latin and print both the original and pig latin version to the console.

If able to do so, return the value into another variable and print that variable

What is Pig Latin?
    * If the word begins with a consonant, remove the consonant to the first vowel, place it at the end of the word, and add an 'ay' to the end (i.e. Pig Latin => IgPay Atinlay)
    * If the word begins with a vowel, simply add an 'ay' at the end of the word

    Tools:
    Function that takes in a parameter
    Conditional to check for the presence of vowels
    split up my string
    *rule change* remove first consonant and move to back and add 'ay'
*/

//Version with one word

function piggie(str) {
    str.toLowerCase();
    switch (str[0]) {
        case 'a':
            console.log(`${str}ay`);
            break;
        case 'e':
            console.log(`${str}ay`);
            break;
        case 'i':
            console.log(`${str}ay`);
            break;
        case 'o':
            console.log(`${str}ay`);
            break;
        case 'u':
            console.log(`${str}ay`);
            break;
        default:
            let newArr = str.split('');
            console.log(`${newArr.splice(1).join('')}${str[0]}ay`);
            break;
    }
}
piggie('ey');

//Version with mult. strings

function piggie(str) {
    str.toLowerCase();
    if (str.split(' ').length > 1) {
        let x = str.split(' ');
        for (y of x) {
            switch (y[0]) {
                case 'a':
                    console.log(`${y}ay`);
                    break;
                case 'e':
                    console.log(`${y}ay`);
                    break;
                case 'i':
                    console.log(`${y}ay`);
                    break;
                case 'o':
                    console.log(`${y}ay`);
                    break;
                case 'u':
                    console.log(`${y}ay`);
                    break;
                default:
                    let newArr = y.split('');
                    console.log(`${newArr.splice(1).join('')}${y[0]}ay`);
                    break;
            }
        }
    } else {


        switch (str[0]) {
            case 'a':
                console.log(`${str}ay`);
                break;
            case 'e':
                console.log(`${str}ay`);
                break;
            case 'i':
                console.log(`${str}ay`);
                break;
            case 'o':
                console.log(`${str}ay`);
                break;
            case 'u':
                console.log(`${str}ay`);
                break;
            default:
                let newArr = str.split('');
                console.log(`${newArr.splice(1).join('')}${str[0]}ay`);
                break;
        }
    }
}
piggie('Good Day');





