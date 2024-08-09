function animations(){
  gsap.registerPlugin(ScrollTrigger);

  gsap.from(".skill",{
    scrollTrigger: {
      trigger: "#skills",
      start: "top 80%",
      toggleActions: "play",
    },
    opacity: 0,
    y: 50,
    duration: 1,
    stagger: 0.1
  })
gsap.from(".project", {
  scrollTrigger: {
    trigger: ".project",
    start: "top 80%", 
    toggleActions: "play",
  },
  opacity: 0,
  y: 50,
  duration: 1,
  stagger: 0.2 
});

document.addEventListener('DOMContentLoaded', function() {

  const loader = document.getElementById('loader');
  window.addEventListener('load', function() {
    loader.style.display = 'none';
  });

  const menuToggle = document.querySelector('.menu-toggle');
  const navMenu = document.querySelector('.nav-menu');

  menuToggle.addEventListener('click', function() {
    menuToggle.classList.toggle('open');
    navMenu.classList.toggle('open');
  });
});

const scrollProgress = document.getElementById('scroll-progress');

  window.addEventListener('scroll', function() {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
    const clientHeight = document.documentElement.clientHeight || document.body.clientHeight;

    // Calculate progress as a percentage
    const scrollPercentage = (scrollTop / (scrollHeight - clientHeight)) * 100;
    
    // Update progress bar value
    scrollProgress.value = scrollPercentage;
  });

const img = document.querySelector('#aboutme img');

img.addEventListener('mousemove', (event) => {
  const imgWidth = img.offsetWidth;
  const imgHeight = img.offsetHeight;

  const centerX = imgWidth / 2;
  const centerY = imgHeight / 2;

  const mouseX = event.offsetX;
  const mouseY = event.offsetY;

  const rotateY = (mouseX - centerX) / centerX * 10;
  const rotateX = -(mouseY - centerY) / centerY * 10;
  const rotateZ = (mouseX - centerX) / centerX * 10; 

  gsap.to(img, {
    duration: 0.3,
    rotateX: rotateX,
    rotateY: rotateY,
    rotateZ: rotateZ,
    ease: "power2.out"
  });
});

img.addEventListener('mouseleave', () => {
  gsap.to(img, {
    duration: 0.6,
    rotateX: 0,
    rotateY: 0,
    rotateZ: 0,
    ease: "power3.out"
  });
});


}
animations();


document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault(); 

  
  clearErrors();

  let isValid = true;

  const nameField = document.getElementById("name");
  const emailField = document.getElementById("email");
  const messageField = document.getElementById("message");

  if (nameField.value.trim() === "" || nameField.value.length <= 2) {
      showError(nameField, "Name is required and it should be more than 2 characters");
      isValid = false;
  }

  if (emailField.value.trim() === "") {
      showError(emailField, "Email is required.");
      isValid = false;
  } else if (!isValidEmail(emailField.value.trim())) {
      showError(emailField, "Please enter a valid email address.");
      isValid = false;
  }

  if (messageField.value.trim() === "") {
      showError(messageField, "Message is required.");
      isValid = false;
  }

  if (isValid) {
      showSuccessToast("Form submitted!, Thanks For your response")
  }
});

function showError(input, message) {
  const error = document.createElement("small");
  error.className = "error";
  error.style.color = "red";
  error.textContent = message;
  input.parentNode.insertBefore(error, input.previousSibling);
}


function showSuccessToast(textContent) {
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.textContent = textContent;

  document.body.appendChild(toast);

  setTimeout(function() {
    toast.style.opacity = "1";
  }, 100);

  setTimeout(function() {
    toast.style.opacity = "0";
    setTimeout(function() {
      toast.remove();
    }, 500);
  }, 3000);
}

function clearErrors() {
  const errors = document.querySelectorAll(".error");
  errors.forEach(function(error) {
      error.remove();
  });
}

function isValidEmail(email) {
  // email validation pattern i searched from google
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return pattern.test(email);
}
