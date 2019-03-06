/*****************
  FOR LOOPS
 ****************/

 for (let i = 0; i < 0; i++) {
     console.log(i);
 }

 for(let i = 0; i <= 20; i+=2) {
     console.log(i)
 }

 for(let i = 10; i >= 0; i--) {
     console.log(i)
 }

 for(let i = 0; i >= -24; i -= 2) {
     console.log(i)
 }

 //Challenge: Use letters in a for loop and separate them

let myName = "Katie"
for (counter = 0; counter < myName.length; counter = counter + 1) {
    console.log(myName.substring (counter, counter+1))
}
// OR

let name = Katie
for(let i = 0; i < name.length; i++) {
    console.log(name[i])
}

//Adding all numbers from 1-50 and get the sum 

let sum = 0;
for (let i = 0; i <= 50; i++) {
   sum += i //sum = sum + i
}
console.log(sum);