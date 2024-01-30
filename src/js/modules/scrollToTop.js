export function setupScrollToTop() {
    // Получаем кнопку по классу
    const returnBtn = document.querySelector('.return-btn');

    // Добавляем обработчик события при клике на кнопку
    returnBtn.addEventListener('click', () => {
        // Прокручиваем страницу в начало
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Для плавной прокрутки
        });
    });
}
