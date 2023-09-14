var passLength = 0; // Stores password length
var applicableChars = ""; // Stores selected character types

// Gets references to the #generate element
var generateBtn = document.querySelector("#generate");

// Functions used to validate password length
function passwordLength(){
  var lengthOfPass = prompt("Enter your preferred password length.");
  lengthOfPass = parseInt(lengthOfPass);
  
  if(lengthOfPass < 8 || lengthOfPass > 128 || isNaN(lengthOfPass)) return 0; // If checks length of password
  
  passLength = lengthOfPass;

  return lengthOfPass; 
}

function invalidLength(){
  alert("Uh oh! The length of the password must be a number value between 8 and 128!");
}

// Function to randomly generate password based on given parameters 
function generatePassword() {

  applicableChars = "";

  passwordLength() > 0 ? passwordChars() : invalidLength();
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

// Functions to select character types included in generated password

function passwordChars(){
  var upperCase =  confirm("Would you like to include uppercase characters? E.g. ABCDE");
  var lowerCase =  confirm("Would you like to include lowercase characters? E.g. abcde");
  var numbers =  confirm("Would you like to include numerical characters? E.g. 12345");
  var specialChars =  confirm("Would you like to include special characters? E.g. !@#$%");

  if( !upperCase && !lowerCase && !numbers && !specialChars ){
    invalidCharacters();
  } else {
    if(upperCase)
      applicableChars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    
    if(lowerCase)
      applicableChars += "abcdefghijklmnopqrstuvwxyz";
    
    if(numbers)
      applicableChars += "0123456789";

    if(specialChars)
      applicableChars += "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";  
  }  
}

function invalidCharacters(){
  alert("Uh oh! You must select OK to at least one of the character types prompted.");
}

// Writes password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Adds event listener to generate button
generateBtn.addEventListener("click", writePassword);