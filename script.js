var passwordEl = document.getElementById('password');

    //Assigning values to the variables
    var length = "";
    var specialCharacters = '!@#$%^&*()_+~`|}{[];?><,./-=';
    var numeric = '0123456789';
    var lowercase = "abcdefghijklmnopqrstuvwxyz";
    var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var characters = ""; 
    var password = "";

  function passwordGenerator() {
    //establising length and a true - false value for the other  password variables
    var passwordLength = prompt("How long should your password be? (Pick a number between 8 and 128)");
    var passwordSpecialCharacters = confirm ("Do you want to use special characters?");
    var passwordNumeric = confirm ("Do you want to use numbers?");
    var passwordLowercase = confirm ("Do you want to use lowercase letters?");
    var passwordUppercase = confirm ("Do you want to use uppercase letters?");

    //checking the user input values
    console.log('Password Length: ' + passwordLength);
    console.log('Special Characters: ' + passwordSpecialCharacters);
    console.log('Numbers: ' + passwordNumeric);
    console.log('Lowercase: ' + passwordLowercase);
    console.log('Uppercase: ' + passwordUppercase);

    // Checking if the variables should be included or not
    if (passwordSpecialCharacters === true){
      passwordSpecialCharacters = specialCharacters}
      else {passwordSpecialCharacters = "";
    };
    console.log('Special Characters: ' + passwordSpecialCharacters);
    if (passwordNumeric === true){
      passwordNumeric = numeric}
      else {passwordNumeric = "";
    };
    console.log('Numbers: ' + passwordNumeric);
    if (passwordLowercase === true){
      passwordLowercase = lowercase}
      else {passwordLowercase = "";
    };
    console.log('Lowercase: ' + passwordLowercase);
    if (passwordUppercase === true){
      passwordUppercase = uppercase}
      else {passwordUppercase = "";
    };
    console.log('Uppercase: ' + passwordUppercase);
    // combined character list
    characters = passwordSpecialCharacters + passwordNumeric + passwordLowercase + passwordUppercase;
    console.log('Characters: ' + characters);

    //generating the password
    for (var i = 0; i < passwordLength; i++) {
		password += characters.charAt(
       Math.floor(Math.random() * characters.length)
    );
	}
    // adding vlue to the text area 
    console.log('Password: ' + password);
    passwordEl.value = password
}


//copying the password to the clipboard
function copyPassword(){
  document.getElementById("password").select();
  document.execCommand("Copy");
  alert ("Password as been copied to your clipboard!");
}