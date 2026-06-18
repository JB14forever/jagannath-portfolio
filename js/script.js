/* ==========================================
   Jagannath Barik - Data Analyst Portfolio JS
   ========================================== */

document.addEventListener('DOMContentLoaded', () => {
  // --- Theme Toggle Functionality ---
  const themeToggleBtn = document.getElementById('theme-toggle');
  const htmlElement = document.documentElement;
  
  // Check localStorage or system preference
  const savedTheme = localStorage.getItem('theme');
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
    htmlElement.setAttribute('data-theme', 'dark');
  } else {
    htmlElement.setAttribute('data-theme', 'light');
  }
  
  themeToggleBtn.addEventListener('click', () => {
    const currentTheme = htmlElement.getAttribute('data-theme');
    let newTheme = 'light';
    
    if (currentTheme === 'light') {
      newTheme = 'dark';
    }
    
    htmlElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  });

  // --- Mobile Hamburger Menu ---
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('nav-links');
  
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    navLinks.classList.toggle('open');
  });

  // Close menu when a link is clicked
  const navLinkElements = document.querySelectorAll('.nav-link');
  navLinkElements.forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('open');
      navLinks.classList.remove('open');
    });
  });

  // --- Smooth Scrolling & Active Link Highlighting ---
  const sections = document.querySelectorAll('section');
  const navLinksList = document.querySelectorAll('.nav-link');
  
  const scrollActive = () => {
    const scrollY = window.pageYOffset;
    
    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 80; // offset for sticky navbar
      const sectionId = current.getAttribute('id');
      
      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        document.querySelector(`.nav-link[href*=${sectionId}]`)?.classList.add('active');
      } else {
        document.querySelector(`.nav-link[href*=${sectionId}]`)?.classList.remove('active');
      }
    });
  };
  
  window.addEventListener('scroll', scrollActive);

  // --- Scroll Reveal Animations ---
  // Add an entry animation to elements as they enter the screen
  const revealElements = document.querySelectorAll(
    '.project-card, .skills-card, .timeline-item, .education-card, .highlight-card, .resume-box, .contact-card'
  );
  
  // Set up initial style for animation
  revealElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
  });
  
  const revealOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target); // only animate once
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });
  
  revealElements.forEach(el => {
    revealOnScroll.observe(el);
  });
});
