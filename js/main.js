// Main JavaScript Entry Point - Origen Kombucha

import { initAnimations } from './animations.js';
import { initNavigation } from './navigation.js';
import { initModal } from './modal.js';

// Initialize all modules when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  initAnimations();
  initNavigation();
  initModal();
  
  console.log('Origen Kombucha website initialized');
});
