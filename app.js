var navLinks = document.getElementById("navLinks");

function showMenu(){
    navLinks.style.visibility = "visible";
    navLinks.style.right = "0";
}
function hideMenu(){
    navLinks.style.right = "-200px";
    navLinks.style.visibility= "hidden";
}
