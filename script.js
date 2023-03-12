// Assignment code here
//Generating random lower case letters to use for the generator
function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
//Generating random upper case letters to use for the generator
function getRandomUpper() {
return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
  return string.fromCharCode(Math.floor(Math.random["0,1,2,3,4,5,6,7,8,9"]
}

function getRandomSymbol() {
  const symbol = ["!,@,#,$,%,^,&,*,(,)"];
  return symbols[Math.floor(Math.random() * symbols.length)];

}

console.log(getRandomNumber());
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
