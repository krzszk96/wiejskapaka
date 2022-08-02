
var meatModal = document.getElementById("meatModal"); // Get the modal
var btnh = document.getElementById("meatBtn"); // Get the button that opens the modal

btnh.onclick = function() {
  meatModal.style.display = "block";
}
var span = document.getElementsByClassName("close")[0];
span.onclick = function() {
  meatModal.style.display = "none";
}

//wine
var wineModal = document.getElementById("wineModal"); 
var btns = document.getElementById("wineBtn"); 
btns.onclick = function() {
  wineModal.style.display = "block";
}
var span = document.getElementsByClassName("close")[1];
span.onclick = function() {
  wineModal.style.display = "none";
}

//juice
var rasberryModal = document.getElementById("rasberryModal"); 
var btnp = document.getElementById("aronBtn"); 
btnp.onclick = function() {
  rasberryModal.style.display = "block";
}
var span = document.getElementsByClassName("close")[2];
span.onclick = function() {
  rasberryModal.style.display = "none";
}

//cherries
var honeyModal = document.getElementById("honeyModal"); 
var btnc = document.getElementById("cherryBtn"); 
btnc.onclick = function() {
  honeyModal.style.display = "block";
}
var span = document.getElementsByClassName("close")[3];
span.onclick = function() {
  honeyModal.style.display = "none";
}

//last
var fishModal = document.getElementById("fishModal"); 
var btnc = document.getElementById("honey"); 
btnc.onclick = function() {
  fishModal.style.display = "block";
}
var span = document.getElementsByClassName("close")[4];
span.onclick = function() {
  fishModal.style.display = "none";
}