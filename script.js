var generateEl = document.getElementById("generate")

//Set up the variable of input ID
var password=document.getElementById('password');
//Setting up the requirements for said password//
var ucArrayChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var lcArrayChars = "abcdefghijklmnopqrstuvwxyz"
var nrArrayChars = "0123456789"
var scArrayChars = "!@#$%^&*()_+-="

//What prompts is it going to ask?
var passLength = prompt("How many characters do you want to have in the password? (At least 8 to no more than 128 characters");
if (passLength >=8 && passLength <= 128) {
  var ucPrompt = confirm("Do you want to use uppercase?");
  var lcPrompt = confirm("Do you want to use lowercase?");
  var scPrompt = confirm("Do you want to use special characters?");
  var nrPrompt = confirm("Do you want to use numbers?");
}
//webpage is going to refresh if all prompts are declined and notifies user that at least one prompt must be chosen
if (lcPrompt === false && ucPrompt === false && scPrompt === false && nrPrompt === false) {
  alert("Choose at least one option.")
  location.reload()
  };
//if a prompt is chosen then an array is created for each of chosen parts based on the initial length chosen by user.
  if (ucPrompt === true) {
    var ucPassword = [];
    for (i = 0; < passLength; i++) {
      var ucArrayPassword = 0;
      ucArrayPassword = Math.floor(Math.random() * ucArrayChars.length);
      ucPassword.push(ucArrayChars[ucArrayPassword]);
    }
  }
//if a prompt is chosen then an array is created for each of chosen parts based on the initial length chosen by user.
  if (lcPrompt === true) {
    var lcpassword = [];
    for (i = 0; < passLength; i++) {
      var lcArrayPassword = 0;
      lcArrayPassword = Math.floor(Math.random() * lcArrayChars.length);
      lcPassword.push(lcArrayChars[lcArrayPassword]);
  }
}
//if a prompt is chosen then an array is created for each of chosen parts based on the initial length chosen by user.
if (scPrompt === true) {
  var scpassword = [];
  for (i = 0; < passLength; i++) {
    var scArrayPassword = 0;
    scArrayPassword = Math.floor(Math.random() * scArrayChars.length);
    scPassword.push(scArrayChars[scArrayPassword]);
  }
}
//if a prompt is chosen then an array is created for each of chosen parts based on the initial length chosen by user.
if (nrPrompt === true) {
  var nrpassword = [];
  for (i = 0; < passLength; i++) {
    var nrArrayPassword = 0;
    nrArrayPassword = Math.floor(Math.random() * nrArrayChars.length);
    nrPassword.push(nrArrayChars[nrArrayPassword]);
  }
}
//The input is validated and creates an array that gets pushed only if the values are true
var trueprompts = [];
if (ucPrompt === true) {
  trueprompts.push("Uppercase")
};
if (lcPrompts === true) {
  trueprompts.push("Lowercase")
};
if (scPrompts === true) {
  trueprompts.push("Special Characters")
};
//join all of the randomly generated arrays and filter off undefined
alert("You have chosen to create a password with: " + [trueprompts]);
var poolPass = [];
var mixedPass = poolpass.concat(ucPassword, lcPassword, nrPassword, scPassword)
var filteredPass = mixedPass.filter(function (x) {
  return x !== undefined
})

var endPassword = []
for (i = 0; i < passLength; i++) {
  var endArrayPassword = 0;
  endArrayPassword = Math.floor(Math.random() * filteredPass.length);
  endPassword.push(filteredPass[endArrayPassword]);
}
// now this is turning the array into a stronh removing all the apostrophes.
var stringEndPass = String(endPassword);
var filteredStringEndPass = stringEndPass.replaceAll(",", '');

var passwordText = document.querySelector('#password');
passwordText.textCzontent = filteredStringEndPass;
//end of function
return

//webpage is going to refresh if the user doesnt choose a value 8 to 128 therefore restarting the process
else {
    alert("Choose a number from 8 to 128")
    location.reload()
  }

  var generateBtn = document.querySelector('generate');
  generateBtn.addEventListener("click", passQuery);




// Get references to the #generate element


// Write password to the #password input


  

// Add event listener to generate button

