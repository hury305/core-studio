var dual = document.getElementById("dual")
var iphone1 = document.getElementById("iphone1")
var iphone2 = document.getElementById("iphone2")
var iphone3 = document.getElementById("iphone3")
var iphone4 = document.getElementById("iphone4")
var iphone5 = document.getElementById("iphone5")
var laptop1 = document.getElementById("laptop1")
var laptop2 = document.getElementById("laptop2")
var mac = document.getElementById("mac")
var nintendo1 = document.getElementById("nintendo1")
var nintendo2 = document.getElementById("nintendo2")
var powerstrip1 = document.getElementById("powerstrip1")
var powerstrip2 = document.getElementById("powerstrip2")
var powerstrip3 = document.getElementById("powerstrip3")
var powerstrip4 = document.getElementById("powerstrip4")
var samsung = document.getElementById("samsung")
var unknown = document.getElementById("unknown")
var wacom = document.getElementById("wacom")


var items = [dual, iphone1, iphone2, iphone3, iphone4, iphone5, laptop1, laptop2, mac, nintendo1, nintendo2, powerstrip1, powerstrip2, powerstrip3, powerstrip4, samsung, unknown, wacom];
// var first = items[0];
// document.getElementById("demo").innerHTML = first;

function addCircle() {
    for (i = 0; i < 18; i++) {                                  //run the function 10 times
        items[i].style.left = Math.random() * document.getElementById("div").clientWidth + "px";            //randomize left margin
        items[i].style.top = Math.random() * 650 + "px";             //randomize right margin
        // items[i].style.width = Math.random() * 500 + 100 + "px";          //randomize width
        // var bg = document.getElementById("bg");                 //get "bg" and assign to "bg"
        // bg.appendChild(items[i]);                                    //attach "div" to "bg"
    }
}

addCircle();

// document.getElementById("body").clientWidth;


//window inner innerWidth, https://stackoverflow.com/questions/4787527/how-to-find-the-width-of-a-div-using-vanilla-javascript