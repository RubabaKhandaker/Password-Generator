var passLength = 0; // 
var applicableChars = ""; // stores selected character types

// Gets references to the #generate element
var generateBtn = document.querySelector("#generate");

// Functions used to validate password length
function passwordLength(){
  var lengthOfPass = prompt("Enter your preferred password length.");
  lengthOfPass = parseInt(len);
  
  if(lengthOfPass < 8 || lengthOfPass > 128 || isNaN(lengthOfPass)) return 0; // If checks length of password
  
  passLength = lengthOfPass;

  return lengthOfPass; 
}

function invalidLength(){
  alert("Uh oh! The length of the password must be a number value between 8 and 128!");
}

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