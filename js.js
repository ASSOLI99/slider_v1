var slideIndex = 1;
showSlides(slideIndex);
// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}
// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}
function leftRight(e){
    if(e.keyCode===39){
        plusSlides(1);
    }
    if(e.keyCode===37){
        plusSlides(-1);
    }
}
document.addEventListener("keydown",leftRight);

function showSlides() {
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
if(slideIndex>=slides.length){
    slideIndex=0;
}
if(slideIndex<0){
    slideIndex=slides.length-1;
}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex].style.display = "block";
  dots[slideIndex].className += " active";
} 