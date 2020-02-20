// Put your js code here
console.log("Hello World!");

window.onscroll = function() {
    stickynav();
    posIndicate();
}
var top = document.getElementById("top");
var botm = document.getElementById("about");

var navbar = document.getElementById("navbar");
var progress = document.getElementById("progContainer")
var logo = document.getElementById("logo");
var sticky = navbar.offsetTop;

function stickynav() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky");
        navbar.style.paddingBottom = "0px";
        navbar.style.paddingTop = "0px"
        logo.style.fontSize = "20px";
        progress.classList.add("stickybar");
    } else {
        navbar.classList.remove("sticky");
        navbar.style.paddingBottom = "20px";
        navbar.style.paddingTop = "20px";
        logo.style.fontSize = "30px";
        progress.classList.remove("stickybar");
    }
}


function posIndicate() {
    if (window.pageYOffset >= sticky) {
        top.style.backgroundColor = "white";
    } else {
        top.style.backgroundColor = "#F4F4F4";
    }
    
    if (window.pageYOffset < document.body.scrollHeight) {
        botm.style.backgroundColor= "white";
    } else {
        botm.style.backgroundColor= "#F4F4F4";
    }
}

var prev = document.getElementsByClassName("prev");
var next = document.getElementsByClassName("next");

prev[0].onclick = function() {
    plusSlides(-1);
}

next[0].onclick = function() {
    plusSlides(1);
}
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("slide");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
}

var item1 = document.getElementsByClassName("item1")[0];
var item2 = document.getElementsByClassName("item2")[0];
var item3 = document.getElementsByClassName("item3")[0];
var item4 = document.getElementsByClassName("item4")[0];


var span  = document.getElementsByClassName("close");
var modals = document.getElementsByClassName("modal");
var currentModal;

item1.onclick = function() {
    openModal(1);
    currentModal = 1;
}
item2.onclick = function() {
    openModal(2);
    currentModal = 2;
}

item3.onclick = function() {
    openModal(3);
    currentModal = 3;
}

item4.onclick = function() {
    openModal(4);
    currentModal = 4;
}

function openModal(n) {
    modals[n - 1].style.display = "block";
}

for (var i = 0; i < span.length; i++) {
 span[i].onclick = function() {
    for (var index in modals) {
      if (typeof modals[index].style !== 'undefined') modals[index].style.display = "none";    
    }
 }
}

window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
     for (var index in modals) {
      if (typeof modals[index].style !== 'undefined') modals[index].style.display = "none";    
     }
    }
}


top.onclick = function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // does not work on Safari
    });
}

botm.onclick = function() {
    window.scrollTo(0,document.body.scrollHeight);
}