// Assignment Code
var generateBtn = document.querySelector("#generate");

// GLobal vars:
//Arrays: list of numbers, lowercase letters, UPPERCASE LETTERS, and special characters

var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var letterslower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var lettersUPPER = [];
var specialCharacters = [];

// prompt for password length



// prompt for types of characters used: numbers, lowercase, UPPERCASE, special characters:
// ok on confirm == true, cancel on confirm == false
var useNumbers = confirm(useNumbers);
var useLowercase = confirm(useLowercase);
var useUppercase = confirm(useUppercase);
var useSpecial = confirm(useSpecial);



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
