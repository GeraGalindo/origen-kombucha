// Navigation Module - Mobile menu and smooth scrolling

export function initNavigation() {
  const navToggle = document.querySelector('.nav-toggle');
  const navMenu = document.querySelector('.nav-menu');
  const navLinks = document.querySelectorAll('.nav-menu a');
  
  // Mobile menu toggle
  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');
      navToggle.classList.toggle('active');
      document.body.classList.toggle('menu-open');
    });
  }
  
  // Smooth scroll to sections
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      
      // Only handle anchor links
      if (href && href.startsWith('#')) {
        e.preventDefault();
        
        const targetId = href.substring(1);
        const targetSection = document.getElementById(targetId);
        
        if (targetSection) {
          // Close mobile menu if open
          if (navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
            document.body.classList.remove('menu-open');
          }
          
          // Smooth scroll to target
          const headerOffset = 80; // Height of fixed header
          const elementPosition = targetSection.offsetTop;
          const offsetPosition = elementPosition - headerOffset;
          
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }
    });
  });
  
  // Hide/show header on scroll
  let lastScroll = 0;
  const header = document.querySelector('.header');
  
  if (header) {
    window.addEventListener('scroll', () => {
      const currentScroll = window.pageYOffset;
      
      if (currentScroll <= 0) {
        header.style.transform = 'translateY(0)';
        return;
      }
      
      if (currentScroll > lastScroll && currentScroll > 100) {
        // Scrolling down - hide header
        header.style.transform = 'translateY(-100%)';
      } else {
        // Scrolling up - show header
        header.style.transform = 'translateY(0)';
      }
      
      lastScroll = currentScroll;
    });
  }
}
