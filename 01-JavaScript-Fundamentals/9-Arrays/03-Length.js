let long = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(long.length);

let colors = ['blue', 'green', 'yellow', 'red', 'orange', 'purple'];
console.log(colors);
let newColors = colors.toString();
console.log(typeof newColors);

//challenge
let arr = [1, 2, 3, 4, 5]
arr.reverse(0[4]);
console.log(arr);

//challenge answer
let arr = [1, 2, 3, 4, 5];
if (arr instanceof Array === true) {
    let revArr = arr.reverse();
        revArr.forEach(a => console.log(a))
}