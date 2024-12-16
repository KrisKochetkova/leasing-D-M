
const tabItem = document.querySelectorAll('.tabs__btn-item');
const tabContent = document.querySelectorAll('.tabs__content-item');

tabItem.forEach(function(element){
  element.addEventListener('click', open)
})

function open(evt){
  const tabTarget = evt.currentTarget;
  const button = tabTarget.dataset.button;

  tabItem.forEach(function(item){
    item.classList.remove('tabs__btn-item--active');
  } );

  tabTarget.classList.add('tabs__btn-item--active');

  tabContent.forEach(function(item) {
    item.classList.remove('tabs__content-item--active')
  });

  document.querySelector(`#${button}`).classList.add('tabs__content-item--active');
}

const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu__list');

menuBtn.addEventListener('click', () => {
  menu.classList.toggle('menu__list--active');
});

const submitBtn = document.querySelector('.form-btn');
const form = document.querySelector('.form')
const successMsg = document.querySelector('.success-msg');

submitBtn.addEventListener('click', () => {
  successMsg.classList.toggle('success-msg--active');
  form.classList.toggle('submited-form');
});



const swiper = new Swiper(".swiper", {
  effect: "fade",
    pagination: {
      el: ".swiper-pagination",
    },
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    }
});

