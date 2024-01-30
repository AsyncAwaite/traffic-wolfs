export function initLoadMore() {
    
    const teamList = document.querySelector('.team-section__list');
    const loadMoreBtn = document.querySelector('[data-load-more]');
  
  
    if (teamList && loadMoreBtn) {
      const cardsToShowInitially = 3;
      const cards = teamList.querySelectorAll('.team-section__list-item');
  
      for (let i = cardsToShowInitially; i < cards.length; i++) {
        cards[i].style.display = 'none';
      }
  
      loadMoreBtn.addEventListener('click', function () {
        for (let i = cardsToShowInitially; i < cards.length; i++) {
          cards[i].style.display = cards[i].style.display === 'none' ? '' : 'none';
        }
  
        const buttonText = loadMoreBtn.textContent.trim();
        loadMoreBtn.textContent =
          buttonText === 'Більше спеціалістів' ? 'Сховати' : 'Більше спеціалістів';
      });
    }
  }
  
  
  