/**********************************************
 SWITCH
Switch statements helps us choose between several options for a variable and a default
Four main parts to a switch statement
switch, the argument being evaluated 
case, one of the options for the variable to be
break, this breaks us out of the switch statement once we hit our case
default, the default if we dont hit one of our cases, not neccesary 

 NOTE: A switch statement is essentially saying - "pick one of these based on your variables value", 
 while an if statement is essentially just a series of boolean checks.
 */

let friend = "Bob";

switch (friend) {
    case "Autumn":
    console.log("Hey Autumn, when are you going rock climbing?");
    break;
    case "Dave":
    console.log("Hey Dave, how is Cooper?");
    break;
    case "Alecx":
    console.log("Hey Alecx, when are we playing DnD?");
    break;
    default:
    console.log(`I'm sorry, ${friend}, but do I know you?`); //string interpolation, backticks, under the escape key
}

let dessert = "pie";

switch (dessert) {
    case "pie":
    console.log("Pie, pie, me oh my!");
    break;
    case "cake":
    console.log("Cake is great!");
    break;
    case "ice cream":
    console.log("I scream for ice cream!");
    break;
    default:
    console.log("Not on the menu.");
}