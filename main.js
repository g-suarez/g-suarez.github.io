var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 3500); 
}

var skilNames = ["Ingles", "Coreano","Frances", "Python","Java","HTML","CSS","JavaScript","Piano","Ukelele","Canto", "Guitarra"];
var skillis = {};
var skillsArray = [];
for (let i = 0; i < 12; i++) {
    skillis.id = (i + 1);
    skillis.name = skilNames[i];
    skillsArray.push({...skillis});
}


