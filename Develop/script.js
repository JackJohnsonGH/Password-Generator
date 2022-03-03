// Variables
var generateBtn = document.querySelector("#generate");

const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numericChars = "0123456789";
const specialChars = "!@#$%^&*()";


// Functions
function writePassword() {
  //generates the password
  var password = generatePassword();
  //target the appropriate part of the HTML
  var passwordText = document.querySelector("#password");
  //write the password to the webpage
  passwordText.value = password;

}

//function that generates our password
function generatePassword() {

//asks the user for password length
//makes sure the user provided a valid length

//ask the user for password criteria
//make sure we have at least one criteria

//random select from our pool of characters to generate the password

}

// Non-Function Code
generateBtn.addEventListener("click", writePassword);


