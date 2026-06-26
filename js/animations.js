// Animations Module - Scroll reveals and parallax effects

export function initAnimations() {
  // Intersection Observer for scroll reveal animations
  const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -100px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  }, observerOptions);

  // Observe all elements with reveal classes
  const revealElements = document.querySelectorAll('.reveal, .reveal-stagger');
  revealElements.forEach(el => observer.observe(el));

  // Parallax effect for hero image
  const parallaxElements = document.querySelectorAll('.parallax');
  
  if (parallaxElements.length > 0) {
    let ticking = false;
    
    window.addEventListener('scroll', () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrolled = window.pageYOffset;
          
          parallaxElements.forEach(el => {
            const speed = el.dataset.speed || 0.5;
            const yPos = scrolled * speed;
            // Preserve the centering transform while adding parallax effect
            el.style.transform = `translate(-50%, calc(-50% + ${yPos}px))`;
          });
          
          ticking = false;
        });
        
        ticking = true;
      }
    });
  }
}
