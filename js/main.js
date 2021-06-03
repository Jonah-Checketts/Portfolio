window.onload = function () {setup()}

function setup() {
    document.getElementById("dropDown").style.height = "0px";
}

function dropDown() {
    var element = document.getElementById("dropDown");
    if (element.style.height === "0px") {
        element.style.height = "380px";
    } else {
        element.style.height = "0px";
    }
}

window.onscroll = function () {slideUp()}

function slideUp() {
    if (document.body.scrollTop > 275 || document.documentElement.scrollTop > 275) {
        document.getElementById("section2").style.marginTop = "700px";
        document.getElementById("section2").style.opacity = 1;
    } else {
        if(screen.width > 980){
            document.getElementById("section2").style.marginTop = "1000px"
            document.getElementById("section2").style.opacity = 0;
        }
        else{
            document.getElementById("section2").style.marginTop = "700px";
            document.getElementById("section2").style.opacity = 1;
        }
    }
}

function click1() {
    element = document.getElementById("InfoSec1");
    element.classList.toggle("big1");
}
function click2() {
    element = document.getElementById("InfoSec2");
    element.classList.toggle("big2");
}
function click3() {
    element = document.getElementById("InfoSec3");
    element.classList.toggle("big3");
}
function click4() {
    element = document.getElementById("InfoSec4");
    element.classList.toggle("big4");
}
function click5() {
    element = document.getElementById("InfoSec5");
    element.classList.toggle("big5");
}
function click6() {
    element = document.getElementById("InfoSec6");
    element.classList.toggle("big6");
}