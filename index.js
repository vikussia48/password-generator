// Character array to use for the password
const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S",
"T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q",
"r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

const symbols = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",
",","|",":",";","<",">",".","?","/"]

let array = []
let password1 = ""
let password2 = ""
let passwordEl1 = document.getElementById('password-el1')
let passwordEl2 = document.getElementById('password-el2')
let toggle = document.getElementById('switch')

function generatePassword() {
    if (toggle.checked) {
        array = characters.concat(symbols)
    } else {
        array = characters
    }

    for (let i = 0; i < 15; i += 1) {
        password1 += array[Math.floor(Math.random() * array.length)]
        password2 += array[Math.floor(Math.random() * array.length)]
    }
    passwordEl1.textContent = password1
    passwordEl1.style.backgroundColor = "#E6DFF6"
    passwordEl2.textContent = password2
    passwordEl2.style.backgroundColor = "#E6DFF6"
    password1 = ""
    password2 = ""
}

passwordEl1.addEventListener("click", function() {
    navigator.clipboard.writeText(passwordEl1.textContent)
    window.alert("Text copied")
})

passwordEl2.addEventListener("click", function() {
    navigator.clipboard.writeText(passwordEl2.textContent)
    window.alert("Text copied")
})