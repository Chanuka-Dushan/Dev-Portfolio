/*=============== MOBILE MENU ===============*/
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navLinks = document.querySelectorAll('.nav__link');

// Show menu
if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('show-menu');
  });
}

// Close menu on link click
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
  });
});

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
function scrollActive() {
  const sections = document.querySelectorAll('section[id]');
  const scrollY = window.pageYOffset;

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    const sectionId = current.getAttribute('id');
    const sectionLink = document.querySelector(`.nav__link[href*="${sectionId}"]`);

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      sectionLink.classList.add('active-link');
    } else {
      sectionLink.classList.remove('active-link');
    }
  });
}

window.addEventListener('scroll', scrollActive);

/*=============== BACK TO TOP BUTTON ===============*/
function scrollUp() {
  const backToTopButton = document.getElementById('back-to-top');

  if (window.scrollY >= 300) {
    backToTopButton.classList.add('show');
  } else {
    backToTopButton.classList.remove('show');
  }
}

window.addEventListener('scroll', scrollUp);

/*=============== PROJECT FILTERS ===============*/
document.addEventListener('DOMContentLoaded', () => {
  const filterButtons = document.querySelectorAll('.projects__filter');
  const projectCards = document.querySelectorAll('.projects__card');

  // Filter projects
  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Update active button
      filterButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');

      const filter = button.getAttribute('data-filter');

      projectCards.forEach(card => {
        const categories = card.getAttribute('data-category');
        
        if (filter === 'all' || categories.includes(filter)) {
          card.style.display = 'block';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'scale(1)';
          }, 100);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'scale(0.8)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 300);
        }
      });
    });
  });
});

/*=============== CONTACT FORM ===============*/
const contactForm = document.getElementById('contact-form');

if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    
    // Basic validation
    if (!name || !email || !subject || !message) {
      alert('Please fill out all fields');
      return;
    }
    
    // For a real implementation, you would send this data to a backend or service like Formspree
    // This is a frontend-only implementation
    alert('Message sent successfully! This is a frontend-only implementation.');
    contactForm.reset();
  });
}

/*=============== CODE HIGHLIGHTING ===============*/
document.addEventListener('DOMContentLoaded', () => {
  if (window.hljs) {
    document.querySelectorAll('pre code').forEach((block) => {
      hljs.highlightBlock(block);
    });
  }
});

/*=============== ANIMATIONS ON SCROLL ===============*/
document.addEventListener('DOMContentLoaded', () => {
  if (window.AOS) {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }
});

/*=============== TYPING EFFECT ===============*/
// Simple implementation of typing effect
// In production, use a dedicated library like Typed.js
document.addEventListener('DOMContentLoaded', () => {
  const typingElement = document.getElementById('typing-text');
  if (typingElement) {
    const text = typingElement.innerText;
    typingElement.innerText = '';
    let index = 0;

    function typeWriter() {
      if (index < text.length) {
        typingElement.innerText += text.charAt(index);
        index++;
        setTimeout(typeWriter, 100);
      }
    }

    // Start the typing effect
    typeWriter();
  }
});
