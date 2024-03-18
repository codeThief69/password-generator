const length = document.querySelector(".length");
const number = document.querySelector(".numbers");
const symbol = document.querySelector(".symbols");
const upperCase = document.querySelector(".uppercase");
const lowerCase = document.querySelector(".lowercase");
const screen = document.querySelector(".mainScreen");
const btn = document.querySelector(".btn");
const copyBtn = document.querySelector(".icon");

let numbers = "1234567890";
let symbols = "!@#$%^&*()_+:{}|?>[]\\/;";
let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowercase = uppercase.toLowerCase();
let screenValue = screen.innerText;

btn.addEventListener("click", () => {
  if (length.value > 20) {
    alert("Password is too long");
    length.value = ""
  } else {
    let mainString = "";
    screen.innerText = "";
    if (number.checked == true) {
      mainString += numbers;
    }

    if (symbol.checked == true) {
      mainString += symbols;
    }

    if (upperCase.checked == true) {
      mainString += uppercase;
    }

    if (lowerCase.checked == true) {
      mainString += lowercase;
    }

    for (let i = 0; i < length.value; i++) {
      screen.innerText +=
        mainString[Math.round(Math.random() * (mainString.length - 1))];
    }
  }
});

copyBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  let copyText = screen.innerText;
  navigator.clipboard.writeText(copyText);
});
