
const s1 = "Fred";
const s2 = "fed";
const s3 = "Ted";
const s4 = "bread";
const s5 = "and";
const tongueTwister = s1 + " " + s2 + " " + s3 + " " + s4 + " " + s5 + " " + s3 + " " + s2 + " " + s1 + " " + s4;

console.log(tongueTwister);



/*******************************************
    Iteration 1.2 | Camel Tail
*******************************************/
const part1 = "java";
const part2 = "script";

const part1cameLtail = part1.slice(0, -1) + part1.slice(-1).toUpperCase();
const part2cameLtail =part2.slice(-1) + part2.slice(-1).toUpperCase();

const result = part1cameLtail + part2cameLtail

console.log(result);

// Convert the last letter of part1 and part2 to uppercase and concatenate the strings


// Print the cameLtaiL-formatted string




/*******************************************
    Iteration 2.1 | Calculate Tip
*******************************************/
const billTotal = 84;

const tipPercent = billTotal * 0.15

console.log(tipPercent)

// Calculate the tip (15% of the bill total)


// Print out the tipAmount




/*******************************************
    Iteration 2.2 | Generate Random Number
*******************************************/

// Generate a random integer between 1 and 10 (inclusive)
const randomNumber = Math.floor(Math.random()*10) + 1;

console.log(randomNumber);

// Print the generated random number



/*******************************************
    Iteration 3.1 | Booleans
*******************************************/

const a = true;
const b = false;

// Try and guess the output of the below expressions first and write your answers down:
const expression1 = a && b; //true

const expression2 = a || b; //true

const expression3 = !a && b; //false

const expression4 = !(a && b); //false

const expression5 = !a || !b; //false

const expression6 = !(a || b); //true

const expression7 = a && a; //false

console.log(expression1)
console.log(expression2)
console.log(expression3)
console.log(expression4)
console.log(expression5)
console.log(expression6)
console.log(expression7)