var navlinks = document.getElementById("navlinks");

function showmenu(){
    navlinks.style.opacity = "1";
    
}
function hidemenu(){
    navlinks.style.opacity = "0";
    
}

var dd = document.getElementById("ddcontent");
var tb = document.getElementById("tb");

function show(){
    dd.style.display = "flex";
    tb.style.zIndex = "-1";
    
}

function hide(){
    dd.style.display = "none";
    tb.style.zIndex = "2";
}

