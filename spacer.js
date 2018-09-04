// write a function that takes in a string and inserts a space between every letter
function spacer(s){
    var o = "";
    var len = s.length;
    for(var i = 0; i < len; i++){
        o += s[i];
        o += (" ");
    }
    console.log(o);
}
spacer("cat");
spacer("Tom Brady is the best quarterback besides Deshaun Watson");