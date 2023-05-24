function isClicked(a){
   var screen = document.querySelector("#screen");
   screen.value+=a;

}
function equal(){
    var screen = document.querySelector("#screen");
    var answer = eval(screen.value)
    screen.value = answer
}
function clearKey(){
    var screen = document.querySelector("#screen");
    screen.value = "";
}
function SquareRoot(){
    var screen = document.querySelector("#screen")
    screen.value = Math.sqrt(screen.value);

}
function squareKey(){
    var screen = document.querySelector("#screen");
    // screen.value = Math.pow(screen.value,2)
    screen.value = screen.value ** 2

}
function deleteKey(){
    var screen = document.querySelector("#screen");
    // screen.value = (screen.value.substr(0,screen.value.length-1))
    screen.value = screen.value.slice(0,-1)
}
setInterval(function(){
    var watch = document.querySelector("#watch");

    // collecting current time values
    var now = new Date()
    var hours = now.getHours();
    var min = now.getMinutes();
    var sec = now.getSeconds();




    watch.value=hours+":"+min +" "+sec;

},1)
