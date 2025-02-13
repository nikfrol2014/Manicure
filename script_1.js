const serviceTypeButtons = document.querySelectorAll('.service-type-selector button');
const masterTypeButtons = document.querySelectorAll('.master-type');
const serviceContents = document.querySelectorAll('.service-content');

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////-----------------ПРАЙС НА УСЛУГИ-----------------//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Обработчик клика по кнопкам выбора услуги
serviceTypeButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Убираем класс "active" у всех кнопок выбора услуги
        serviceTypeButtons.forEach(b => b.classList.remove('active'));

        // Добавляем класс "active" к текущей кнопке
        button.classList.add('active');

        // Определяем выбранную услугу
        const selectedService = button.dataset.service;

        // Обновляем прайс-лист
        updatePriceTable(selectedService);
    });
});



// Функция для обновления прайса
function updatePriceTable(selectedService) {
    // Скрываем все секции прайса
    serviceContents.forEach(content => {
        content.classList.remove('active');
    });

    // Показываем выбранную секцию
    const selectedContent = document.querySelector(`.service-content[data-service="${selectedService}"]`);
    selectedContent.classList.add('active');
}


// Для кнопок логика изначального выделения
serviceTypeButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Убираем класс "active" у всех кнопок выбора услуги
        serviceTypeButtons.forEach(b => b.classList.remove('active'));
        button.classList.add('active');
        const selectedService = button.dataset.service;
        updatePriceTable(selectedService);
    });
});
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////-----------------ПОРТФОЛИО-----------------//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const sliderInner = document.querySelector('.slider-inner');
const slides = document.querySelectorAll('.slide');
const prevButton = document.querySelector('.slider-prev');
const nextButton = document.querySelector('.slider-next');
let currentSlide = 0;
let autoplayInterval;

nextButton.addEventListener('click', () => {
    clearInterval(autoplayInterval);
    currentSlide = (currentSlide + 1) % slides.length;
    updateSlider();
    startAutoplay();
});

prevButton.addEventListener('click', () => {
    clearInterval(autoplayInterval);
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    updateSlider();
    startAutoplay();
});

function updateSlider() {
    slides.forEach(slide => slide.classList.remove('active'));
    slides[currentSlide].classList.add('active');
}

function startAutoplay() {
    autoplayInterval = setInterval(() => {
        nextButton.click();
    }, 4000);
}

window.addEventListener('load', startAutoplay);


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////-----------------Человеческий скролл-----------------////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
      link.addEventListener('click', function(event) {
        event.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth' // Плавный скроллинг
          });
        }
      });
    });
  });


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////-----------------Человеческий скролл (при нажатии на лого)-----------------///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  document.querySelector('.logo').addEventListener('click', function(event) {
    event.preventDefault(); // Предотвращаем стандартное поведение ссылки
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Плавный скроллинг
    });
  });

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////-----------------ВЫПАДАЮЩЕЕ МЕНЮ-----------------///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const menuToggle = document.querySelector('.menu-toggle');
const mainNav = document.querySelector('.main-nav');

menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('active');
});