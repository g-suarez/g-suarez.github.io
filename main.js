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

const keys = document.querySelectorAll('.key')
const whiteKeys = document.querySelectorAll('.key.white')
const blackKeys = document.querySelectorAll('.key.black')
text = document.getElementById("skillNotes")
index = 0;

keys.forEach(key => {
  key.addEventListener('click', () => playNote(key))
  
})

keys.forEach(key => {
key.addEventListener('click', changeText) 
  text.innerHTML = skillsArray[0].name;
  
})


function changeText() {
    index++;
    index %= skillsArray.length
    text.innerHTML = skillsArray[index].name;
}

function playNote(key) {
  const noteAudio = document.getElementById(key.dataset.note)
  noteAudio.currentTime = 0
  noteAudio.play()
  key.classList.add('active')
  

  noteAudio.addEventListener('ended', () => {
    key.classList.remove('active')
  })
}

function validateForm()                                    
{ 
    var name = document.forms["myForm"]["name"];               
    var email = document.forms["myForm"]["email"];    
    var message = document.forms["myForm"]["message"];   
   
    if (name.value == "")                                  
    { 
        document.getElementById('errorname').innerHTML="No deje el campo vacío";  
        name.focus(); 
        return false; 
    }else{
        document.getElementById('errorname').innerHTML="";  
    }
       
    if (email.value == "")                                   
    { 
        document.getElementById('erroremail').innerHTML="No deje el campo vacío"; 
        email.focus(); 
        return false; 
    }else{
        document.getElementById('erroremail').innerHTML="";  
    }
   
    if (email.value.indexOf("@", 0) < 0)                 
    { 
        document.getElementById('erroremail').innerHTML="Por favor introduzca un correo válido"; 
        email.focus(); 
        return false; 
    } 
   
    if (email.value.indexOf(".", 0) < 0)                 
    { 
        document.getElementById('erroremail').innerHTML="Por favor introduzca un correo válido"; 
        email.focus(); 
        return false; 
    } 
   
    if (message.value == "")                           
    {
        document.getElementById('errormsg').innerHTML="No deje el campo vacío"; 
        message.focus(); 
        return false; 
    }else{
        document.getElementById('errormsg').innerHTML="";  
    }
   
    alert("Su solicitud ha sido enviada");
}

