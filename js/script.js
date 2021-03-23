//Global Scope Password
var password = "";

var generatePassword = function () {
  // Call in Global Password here to send out at end
  password = "";

  //Create a function that will ask user for length of password. Note: Must be between 8 and 128 Chara long
  var lengthPassword = pwLength();

  //Create a function that will determine all inclusions for Character Sets
  var passwordInclusions = enterChar();
  var passwordInclusionsLength = passwordInclusions.length;

  for (var i = 0; i < lengthPassword; i++) {
    password += passwordInclusions.charAt(
      Math.floor(Math.random() * passwordInclusionsLength)
    );
  }

  return password;
};

//This is the function that will prompt for **password length**
var pwLength = function () {
  //First, lets ask the user for the length of the password using a prompt
  var lengthPass = prompt(
    "Enter the length of your new password. Your new password must be set between 8 and 128 characters."
  );

  //Next, lets validate the user input(Whether user entered invalid length or entered nothing at all)
  if (lengthPass < 8 || lengthPass > 128 || lengthPass === "") {
    alert(
      "That's an invalid password length. Your new password must be set between 8 and 128 characters."
    );
    return pwLength;
  }

  //This turns string into number. Note:refer to documentation if im still confused later.
  lengthPass = Math.floor(Number(lengthPass));

  //This will send data from this function to layout function!
  return lengthPass;
};

//Function That will determine included Character sets
var enterChar = function () {
  //String to send back inclusions at end
  var passwordInclusions = "";

  //Character Sets
  var lowerCaseChar = "abcdefghijklmnopqrstuvwxyz";
  var upperCaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numericChar = "0123456789";
  var specialChar = "~`!@#$%^&*+<?/;:(=)|{";

  // User confirms for password
  var confirmLowerCase = confirm(
    "Would you like to include lower case characters to your password?"
  );
  var confirmUpperCase = confirm(
    "Would you like to include upper case characters to your password?"
  );

  var confirmNumeric = confirm(
    "Would you like to include numerical characters to your password?"
  );
  var confirmSpecialChar = confirm(
    "Would you like to include special characters to your password?"
  );

  //Validate Selections
  if (confirmLowerCase == true) {
    passwordInclusions += lowerCaseChar;
  }
  if (confirmUpperCase == true) {
    passwordInclusions += upperCaseChar;
  }
  if (confirmNumeric == true) {
    passwordInclusions += numericChar;
  }
  if (confirmSpecialChar == true) {
    passwordInclusions += specialChar;
  }

  //Send back results
  return passwordInclusions;
};

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
