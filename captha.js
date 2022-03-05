var myCode = "";
var capthaCode = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*";

for(var i = 0 ; i < 16; i++) {
    myCode += capthaCode.charAt(Math.floor(Math.random() * 70));
}
console.log(myCode);