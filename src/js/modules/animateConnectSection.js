const animateSpan = async (span) => {
  const words = span.textContent.split(" ");

  span.innerHTML = "";

  words.forEach((word, index) => {
    const wordSpan = document.createElement("span");
    wordSpan.textContent = word + " ";
    wordSpan.style.transitionDelay = `${index * 0.1}s`;
    span.appendChild(wordSpan);
  });

  return new Promise((resolve) => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            span.classList.add("animate");
            observer.disconnect();
            setTimeout(resolve, words.length * 100);
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(span);
  });
};

export const animateConnectSectionBottom = async () => {
  const infoElement = document.querySelector(".connect-section-bottom__info");
  const spans = infoElement.querySelectorAll("span");

  for (const span of spans) {
    await animateSpan(span);
  }
};

export const animateConnectSection = async () => {
  const infoElement = document.querySelector(".connect-section__info");
  const spans = infoElement.querySelectorAll("span");

  for (const span of spans) {
    await animateSpan(span);
  }
};