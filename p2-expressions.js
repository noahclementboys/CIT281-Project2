/*
CIT 281 Project 2
Name: Noah Clement
*/


// Returns a random number between min (inclusive) and max (now inclsuive)
const getRandomInteger = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// returns a single random letter from the alphabet string
const getRandomLetter = function(){
    return alphabet[Math.floor(Math.random() * alphabet.length)];
}

// returns a string of random letters in between the min and max length providied
const getRandomString = function(minLength, maxLength){
    let result = '';
    const stringlength = getRandomInteger(minLength, maxLength);
    for (let i = 0; i < stringlength; i++){
        result += getRandomLetter();
    }
    return result;

}

const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
let result = "";
for (let i = 0; i < getRandomInteger(5, 26); i++) {
    result += getRandomLetter();
}
console.log(getRandomString(10,20));


// function that takes a string and returns the string sorted in alphabetical order
const getSortedString = function(string){
    return string.split('').sort().join('');
}
console.log(getSortedString('xpacdzo'));
