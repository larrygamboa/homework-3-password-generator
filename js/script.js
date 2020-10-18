// Assignment Code
var generateBtn = document.querySelector("#generate");

// Function to prompt the user to enter length of the new password
function passwordLength () {
  // Ask the user to enter length of passwprd
  var desiredLength = prompt ("Enter the length of your new password. Your new password must be set between 8 and 128 characters.");

  // Password length validation
  if (desiredLength < 8 || desiredLength > 128 || desiredLength === "") {
    alert ("That's an invalid password length. Your new password must be set between 8 and 128 characters.");
    return passwordLength;
  }

  desiredLength = Math.floor(Number(desiredLength));

  return desiredLength;
}

// User to enter password characters
function enterChar () {
  // Password Characters Strings
  var upperCaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowerCaseChar = "abcdefghijklmnopqrstuvwxyz";
  var numericChar = "1234567890";
  var specialChar = "~`@#$%^&*()_+=";
  var pwChar = "";

  // User confirms for password
  var confirmUpperCase = confirm ("Would you like to include uppercase characters in your password?");
  var confirmLowerCase = confirm ("Would you like to include lowercase characters in your password?");
  var confirmNumeric = confirm ("Would you like to include numeric characters in your password?");
  var confirmSpecialChar = confirm ("Would you like to include special characters in your password?");

  if (confirmUpperCase === true ) {
    pwChar += upperCaseChar;
  }

  if (confirmLowerCase === true ) {
    pwChar += lowerCaseChar;
  }

  if (confirmNumeric === true ) {
    pwChar += numericChar;
  }

  if (confirmSpecialChar === true ) {
    pwChar += specialChar;
  }
}

// Function to generate the password
function generatePassword () {
 
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
