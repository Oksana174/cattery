// tabs
$('ul.pets__tabs-list').on('click', 'li:not(.pets__item--active)', function() {
    $(this)
      .addClass('pets__item--active').siblings().removeClass('pets__item--active')
      .closest('div.pets__wrapper').find('div.gallery').removeClass('gallery--show').eq($(this).index()).addClass('gallery--show');
});

// слайдер фотографий pets

let btnRight=document.querySelector('.pets__slider-btn--next');
let btnLeft=document.querySelector('.pets__slider-btn--prev');
let sliderPets = document.querySelector('.gallery__list');
let slides = sliderPets.querySelector('.gallery__item');

/* Устанавливаем стартовый индекс слайда по умолчанию: */
let slideIndex = 3;
/* Вызываем функцию, которая реализована ниже: */
showSlides(slideIndex);

/* Увеличиваем индекс на 1 — показываем следующий слайд: */
function nextSlide() {
    showSlides(slideIndex += 1);
}

/* Уменьшаем индекс на 1 — показываем предыдущий слайд: */
function previousSlide() {
    showSlides(slideIndex -= 1);  
}

/* Функция перелистывания: */
function showSlides(n) {
    let sliderPets = document.querySelector('.gallery--show');
    let slides = sliderPets.querySelectorAll('.gallery__item');
    
    /* Проверяем количество слайдов: */
    if (n > slides.length) {
      slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
  
    for (let slide of slides) {
        slide.classList.remove('gallery__item--active');
    }
    
    slides[slideIndex - 1].classList.add('gallery__item--active');
};

btnRight.addEventListener('click', previousSlide);
btnLeft.addEventListener('click', nextSlide);


// вопросы и ответы
let listQuestion = document.querySelectorAll('.faq__item');

for (let item of listQuestion) {
    let btnQuestion = item.querySelector('.faq__question');
    let btnAnswer = item.querySelector('.faq__answer');
    btnQuestion.addEventListener('click', function(evt) {
        evt.preventDefault ();
        if (btnQuestion.classList.contains('faq__question--active-btn')) {
            btnQuestion.classList.remove('faq__question--active-btn');
            btnAnswer.classList.remove('faq__answer--show');
        } else {
            btnQuestion.classList.add('faq__question--active-btn');
            btnAnswer.classList.add('faq__answer--show');
        }
    });
};

