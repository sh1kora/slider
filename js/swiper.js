// Объявление переменной для хранения экземпляра Swiper
let swiper;

// Функция инициализации Swiper
function initSwiper() {
    // Проверка ширины окна
    if (innerWidth < 768) {
        // Если Swiper еще не инициализирован
        if (!swiper) {
            // Создание нового экземпляра Swiper
            swiper = new Swiper('.swiper', {
                speed: 400, // Скорость переключения слайдов
                spaceBetween: 16, // Расстояние между слайдами
                slidesPerView: 'auto', // Количество видимых слайдов
                freeMode: true, // Свободный режим

                pagination: {
                    el: '.swiper-pagination', // Элемент пагинации
                    clickable: true, // Возможность клика по пагинации
                }
            });
        }
    } else {
        // Если Swiper уже инициализирован
        if (swiper) {
            // Уничтожение экземпляра Swiper
            swiper.destroy(true, true);
            swiper = undefined; // Сброс переменной
        }
    }
}

// Добавление обработчика события изменения размера окна
window.addEventListener('resize', initSwiper);
// Инициализация Swiper при загрузке страницы
initSwiper();

