// Variables
var generateBtn = document.querySelector("#generate");

//defines the possible characters that a pasword could have
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
var passwordLength = window.prompt("How long should the password be? Length must be at least 8 characters and no greater than 128 characters.");

//convert passwordLength into an integer
passwordLength = parseInt(passwordLength);

//cut off function if user entered NotANumber 'NaN'
if (isNaN(passwordLength)) {
  window.alert("Must be a number. Try again!");
  generatePassword();
}
//makes sure the user provided a valid length
if (passwordLength > 128 || passwordLength < 8) {
  window.alert("Length must be between 8 and 128. Try again!");
  generatePassword();
}


//ask the user for password criteria
//make sure we have at least one criteria

//random select from our pool of characters to generate the password

}

// Non-Function Code
generateBtn.addEventListener("click", writePassword);


