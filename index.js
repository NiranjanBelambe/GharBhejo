var username = localStorage.getItem('GBusername');

if(localStorage.getItem("GBusername")!==null){
  document.getElementById('signup_btn').style.display = "none";
  document.getElementById('signout_btn').style.display = "unset";
  document.getElementById('greetings').innerHTML = "Hello, " + username + '.';
}

function signout(){
  var userinput = confirm("Do you want to sign out?");
  if(userinput == true){
    localStorage.clear();
    document.getElementById('signup_btn').style.display = "unset";
    document.getElementById('signout_btn').style.display = "none";
    document.getElementById('greetings').style.display = "none";
    window.location.replace('index.html');
  }
}

var TxtRotate = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtRotate.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];
  
  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }
  
  this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';
  
  var that = this;
  var delta = 300 - Math.random() * 100;
  
  if (this.isDeleting) { delta /= 2; }
  
  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }
  
  setTimeout(function() {
    that.tick();
  }, delta);
};

window.onload = function() {
  var elements = document.getElementsByClassName('txt-rotate');
  for (var i=0; i<elements.length; i++) {
    var toRotate = elements[i].getAttribute('data-rotate');
    var period = elements[i].getAttribute('data-period');
    if (toRotate) {
      new TxtRotate(elements[i], JSON.parse(toRotate), period);
    }
  }
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
  document.body.appendChild(css);
};

var slideIndex = 0;
showSlides();
var x;
console.log(x);
function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length){
    slideIndex = 1;
  }    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 4000);
}

function getCartCount(){
  var cart_count = 0 ;
  for (var i = 0; i <= localStorage.length-1; i++) {
    if(localStorage.key(i)==="GBusername" || localStorage.key(i)==="GBusermail" || localStorage.key(i)==="GBpassword" || localStorage.key(i)==="GBphone" || localStorage.key(i)==="GBaddress" || localStorage.key(i)==="GBtotal"){
      continue;
    }
    cart_count++;
  }
  if (cart_count > 0 ) 
  {
    return "CART ("+ cart_count + ")";
  }
  return "CART ";
}

document.getElementById('cartid').innerHTML = getCartCount();