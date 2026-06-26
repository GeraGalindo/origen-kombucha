// Modal Module - Flavor popup functionality

import { flavorData } from './flavorData.js';

export function initModal() {
  const modal = document.querySelector('.modal');
  const modalContent = modal?.querySelector('.modal-content');
  const modalClose = modal?.querySelector('.modal-close');
  const modalTitle = modal?.querySelector('.modal-title');
  const modalPhrase = modal?.querySelector('.modal-phrase');
  const modalIngredientsList = modal?.querySelector('.modal-ingredients-list');
  const flavourCards = document.querySelectorAll('.flavour-card');
  
  if (!modal) return;
  
  // Open modal
  flavourCards.forEach(card => {
    card.addEventListener('click', () => {
      const flavourName = card.dataset.flavour || '';
      const flavor = flavorData[flavourName];
      
      if (flavor) {
        // Set modal title
        if (modalTitle) {
          modalTitle.textContent = flavourName;
        }
        
        // Set catchy phrase
        if (modalPhrase) {
          modalPhrase.textContent = flavor.phrase;
        }
        
        // Set ingredients list
        if (modalIngredientsList) {
          modalIngredientsList.innerHTML = '';
          flavor.ingredients.forEach(ingredient => {
            const li = document.createElement('li');
            li.textContent = ingredient;
            modalIngredientsList.appendChild(li);
          });
        }
        
        // Show modal
        modal.classList.add('active');
        document.body.classList.add('modal-open');
      }
    });
  });
  
  // Close modal function
  const closeModal = () => {
    modal.classList.remove('active');
    document.body.classList.remove('modal-open');
  };
  
  // Close button
  if (modalClose) {
    modalClose.addEventListener('click', closeModal);
  }
  
  // Click outside to close
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });
  
  // ESC key to close
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeModal();
    }
  });
  
  // Prevent body scroll when modal is open
  modal.addEventListener('wheel', (e) => {
    if (e.target === modal) {
      e.preventDefault();
    }
  }, { passive: false });
}
