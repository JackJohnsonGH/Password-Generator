// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function myFunction() {
  var txt;
  if (confirm("Press a button!")) {
    txt = "You pressed Yes!";
  } else {
    txt = "You pressed No!";
  }
  document.getElementById("demo").innerHTML = txt;
}

let isExecuted = confirm("Are you sure to execute this action?");

console.log(isExecuted); // OK = true, Cancel = false