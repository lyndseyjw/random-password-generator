// this grabs the button from the HTML & creates a variable in script that we can access
var generateBtn = document.querySelector("#generate");

// variables containing arrays of password parameter options
var specialOptions = ["!", "#", "$", "%", "&", "‘", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"];
var numericOptions = ["0","1","2","3","4","5","6","7","8","9"];
var lowercaseOptions = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var uppercaseOptions = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

// empty variables to combine above arrays depending on user's preferences
var characterSelection = [];
var finalArray = "";
var lengthChoice;
var passwordLength;

function checkLength () {

  // a prompt will allow user's to choose the length of their password & store it in a variable
  lengthChoice = prompt("Please choose number of characters \nPassword must be at least 8 characters & no more than 128");
    
  console.log(lengthChoice);

  // we are changing the string value user inputs to an integer so we can apply math functions later
  passwordLength = parseInt(lengthChoice);

  // if the user clicks cancel on the prompt, they will receive an alert asking them to input information & prompt will begin again
  if (lengthChoice === null ) {
    alert("This is a required input");
    checkLength();
  
    // if user does not enter a number, they will be alerted & prompt will appear again
  } else if (isNaN(passwordLength)) {
    alert("Please choose a number")
    checkLength();
  
    // if user chooses a number < 8, alerted & prompt appears again
  } else if (passwordLength < 8) {
    alert("Please choose a number between 8 and 128")
    checkLength();
  
    // user chooses a number > 128, alerted & prompt appears again
  } else if (passwordLength > 128) {
    alert("Please choose a number between 8 and 128")
    checkLength();

  } else {
    console.log(passwordLength);
  }
}

// this is the function that will start once user pressed the generate password button
function writePassword() {

  // whatever value generated from the generatePassword function will be stored in this variable
  var password = generatePassword();
  // this grabs the text area where the password will show on screen & gives it a script variable we can access
  var passwordText = document.querySelector("#password");

  // this is the function that will give the user prompts & confirmations, allowing them to choose their specific parameters
  // from here, the computer will randomly select characters based on the user's parameters
  function generatePassword() {
    
    checkLength();
    
    // an array we can use to create one confirmation using a for loop and indices
    var characterType = ["LOWERCASE letters", "UPPERCASE letters", "NUMBERS", "SPECIAL CHARACTERS"];
    // this for loop will run the length of the array i.e. will give user 4 confirmation messages
    for (var i=0; i<characterType.length; i++) {

      // this variable will store user's paramter preferences
      var typeResults
      typeResults = confirm("Would you like to have " + characterType[i] + " in your password?");
      console.log (typeResults);
      
      // if the user chooses they want lowercase letters in their password, the lowercaseOptions array will be stored in the characterSelection empty array defined globally
      // the computer will randomly choose a lower case letter & add it to the empty finalArray defined globally to ensure user will have this in their password
      if (characterType[i] === "LOWERCASE letters" && typeResults) {
        characterSelection = [].concat(lowercaseOptions);
        console.log(characterSelection);
        finalArray = [].concat(lowercaseOptions[Math.floor(Math.random()*lowercaseOptions.length)]);
        console.log(finalArray);

        // if the user chooses they want uppercase letters in their password, the uppercaseOptions array will be stored in the characterSelection empty array defined globally
        // the uppercaseOptions will be stored with the lowercaseOptions, if they were chosen, in the characterSelection array 
        // the computer will randomly choose an upper case letter & add it to the empty finalArray defined globally to ensure user will have this in their password
      } else if (characterType[i] === "UPPERCASE letters" && typeResults) {
        characterSelection = [].concat(uppercaseOptions, characterSelection);
        console.log(characterSelection);
        finalArray = [].concat((uppercaseOptions[Math.floor(Math.random()*uppercaseOptions.length)]));
        console.log(finalArray);

        // if the user chooses they want numbers in their password, the numericOptions array will be stored in the characterSelection empty array defined globally
        // the numericOptions will be stored with the lowercaseOptions &/or uppercaseOptions, if they were chosen, in the characterSelection array
        // the computer will randomly choose a number & add it to the empty finalArray defined globally to ensure user will have this in their password
      } else if (characterType[i] === "NUMBERS" && typeResults) {
        characterSelection = [].concat(numericOptions, characterSelection);
        console.log(characterSelection);
        finalArray = [].concat((numericOptions[Math.floor(Math.random()*numericOptions.length)]));
        console.log(finalArray);

        // if the user chooses they want special characters in their password, the specialOptions array will be stored in the characterSelection empty array defined globally
        // the specialOptions will be stored with the lowercaseOptions &/or uppercaseOptions / numericOptions, if they were chosen, in the characterSelection array
        // the computer will randomly choose a special character & add it to the empty finalArray defined globally to ensure user will have this in their password
      } else if (characterType[i] === "SPECIAL CHARACTERS" && typeResults) {
        characterSelection = [].concat(specialOptions, characterSelection);
        console.log(characterSelection);
        finalArray = [].concat((specialOptions[Math.floor(Math.random()*specialOptions.length)]));
        console.log(finalArray)
      }

    }

    // if the user didn't choose any of the above parameters, they will receive a message to choose at least one & the prompt will appear again
    if (characterSelection.length == 0) {
      alert("Please choose at least one option");
      generatePassword();
    }
  
    // for the remaining spaces left in the password array (length based on user's choice of password length), computer will choose characters randomly from the user selection combined array
    for(var i=finalArray.length; i<passwordLength; i++) {

      finalArray = finalArray.concat(characterSelection[Math.floor(Math.random()*characterSelection.length)]);
      console.log(finalArray);
    }

    // turn the final array into a string & return this string / randomly generated password to the user on the screen
    var finalPassword = finalArray.join("");
    console.log(finalPassword);
    return finalPassword;

  }

  // the value of the textbox where the password will be generated is equal to the value generated from the above function
  passwordText.value = password;
}

// when the user clicks the button, the writePassword function begins
generateBtn.addEventListener("click", writePassword);
