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

//we have a defined variable for the length

//ask the user for password criteria
//are lowercase characters going to be included?
var lowercaseCharsCriteria = window.confirm("Do you want to include lowercase letters?");
//are uppercase characters going to be included?
var uppercaseCharsCriteria = window.confirm("Do you want to include uppercase letters?");
//are numeric characters going to be included?
var numericCharsCriteria = window.confirm("Do you want to include numbers?");
//are special characters going to be included?
var specialCharsCriteria = window.confirm("Do you want to include special symbols?")
//make sure we have at least one criteria
if ((lowercaseCharsCriteria === false) && (uppercaseCharsCriteria === false) && (numericCharsCriteria === false) && (specialCharsCriteria === false)) {
  window.alert("Please choose at least one password criteria.");
  generatePassword();
}

//random select from our pool of characters to generate the password

//assemble the pool of characters for this pasword
var characterPool = "";

//what did the user respond for lowercase characters?
if (lowercaseCharsCriteria === true) {
  characterPool = characterPool + lowercaseChars
}
//what did the user respond for lowercase characters?
if (uppercaseCharsCriteria === true) {
  characterPool = characterPool + uppercaseChars
}
//what did the user respond for numeric characters?
if (numericCharsCriteria === true) {
  characterPool = characterPool + numericChars
}
//what did the user respond for special characters?
if (specialCharsCriteria === true) {
  characterPool = characterPool + specialChars
}
//randomly generate the password from that pool

}

// Non-Function Code
generateBtn.addEventListener("click", writePassword);
