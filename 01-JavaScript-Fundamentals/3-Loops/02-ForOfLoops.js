/*****************
 FOR OF LOOPS
 ****************/

 var student = {
     name: "Peter",
     awesome: true,
     degree: "JavaScript",
     week: 1
 };

 for (item of student) {
     console.log(item);
 }

 let catArray = ['tabby', 'british shorthair', 'burmese', 'maine coon', 'rag doll'];

 for (let cat of catArray) { //'let' can be optional in the ()
 console.log(cat, 'says meow');
}