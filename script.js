const navLinks = document.querySelectorAll('nav ul li a'); // select all navigation link sa page nako 

//movement sa pag scoll
function onScroll() { 
  let scrollPos = window.scrollY + 90;
  navLinks.forEach(link => {
    const section = document.querySelector(link.getAttribute('href')); 
    if(!section) return;
    if(section.offsetTop <= scrollPos && (section.offsetTop + section.offsetHeight) > scrollPos) {
      link.classList.add('active'); 
    } else {
      link.classList.remove('active'); 
    }
  });
}
window.addEventListener('scroll', onScroll); // purpose ani para sa scroll event lister 

// purpose ani para sa skill section to animate the skill bars when they come into view 
const skillFills = document.querySelectorAll('.skill-fill');
function animateSkills() {
  skillFills.forEach(fill => {
    const rect = fill.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom >= 0) {
      fill.style.width = fill.style.width; 
    }
  });
}
window.addEventListener('scroll', animateSkills); // purpose ani para sa scroll sa skill section 
animateSkills();

// kani nga line of code para sa contact form para sa validation and submission sa form
const contactForm = document.getElementById('contact-form');
const successMessage = contactForm.querySelector('.success-message');
contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  if (!contactForm.checkValidity()) {
    contactForm.reportValidity();
    return;
  }
  //kani nga line of code para sa submission sa form dayun mo display ang success na message
  successMessage.style.display = 'block';
  contactForm.reset();
  setTimeout(() => {
    successMessage.style.display = 'none';
  }, 5000);
});