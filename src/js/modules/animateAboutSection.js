const animateAboutSection = () => {
  const infoElement = document.querySelector('.about-section__info');
  const words = infoElement.textContent.split(' ');

  infoElement.textContent = ''; 

  words.forEach((word, index) => {
    const span = document.createElement('span');
    span.textContent = word + ' '; 
    span.style.transitionDelay = `${index * 0.1}s`; 
    infoElement.appendChild(span);
  });

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        infoElement.classList.add('animate');
        observer.disconnect();
      }
    });
  }, { threshold: 0.5 });

  observer.observe(infoElement);
};

export default animateAboutSection;