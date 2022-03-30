// Assignment Code
var generateBtn = document.querySelector("#generate");
// this is watching the button and seeing if it will be clicked or not
generateBtn.addEventListener("click", generatePassword);
// The data that would be used as the character in the password
var characters = {
  specal: ["`","!","@","#","$","%","%","^","&","*","(",")","-","_","~","=","+","[","]","{","}","|",";",":","'",",","<",".",">","/","?"],
  numbers: ["1","2","3","4","5","6","7","8","9","0"],
  uppercase: ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Z"],
  lowercase: ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","z"]
}
// global vars
var desiredselection = []
var randompassword = []
// the main function
function generatePassword() {
  // when the button is pushed the prompt and confirm chain starts
  let nunberofcharacters = prompt("Please enter number of characters you want your password to be");
  // check if the number is between 8 and 128
  if (nunberofcharacters < 8 || nunberofcharacters > 128) {
    // if not the chain stops at this message
    alert("Password Must contain at least 8 and no more than 128 characters");
    // if it is within that range it will continue down
  } else{ 
    // here to reset the password for any reruns
    var randompassword = [];
    // asking if you want your password to contain specal characters
    if (confirm("would you like your password to contain specal characters?")) {
    // asking if you want your password to contain numbers
     if (confirm("would you like your password to contain numbers?")) {
    // asking if you want your password to contain lowercase letters
      if (confirm("would you like your password to contain lowercase letters?")) {
    // asking if you want your password to contain uppercase letters
        if (confirm("would you like your password to contain uppercase letters?")) {
          // the selection of characters that was chosen
          var desiredselection =characters.lowercase.concat(characters.uppercase,characters.numbers,characters.specal)
          // for loop that goes the amount for amount of desired characters
          for (let x = 0; x < nunberofcharacters; x++) {
            var random = Math.floor(Math.random() * desiredselection.length)
            // add one character to the password for each loop
            randompassword.unshift(desiredselection[random]);
          };
          // sends new passcode to the html to display
          document.getElementById("password").innerHTML = randompassword.join('');
        } else {
          // the selection of characters that was chosen
          var desiredselection =characters.lowercase.concat(characters.numbers,characters.specal)
          // for loop that goes the amount for amount of desired characters
          for (let x = 0; x < nunberofcharacters; x++) {
            var random = Math.floor(Math.random() * desiredselection.length)
            // add one character to the password for each loop
            randompassword.unshift(desiredselection[random]);
          };
          // sends new passcode to the html to display
          document.getElementById("password").innerHTML = randompassword.join('');
        };
      } else {
        // asking if you want your password to contain uppercase letters
        if (confirm("would you like your password to contain uppercase letters?")) {
          // the selection of characters that was chosen
          var desiredselection =characters.uppercase.concat(characters.numbers,characters.specal)
          // for loop that goes the amount for amount of desired characters
          for (let x = 0; x < nunberofcharacters; x++) {
            var random = Math.floor(Math.random() * desiredselection.length)
            // add one character to the password for each loop
            randompassword.unshift(desiredselection[random]);
          };
          // sends new passcode to the html to display
          document.getElementById("password").innerHTML = randompassword.join('');
        } else {
          // the selection of characters that was chosen
          var desiredselection =characters.numbers.concat(characters.specal)
          // for loop that goes the amount for amount of desired characters
          for (let x = 0; x < nunberofcharacters; x++) {
            var random = Math.floor(Math.random() * desiredselection.length)
            // add one character to the password for each loop
            randompassword.unshift(desiredselection[random]);
          };
          // sends new passcode to the html to display
          document.getElementById("password").innerHTML = randompassword.join('');
        };
      }
  } else {
    // asking if you want your password to contain lowercase letters
    if (confirm("would you like your password to contain lowercase letters?")) {
      // asking if you want your password to contain uppercase letters
      if (confirm("would you like your password to contain uppercase letters?")) {
        // the selection of characters that was chosen
        var desiredselection =characters.lowercase.concat(characters.uppercase,characters.specal)
        // for loop that goes the amount for amount of desired characters
          for (let x = 0; x < nunberofcharacters; x++) {
            var random = Math.floor(Math.random() * desiredselection.length)
            // add one character to the password for each loop
            randompassword.unshift(desiredselection[random]);
          };
          // sends new passcode to the html to display
          document.getElementById("password").innerHTML = randompassword.join('');
      } else {
        // the selection of characters that was chosen
        var desiredselection =characters.lowercase.concat(characters.specal)
          // for loop that goes the amount for amount of desired characters
          for (let x = 0; x < nunberofcharacters; x++) {
            var random = Math.floor(Math.random() * desiredselection.length)
            // add one character to the password for each loop
            randompassword.unshift(desiredselection[random]);
          };
          // sends new passcode to the html to display
          document.getElementById("password").innerHTML = randompassword.join('');
      }
    } else {
      // asking if you want your password to contain uppercase letters
      if (confirm("would you like your password to contain uppercase letters?")) {
        // the selection of characters that was chosen
        var desiredselection =characters.uppercase.concat(characters.specal)
        // for loop that goes the amount for amount of desired characters
          for (let x = 0; x < nunberofcharacters; x++) {
            var random = Math.floor(Math.random() * desiredselection.length)
            // add one character to the password for each loop
            randompassword.unshift(desiredselection[random]);
          };
          // sends new passcode to the html to display
          document.getElementById("password").innerHTML = randompassword.join('');
      } else {
        // the selection of characters that was chosen
        var desiredselection =characters.specal
        // for loop that goes the amount for amount of desired characters
          for (let x = 0; x < nunberofcharacters; x++) {
            var random = Math.floor(Math.random() * desiredselection.length)
            // add one character to the password for each loop
            randompassword.unshift(desiredselection[random]);
          };
          // sends new passcode to the html to display
          document.getElementById("password").innerHTML = randompassword.join('');
      }
    }
  };
  } else {
    // asking if you want your password to contain numbers
    if (confirm("would you like your password to contain numbers?")) {
      // asking if you want your password to contain lowercase letters
      if (confirm("would you like your password to contain lowercase letters?")) {
        // asking if you want your password to contain uppercase letters
        if (confirm("would you like your password to contain uppercase letters?")) {
          // the selection of characters that was chosen
          var desiredselection =characters.lowercase.concat(characters.uppercase,characters.numbers)
          // for loop that goes the amount for amount of desired characters
          for (let x = 0; x < nunberofcharacters; x++) {
            var random = Math.floor(Math.random() * desiredselection.length)
            // add one character to the password for each loop
            randompassword.unshift(desiredselection[random]);
          };
          // sends new passcode to the html to display
          document.getElementById("password").innerHTML = randompassword.join('');
        } else {
          // the selection of characters that was chosen
          var desiredselection =characters.lowercase.concat(characters.numbers)
          // for loop that goes the amount for amount of desired characters
          for (let x = 0; x < nunberofcharacters; x++) {
            var random = Math.floor(Math.random() * desiredselection.length)
            // add one character to the password for each loop
            randompassword.unshift(desiredselection[random]);
          };
          // sends new passcode to the html to display
          document.getElementById("password").innerHTML = randompassword.join('');
        }
      } else {
        // asking if you want your password to contain uppercase letters
        if (confirm("would you like your password to contain uppercase letters?")) {
          // the selection of characters that was chosen
          var desiredselection =characters.numbers.concat(characters.uppercase)
          // for loop that goes the amount for amount of desired characters
          for (let x = 0; x < nunberofcharacters; x++) {
            var random = Math.floor(Math.random() * desiredselection.length)
            // add one character to the password for each loop
            randompassword.unshift(desiredselection[random]);
          };
          // sends new passcode to the html to display
          document.getElementById("password").innerHTML = randompassword.join('');
        } else {
          // the selection of characters that was chosen
          var desiredselection =characters.numbers
          // for loop that goes the amount for amount of desired characters
          for (let x = 0; x < nunberofcharacters; x++) {
            var random = Math.floor(Math.random() * desiredselection.length)
            // add one character to the password for each loop
            randompassword.unshift(desiredselection[random]);
          };
          // sends new passcode to the html to display
          document.getElementById("password").innerHTML = randompassword.join('');
        }
      }
    } else {
      // asking if you want your password to contain lowercase letters
      if (confirm("would you like your password to contain lowercase letters?")) {
        // asking if you want your password to contain uppercase letters
        if (confirm("would you like your password to contain uppercase letters?")) {
          // the selection of characters that was chosen
          var desiredselection =characters.lowercase.concat(characters.uppercase)
          // for loop that goes the amount for amount of desired characters
          for (let x = 0; x < nunberofcharacters; x++) {
            var random = Math.floor(Math.random() * desiredselection.length)
            // add one character to the password for each loop
            randompassword.unshift(desiredselection[random]);
          };
          // sends new passcode to the html to display
          document.getElementById("password").innerHTML = randompassword.join('');
        } else {
          // the selection of characters that was chosen
          var desiredselection =characters.lowercase
          // for loop that goes the amount for amount of desired characters
          for (let x = 0; x < nunberofcharacters; x++) {
            var random = Math.floor(Math.random() * desiredselection.length)
            // add one character to the password for each loop
            randompassword.unshift(desiredselection[random]);
          };
          // sends new passcode to the html to display
          document.getElementById("password").innerHTML = randompassword.join('');
        }
      } else {
        // asking if you want your password to contain uppercase letters
        if (confirm("would you like your password to contain uppercase letters?")) {
          // the selection of characters that was chosen
          var desiredselection =characters.uppercase
          // for loop that goes the amount for amount of desired characters
          for (let x = 0; x < nunberofcharacters; x++) {
            var random = Math.floor(Math.random() * desiredselection.length)
            // add one character to the password for each loop
            randompassword.unshift(desiredselection[random]);
          };
          // sends new passcode to the html to display
          document.getElementById("password").innerHTML = randompassword.join('');
        } 
      }
    }
  }}
}