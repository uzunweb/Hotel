$(function(){
// Slick slider
$('.slider').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: true,
  prevArrow: '<button type="button" class="slick-prev"><img class="arrow-icon" src="images/svg/arrow-prev.svg" alt="Срелка влево"></button>',
  nextArrow: '<button type="button" class="slick-next"><img class="arrow-icon" src="images/svg/arrow-next.svg" alt="Срелка право"></button>',
  responsive: [
    { 
      breakpoint: 992,
      settings: {
        arrows: false,
      }
    }
  
  ]
});

// Magnific popup section Gallery
$('.gallery__inner').magnificPopup({
  delegate: 'a',
  type: 'image',
  gallery: {
    enabled: true,
    navigateByImgClick: true,
    preload: [0,1]
  },
});


});

// Burger menu
const burger = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuLink = document.querySelectorAll("a");

burger.addEventListener("click", () => {
  burger.classList.toggle("active");
  menu.classList.toggle("active");
});

menuLink.forEach((el) => {
  el.addEventListener("click", () => {
    burger.classList.remove("active");
    menu.classList.remove("active");
  });
});


// Прелодер
window.onload = function() {
  document.querySelector('.preloader').classList.add("preloader-remove");
};

// Кнопка показать еще

const showMore = document.querySelector('.show-more');
const cardItem = document.querySelectorAll('.gallery__item').length;
let items = 6;

showMore.addEventListener('click', () => {
  items += 3;
  const array = Array.from(document.querySelector('.gallery__inner').children);
  const visItems = array.slice(0, items);

visItems.forEach(el => el.classList.add('is-visible'));

if (visItems.length === cardItem) {
  showMore.style.display = 'none' ;
}

})


