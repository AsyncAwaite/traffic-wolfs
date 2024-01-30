const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const listItem = entry.target;
      listItem.classList.add('animate');
    }
  });
}, { threshold: 0.5 });

function animateListItems(selector, delay = 0) {
  const listItems = document.querySelectorAll(selector);

  listItems.forEach((listItem, index) => {
    setTimeout(() => {
      observer.observe(listItem);
    }, delay * index);
  });
}

export default animateListItems;