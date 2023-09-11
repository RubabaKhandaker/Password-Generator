// Assignment code here

var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var symbols = ["@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "~", "|", "}", "{", "[", "]", ">", "<", "/", "-", "="];

// Gets references to the #generate element
var generateBtn = document.querySelector("#generate");

// Chooses random index from array of options
function getRandomUpper() {
  return upperCase[Math.floor(Math.random() * upperCase.length)];
}

function getRandomLower() {
  return lowerCase[Math.floor(Math.random() * lowerCase.length)];
}

function getRandomNumber() {
return numbers[Math.floor(Math.random() * numbers.length)];
}

function getRandomSymbol() {
  return symbols[Math.floor(Math.random() * symbols.length)];
}

// Generates password based on given criteria
function generatePassword() {

}

// Writes password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Adds event listener to generate button
generateBtn.addEventListener("click", writePassword);
