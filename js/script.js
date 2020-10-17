// Password Characters Strings
var numericChar = "1234567890";
var lowerCaseChar = "abcdefghijklmnopqrstuvwxyz";
var upperCaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
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
// Confirms and Prompts for user






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
