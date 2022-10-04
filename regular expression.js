// regular expressions are often called `regex`
// these are used to match part of strings. 

let bigString = "a quick brown fox jumps over the lazy dog"
let testRegex = /quick/g //global idk what
console.log(testRegex.test(bigString))


// regex can take multiple values to match. these are separated by or (|) operation
let multiRegex = /cat|dog|rabbit/
console.log(multiRegex.test(bigString));


// regex can also be set so that it ignores the lettercase
let ignoreRegex = /DOG|CAT|GOAT/i
console.log(ignoreRegex.test(bigString));

// Match function matches the exact pattern that we tell it to find
// it returns with an index position object
let matchRegex = /jumps/i //ignore case can be applied here as well
console.log(bigString.match(matchRegex));