var x;
x = document.getElementById("demo");
x.style.fontSize = "25px";
x.style.color = "red";

function w3_open() {
     document.getElementById("mySidebar").style.display = "block";
     document.getElementById("myOverlay").style.display = "block";
}    
function w3_close() {
     document.getElementById("mySidebar").style.display = "none";
     document.getElementById("myOverlay").style.display = "none";
}   
function w3_show_nav(name) {
     document.getElementById("menuTut").style.display = "none";
     document.getElementById("menuRef").style.display = "none";
     document.getElementById(name).style.display = "block";
}