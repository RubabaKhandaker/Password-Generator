var passLength = 0; // 
var applicableChars = ""; // stores selected character types

// Gets references to the #generate element
var generateBtn = document.querySelector("#generate");

// Function to randomly generate password based on given parameters 
function generatePassword() {

  applicableChars = ""; // resets every time invoked

  passwordLength() > 0 ? passwordCharacterType() : invalidLengthAlert();
  var result = "";

  if( applicableChars != "" && passLength > 0 ){
    var applicableCharsLength = applicableChars.length;
    for ( var i = 0; i < passLength; i++ ) {
       result += applicableChars.charAt(Math.floor(Math.random() * applicableCharsLength));
    }

    if( result != "" )
      alert("A password has been generated for you successfully!");  
  }
  return result;

}

// Writes password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Adds event listener to generate button
generateBtn.addEventListener("click", writePassword);