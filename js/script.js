// Assignment Code
var generateBtn = document.querySelector("#generate");

// Function to prompt the user to enter length of the new password
function pwLength () {
  // Ask the user to enter length of password
  var desiredLength = prompt ("Enter the length of your new password. Your new password must be set between 8 and 128 characters.");

  // Password length validation
  if (desiredLength < 8 || desiredLength > 128 || desiredLength === "") {
    alert ("That's an invalid password length. Your new password must be set between 8 and 128 characters.");
    return pwLength;
  }
  
  // Console log user's entry
  console.log (desiredLength);

  return desiredLength;
}

// User to enter password characters
function enterChar () {
  // Password Characters Strings
  var charInPassword = " ";
  var upperCaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowerCaseChar = "abcdefghijklmnopqrstuvwxyz";
  var numericChar = "1234567890";
  var specialChar = "~`@#$%^&*()_+=";

  // User confirms for password
  var confirmUpperCase = confirm ("Would you like to include uppercase characters in your password?");
  var confirmLowerCase = confirm ("Would you like to include lowercase characters in your password?");
  var confirmNumeric = confirm ("Would you like to include numeric characters in your password?");
  var confirmSpecialChar = confirm ("Would you like to include special characters in your password?");

  if (confirmUpperCase === true ) {
    charInPassword += upperCaseChar;
  }

  if (confirmLowerCase === true ) {
    charInPassword += lowerCaseChar;
  }

  if (confirmNumeric === true ) {
    charInPassword += numericChar;
  }

  if (confirmSpecialChar === true ) {
    charInPassword += specialChar;
  }

  // Console log confirmation entries
  console.log(confirmUpperCase);
  console.log(confirmLowerCase);
  console.log(confirmNumeric);
  console.log(confirmSpecialChar);

  return charInPassword;
}

// Function to generate the password
function generatePassword () {
  // Password string
  var password = " ";

  // Call back to function for user to enter desired length of the password
  var lengthofPassword = pwLength ();

  // Call back to function for user to enter password characters
  var passwordCharacters = enterChar ();

  // Result of generated password
  for (var i = 0; i < lengthofPassword; i++) {
    password = passwordCharacters.charAt(Math.floor(Math.random() * lengthofPassword));
  }

  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
