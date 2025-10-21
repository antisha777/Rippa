document.querySelectorAll('a[href^="#"]').forEach(anchor => {
   anchor.addEventListener('click', e => { 
    e.preventDefault(); // Определяем целевой элемент по якорю 
    const targetId = anchor.getAttribute('href'); 
    const targetElement = document.querySelector(targetId); 
    if (targetElement) { // Высота header 
      const headerHeight = document.querySelector('.header').offsetHeight; // Позиция элемента с учетом высоты header 
      const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - headerHeight; // Плавный скролл 
      window.scrollTo({ top: targetPosition, behavior: 'smooth' }); 
    } 
  }); 
});