// Assignment Code
var generateBtn = document.querySelector("#generate");

// GLobal vars:
//Arrays: list of numbers, lowercase letters, UPPERCASE LETTERS, and special characters

var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var letterslower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var lettersUPPER = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var specialCharacters = [" ", "!", '"', "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];

// prompt for password length

var passLength = parseInt(prompt("How many characters do you want in your password? \n Enter a number: 8 - 128"))

// prompt for types of characters used: numbers, lowercase, UPPERCASE, special characters:
// ok on confirm == true, cancel on confirm == false
var useNumbers = confirm("Do you want to use numbers in your password?");
var useLowercase = confirm("Do you want to use lowercase letters in your password?");
var useUppercase = confirm("Do you want to use UPPERCASE LETTERS in your password?");
var useSpecial = confirm("Do you want to use Special Characters (ie: !@#$%^ etc) in your password?");



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
