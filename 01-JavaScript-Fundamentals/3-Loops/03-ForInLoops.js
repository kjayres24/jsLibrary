/******************
 FOR IN LOOPS
 ******************/

 let student = {
     name: "Katie",
     awesome: true,
     degree: "JavaScript",
     week: 1
}

for (let item in student) {
    console.log(item);
   // console.log(student[item]); //Square bracket notation
}

let catArray = ['tabby', 'british shorthair', 'burmese', 'maine coon', 'rag doll'];

for (let cat in catArray) {
    // console.log(cat); **will list out the positions 0, 1, 2, 3, 4
    console.log(catArray[cat]);
}

//challenge write a for loop that capitalized the first letter of a student's name

let studentName = 'auTuMn';
let capName;

for (let x in studentName) {
    if (x == 0) {
        capName = studentName[x].toUpperCase();
    } else {
        capName += studentName[x].toLowerCase();
    }
}
console.log(capName);