var randonText = "";
var randomChars = "0123456789abcdefghijklmnopqrstuvwxyz";

for(var i = 0 ; i < 8 ; i++){
    randonText += randomChars.charAt(Math.floor(Math.random() * 36));
}
alert(randonText);