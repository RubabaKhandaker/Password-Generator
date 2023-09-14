// Assignment code here

// Gets references to the #generate element
var generateBtn = document.querySelector("#generate");

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
