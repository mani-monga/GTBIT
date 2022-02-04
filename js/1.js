var navlinks = document.getElementById("navlinks");

function showmenu(){
    navlinks.style.opacity = "1";
    
}
function hidemenu(){
    navlinks.style.opacity = "0";
    
}

var dd = document.getElementById("ddcontent");
var hd = document.getElementById("header");

function show(){
    dd.style.display = "flex";
    dd.style.position = "fixed";
   
    
}

function hide(){
    dd.style.display = "none";
     
}

const head = document.querySelector('.navbar')
head.style.backgroundColor = '#000000';
window.onscroll = function(){
    var top =  window.scrollY;
    if(top >= 100){
        head.style.backgroundColor = '#000b69';
    }
    else{
        head.style.backgroundColor = '#000000';
    }
}
