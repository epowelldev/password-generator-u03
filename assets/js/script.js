// Assignment Code
var generateBtn = document.querySelector("#generate");

// GLobal vars:
//Arrays: list of numbers, lowercase letters, UPPERCASE LETTERS, and special characters

const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const letterslower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const lettersUPPER = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const specialCharacters = [" ", "!", '"', "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];

// Function generatePassword:
function generatePassword() {

  var characterSelection = [];
  let ongoingPWGen = "";

  // prompt for password length
  var passLength = parseInt(prompt("How many characters do you want in your password? \n Enter a number: 8 - 128"))
  // check to see if `passLength` is valid (from 8 to 128), if it isn't= alert the user and exit function
  if (!(passLength >= 8 && passLength <= 128)) {
    return alert("Not a valid entry of length!");
  };

  // prompt for types of characters used: numbers, lowercase, UPPERCASE, special characters:
  // ok on confirm == true, cancel on confirm == false

  var useNumbers = confirm("Do you want to use numbers in your password?");
  // IF `useNumbers` is true, THEN add `numbers` to `characterSelection` array
  if (useNumbers) {
    characterSelection = characterSelection.concat(numbers);
  }

  var useLowercase = confirm("Do you want to use lowercase letters in your password?");
  // IF `useLowercase` is true, THEN add `letterslower` to `characterSelection` array
  if (useLowercase) {
    characterSelection = characterSelection.concat(letterslower);
  }

  var useUppercase = confirm("Do you want to use UPPERCASE LETTERS in your password?");
  // IF `useUppercase` is true, THEN add `lettersUPPER` to `characterSelection` array
  if (useUppercase) {
    characterSelection = characterSelection.concat(lettersUPPER);
  }

  var useSpecial = confirm("Do you want to use Special Characters (ie: !@#$%^ etc) in your password?");
  // IF `useSpecial` is true, THEN add `specialCharacters` to `characterSelection` array
  if (useSpecial) {
    characterSelection = characterSelection.concat(specialCharacters);
  }

  // check to see if user selected at least one type of character, if not- alert and exit
  if (characterSelection == "") {
    return alert("You MUST select at least one character type for password to be generated: \n Numbers \n Lowercase \n Uppercase \n Special Characters");
  }

  // generate a password randomly based on `characterSelection` and the length of that array, as well as how many characters long the password should be
  for (i = 0; i < passLength; i++) {
    ongoingPWGen = ongoingPWGen + (characterSelection[Math.floor(Math.random() * (characterSelection.length))])
  } 

  // console.log(ALLTHETHINGS) i think saved me during this assignment
  // console.log(ongoingPWGen);
  // console.log(passLength, useNumbers, useLowercase, useUppercase, useSpecial);
  // console.log(characterSelection);

  // return `ongoingPWGen` to `password` in `writePassword` to desplay in html
  return ongoingPWGen;
}

// Write password to the #password input
function writePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
