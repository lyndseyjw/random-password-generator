var generateBtn = document.querySelector("#generate");

var specialOptions = ["!", "#", "$", "%", "&", "‘", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"];
var numericOptions = ["0","1","2","3","4","5","6","7","8","9"];
var lowercaseOptions = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var uppercaseOptions = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var characterSelection = [];
var finalString = "";

function writePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  function generatePassword() {

    var lengthChoice = prompt("Please choose number of characters \nPassword must be at least 8 characters & no more than 128");
    console.log(lengthChoice);

    if (lengthChoice === null ) {
      alert("This is a required input");
      generatePassword();
    }

    var passwordLength = parseInt(lengthChoice);

    if (isNaN(passwordLength)) {
      alert("Please choose a number")
      generatePassword();
    }
    
    if (passwordLength < 8) {
      alert("Please choose a number between 8 and 128")
      generatePassword();
    }

    if (passwordLength > 128) {
      alert("Please choose a number between 8 and 128")
      generatePassword();

    } else {
      console.log(passwordLength);
    }

    var characterType = ["LOWERCASE letters", "UPPERCASE letters", "NUMBERS", "SPECIAL CHARACTERS"];
    for (var i=0; i<characterType.length; i++) {

      var typeResults
      typeResults = confirm("Would you like to have " + characterType[i] + " in your password?");
      console.log (typeResults);

      if (characterType[i] === "LOWERCASE letters" && typeResults) {
        characterSelection = [].concat(lowercaseOptions);
        console.log(characterSelection);
        finalString = [].concat(lowercaseOptions[Math.floor(Math.random()*lowercaseOptions.length)]);
        console.log(finalString);

      } else if (characterType[i] === "UPPERCASE letters" && typeResults) {
        characterSelection = characterSelection.concat(uppercaseOptions);
        console.log(characterSelection);
        finalString = finalString.concat(uppercaseOptions[Math.floor(Math.random()*uppercaseOptions.length)]);
        console.log(finalString);

      } else if (characterType[i] === "NUMBERS" && typeResults) {
        characterSelection = characterSelection.concat(numericOptions);
        console.log(characterSelection);
        finalString = finalString.concat(numericOptions[Math.floor(Math.random()*numericOptions.length)]);
        console.log(finalString);

      } else if (characterType[i] === "SPECIAL CHARACTERS" && typeResults) {
        characterSelection = characterSelection.concat(specialOptions);
        console.log(characterSelection);
        finalString = finalString.concat(specialOptions[Math.floor(Math.random()*specialOptions.length)]);
        console.log(finalString)
      }

    }

    if (characterSelection.length == 0) {
      alert("Please choose at least one option");
      generatePassword();
    }
  
    for(var i=finalString.length; i<passwordLength; i++) {

      finalString = finalString.concat(characterSelection[Math.floor(Math.random()*characterSelection.length)]);
      console.log(finalString);
    }

    finalString = finalString.join("");
    return finalString;

  }

  passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);