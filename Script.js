// Получаем кнопку и контейнер
const Btn = document.getElementById('share');
const shareContainer = document.getElementById('shareContainer');

// Добавляем обработчик событий для клика
Btn.addEventListener('click', () => {
    // Если контейнер скрыт, то показать его, иначе скрыть
    if (shareContainer.style.display === 'flex' || shareContainer.style.display === '') {
        shareContainer.style.display = 'flex'; // Показать контейнер
    } else {
        shareContainer.style.display = 'none'; // Скрыть контейнер
    }
});