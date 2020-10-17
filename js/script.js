// Password Characters Strings
var passwordCharSet = "";
var upperCaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCaseChar = "abcdefghijklmnopqrstuvwxyz";
var numericChar = "1234567890";
var specialChar = "~`@#$%^&*()_+=";

// Create a function to prompt the user to enter length of the new password
function generatePassword () {
  var desiredLength = prompt ("Enter the length of your new password. Your new password must be set between 8 and 128 characters.");

  // Validate password length entry
  if (desiredLength < 8 || desiredLength > 128 || desiredLength === "") {
    alert ("That's an invalid password length. Your new password must be set between 8 and 128 characters.")
    return generatePassword;
  }
}
// Confirms for user to enter password characters
function passwordCharSet () {
  var confirmUpperCase = confirm ("Would you like to add upper case characters to your password?");
  var confirmLowerCase = confirm ("Would you like to add lower case characters to your password?");
  var confirmNumeric = confirm ("Would you like to add numerical characters to your password?");
  var confirmSpecial = confirm ("Would you like to add special characters to your password?");

  // Validate entries of password characters
  if (confirmUpperCase === true) {
    passwordCharSet += upperCaseChar;
  }

  if (confirmLowerCase === true) {
    passwordCharSet += lowerCaseChar;
  }

  if (confirmNumeric === true) {
    passwordCharSet += numericChar;
  }

  if (confirmSpecial === true) {
    passwordCharSet += specialChar;
  }
  return passwordCharSet;
}






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
