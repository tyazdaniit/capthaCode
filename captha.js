let myCaptha = document.querySelector("h1");

let myCode = "";
let capthaCode =
  "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*";

for (let i = 0; i < 16; i++) {
  myCode += capthaCode.charAt(Math.floor(Math.random() * 70));
}

myCaptha.innerHTML = myCode;
