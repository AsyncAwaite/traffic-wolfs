export default function animateWhyUsSection() {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const listItem = entry.target;
          listItem.classList.add('animate-item'); // Добавляем класс с анимацией
        }
      });
    }, { threshold: 0.5 });
  
    const listItems = document.querySelectorAll('.why-us-section__list-item');
  
    listItems.forEach((item, index) => {
      observer.observe(item);
      item.style.transitionDelay = `${index * 0.2}s`;
    });
  }
  