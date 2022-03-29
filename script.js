// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  // var password = 
  generatePassword();
  // var passwordText = document.querySelector("#password");

  // passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

var characters = {
  specal: ["`","!","@","#","$","%","%","^","&","*","(",")","-","_","~","=","+","[","]","{","}","|",";",":","'",",","<",".",">","/","?"],
  numbers: ["1","2","3","4","5","6","7","8","9","0"],
  uppercase: ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Z"],
  lowercase: ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","z"],
}
var desiredselection = []
var randompassword = []
function generatePassword() {
  let nunberofcharacters = prompt("Please enter number of characters you want your password to be");
  if (nunberofcharacters < 8 || nunberofcharacters > 128 ) {
    alert("Password Must contain at least 8 and no more than 128 characters");
  } else{ 
    var randompassword = [];
    if (confirm("would you like your password to contain specal characters?")) {
    
     if (confirm("would you like your password to contain numbers?")) {

      if (confirm("would you like your password to contain lowercase letters?")) {

        if (confirm("would you like your password to contain uppercase letters?")) {
          var desiredselection =characters.lowercase.concat(characters.uppercase,characters.numbers,characters.specal)
          for (let x = 0; x < nunberofcharacters; x++) {
            var random = Math.floor(Math.random() * desiredselection.length)
            randompassword.unshift(desiredselection[random]);
          };
          document.getElementById("password").innerHTML = randompassword.join('');
        } else {
          var desiredselection =characters.lowercase.concat(characters.numbers,characters.specal)
          console.log(desiredselection);
          for (let x = 0; x < nunberofcharacters; x++) {
            var random = Math.floor(Math.random() * desiredselection.length)
            randompassword.unshift(desiredselection[random]);
          };
          document.getElementById("password").innerHTML = randompassword.join('');
        };
      } else {
        if (confirm("would you like your password to contain uppercase letters?")) {
          var desiredselection =characters.uppercase.concat(characters.numbers,characters.specal)
          for (let x = 0; x < nunberofcharacters; x++) {
            var random = Math.floor(Math.random() * desiredselection.length)
            randompassword.unshift(desiredselection[random]);
          };
          document.getElementById("password").innerHTML = randompassword.join('');
        } else {
          var desiredselection =characters.numbers.concat(characters.specal)
          console.log(desiredselection);
          for (let x = 0; x < nunberofcharacters; x++) {
            var random = Math.floor(Math.random() * desiredselection.length)
            randompassword.unshift(desiredselection[random]);
          };
          document.getElementById("password").innerHTML = randompassword.join('');
        };
      }
  } else {
    if (confirm("would you like your password to contain lowercase letters?")) {
      if (confirm("would you like your password to contain uppercase letters?")) {
        var desiredselection =characters.lowercase.concat(characters.uppercase,characters.specal)
          for (let x = 0; x < nunberofcharacters; x++) {
            var random = Math.floor(Math.random() * desiredselection.length)
            randompassword.unshift(desiredselection[random]);
          };
          document.getElementById("password").innerHTML = randompassword.join('');
      } else {
        var desiredselection =characters.lowercase.concat(characters.specal)
          console.log(desiredselection);
          for (let x = 0; x < nunberofcharacters; x++) {
            var random = Math.floor(Math.random() * desiredselection.length)
            randompassword.unshift(desiredselection[random]);
          };
          document.getElementById("password").innerHTML = randompassword.join('');
      }
    } else {
      if (confirm("would you like your password to contain uppercase letters?")) {
        var desiredselection =characters.uppercase.concat(characters.specal)
          for (let x = 0; x < nunberofcharacters; x++) {
            var random = Math.floor(Math.random() * desiredselection.length)
            randompassword.unshift(desiredselection[random]);
          };
          document.getElementById("password").innerHTML = randompassword.join('');
      } else {
        var desiredselection =characters.specal
          for (let x = 0; x < nunberofcharacters; x++) {
            var random = Math.floor(Math.random() * desiredselection.length)
            randompassword.unshift(desiredselection[random]);
          };
          document.getElementById("password").innerHTML = randompassword.join('');
      }
    }
  };
  } else {
    if (confirm("would you like your password to contain numbers?")) {
      if (confirm("would you like your password to contain lowercase letters?")) {
        if (confirm("would you like your password to contain uppercase letters?")) {
          var desiredselection =characters.lowercase.concat(characters.uppercase,characters.numbers)
          for (let x = 0; x < nunberofcharacters; x++) {
            var random = Math.floor(Math.random() * desiredselection.length)
            randompassword.unshift(desiredselection[random]);
          };
          document.getElementById("password").innerHTML = randompassword.join('');
        } else {
          var desiredselection =characters.lowercase.concat(characters.numbers)
          for (let x = 0; x < nunberofcharacters; x++) {
            var random = Math.floor(Math.random() * desiredselection.length)
            randompassword.unshift(desiredselection[random]);
          };
          document.getElementById("password").innerHTML = randompassword.join('');
        }
      } else {
        if (confirm("would you like your password to contain uppercase letters?")) {
          var desiredselection =characters.numbers.concat(characters.uppercase)
          for (let x = 0; x < nunberofcharacters; x++) {
            var random = Math.floor(Math.random() * desiredselection.length)
            randompassword.unshift(desiredselection[random]);
          };
          document.getElementById("password").innerHTML = randompassword.join('');
        } else {
          var desiredselection =characters.numbers
          for (let x = 0; x < nunberofcharacters; x++) {
            var random = Math.floor(Math.random() * desiredselection.length)
            randompassword.unshift(desiredselection[random]);
          };
          document.getElementById("password").innerHTML = randompassword.join('');
        }
      }
    } else {
      if (confirm("would you like your password to contain lowercase letters?")) {
        if (confirm("would you like your password to contain uppercase letters?")) {
          var desiredselection =characters.lowercase.concat(characters.uppercase)
          for (let x = 0; x < nunberofcharacters; x++) {
            var random = Math.floor(Math.random() * desiredselection.length)
            randompassword.unshift(desiredselection[random]);
          };
          document.getElementById("password").innerHTML = randompassword.join('');
        } else {
          var desiredselection =characters.lowercase
          for (let x = 0; x < nunberofcharacters; x++) {
            var random = Math.floor(Math.random() * desiredselection.length)
            randompassword.unshift(desiredselection[random]);
          };
          document.getElementById("password").innerHTML = randompassword.join('');
        }
      } else {
        if (confirm("would you like your password to contain uppercase letters?")) {
          var desiredselection =characters.uppercase
          for (let x = 0; x < nunberofcharacters; x++) {
            var random = Math.floor(Math.random() * desiredselection.length)
            randompassword.unshift(desiredselection[random]);
          };
          document.getElementById("password").innerHTML = randompassword.join('');
        } 
      }
    }
  }}
}
