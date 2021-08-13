var specialOptions = [“!”, “#”, “$”, “%”, “&”, “‘”, “(”, “)”, “*”, “+”, “,”, “-”, “.”, “/”, “:”, “;”, “<”, “=”, “>”, “?”, “@”, “[”, “]”, “^”, “_”, “`”, “{”, “|”, “}”, “~”];
var numericOptions = ['0','1','2','3','4','5','6','7','8','9'];
var lowercaseOptions = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var uppercaseOptions = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

function userPreferences() {

  var passwordText = prompt("Please choose number of characters \nPassword must be at least 8 characters & no more than 128");

  if (passwordText === null ) {
    alert("This is a required input");
    userPreferences();
  }

  if (isNaN(passwordText)) {
    alert("Please choose a number")
    userPreferences();
  }
  
  if (passwordText.length < 8) {
    alert("Please choose a number between 8 and 128")
    userPreferences();
  }

  if (passwordText.length > 128) {
    alert("Please choose a number between 8 and 128")
    userPreferences();
  } else {
    return parseInt(passwordText);
  }

  var specialCharacters = confirm("Would you like to have SPECIAL CHARACTERS in your password?");
  var numeric = confirm("Would you like to have NUMBERS in your password?");
  var lowercase = confirm("Would you like to have LOWERCASE letters in your password?");
  var uppercase = confirm("Would you like to have UPPERCASE letters in your password?");

  if (!specialCharacters && !numeric && !lowercase && !uppercase) {
    alert("You must choose at least one option");
    specialCharacters.confirm;
  } else {
    passwordOptions = specialCharacters.concat(numeric, lowercase, uppercase);
  }

  var passwordOptions = {
    passwordText: [],
    specialCharacters: [];
    numeric: [];
    lowercase: [];
    upppercase [];
  }

  return passwordOptions

}


// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  console.log(passwordText);

  function generatePassword() {
  

    var finalArray = [];

    var lowercaseIndex = Math.floor(Math.random() * lowercaseOptions.length);
    var uppercaseIndex = Math.floor(Math.random() * uppercaseOptions.length);
    var numericIndex = Math.floor(Math.random() * numericOptions.length);
    var specialIndex = Math.floor(Math.random() * specialOptions.length);
    
    function chooseoneMessage() {

      return "Please choose at least one option";

    } 

    if (lowercase && uppercase && numeric && specialCharacters) {
      
      return lowercaseOptions[lowercaseIndex] + uppercaseOptions[uppercaseIndex] + numericOptions[numericIndex] + specialOptions[specialIndex] * password

    } else if (lowercase && uppercase && numeric) {

      return lowercaseOptions[lowercaseIndex] + uppercaseOptions[uppercaseIndex] + numericOptions[numericIndex]

    } else if (lowercase && uppercase) {

      return lowercaseOptions[lowercaseIndex] + uppercaseOptions[uppercaseIndex] 

    } else if (lowercase) {

      lowercaseOptions[lowercaseIndex]

    } else {

      alert(chooseoneMessage());

    }

    if (chooseoneMessage()) {

      writePassword();

    }

    console.log(lowercaseIndex)
    console.log(uppercaseIndex);
    console.log(numericIndex);
    console.log(specialIndex);

  }

}




