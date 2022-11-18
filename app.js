// 1.1. What is the difference between a parameter and an argument?
// A parameter is what goes in the parentheses when you declare a function. i.e. function exampleFunc(para, meter).

// An argument is what you feed a function when you invoke it, and then it becomes the parameter when the function is run. i.e. console.log(exampleFunc().

// 1.2. Within a function, what is the difference between return and console.log?

// Return is like the output of the function. When the function hits a return, it exits. Console.log just prints the JS to the console.

// 1. 3. What are the implications of the ability of a function to return a value?
// You may use functions to run chunks of code and return a new value that can be stored in a new variable. This is crucial if your function is an intermediate step in a larger problem that you're working out.

// 2. calculateCube
function calculateCube(num) {
    let volume = Math.pow(num, 3);
    return volume;
}

// console.log(calculateCube(5));

// 3. isAVowel
function isAVowel(letter) {
    let capLetter = letter.toUpperCase();
    if (capLetter === "A" || capLetter === "E" || capLetter === "I" || capLetter === "O" || capLetter === "U") {
        return true;
    } return false;
}
//console.log(isAVowel("O"));

// 4. getTwoLengths
function getTwoLengths(word1, word2) {
    let arr = [word1.length, word2.length];
    return arr;
}

console.log(getTwoLengths("Hank", "Hippopopalous"));

// 5. sumArray
function sumArray(arr) {
    // YOUR CODE HERE
}

// 6.1 checkPrime
function checkPrime(num) {
    // YOUR CODE HERE
}

// 6.2 printPrimes
function printPrimes(num) {
    // YOUR CODE HERE
}

// 7. printLongestWord
function printLongestWord(arr) {
    // YOUR CODE HERE
}

// BONUS!

// 8. eulerFibo
function eulerFibo(num) {
    // YOUR CODE HERE
}

// 9. findNeedle
function findNeedle(arr) {
    // YOUR CODE HERE
}

// 10. sumPositive
function sumPositive(arr) {
    // YOUR CODE HERE
}

module.exports = {
    calculateCube,
    isAVowel,
    getTwoLengths,
    sumArray,
    checkPrime,
    printPrimes,
    printLongestWord,
    eulerFibo,
    findNeedle,
    sumPositive
};