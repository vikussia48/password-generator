// Random password generator

// Additional features to add:
// 1. Ability to set password length
// 2. Add copy on click
// 3. Toggle "symbols" and "numbers" on/off

// Character array to use for the password
const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S",
"T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q",
"r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`",
"!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",
".","?","/"];

let password1 = ""
let password2 = ""
let passwordEl1 = document.getElementById('password-el1')
let passwordEl2 = document.getElementById('password-el2')

function generatePassword() {
    for (let i = 0; i < 15; i += 1) {
        password1 += characters[Math.floor(Math.random() * characters.length)]
        password2 += characters[Math.floor(Math.random() * characters.length)]
    }
    passwordEl1.textContent = password1
    passwordEl2.textContent = password2
    password1 = ""
    password2 = ""
}


