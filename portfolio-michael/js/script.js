// // cursor 
// let cursor = document.querySelector('.cursor'); 

// document.addEventListener('mousemove', moveCursor);
//   function  moveCursor(e) {
//     let x = e.clientX;
//     let y = e.clientY;
//     cursor.style.left = `${x}px`;
//     cursor.style.top = `${y}px`;
//   };

// let links = Array.from(document.querySelectorAll('a'));
// links.forEach((link) => {
//    link.addEventListener('mouseover', ()=> {
//      cursor.classList.add('hover');
//    });
//    link.addEventListener('mouseleave', ()=> {
//      cursor.classList.remove('hover');
//    });
// });
// let cursor_main_title = Array.from(document.querySelectorAll('h1'));
// cursor_main_title.forEach((link) => {
//   link.addEventListener('mouseover', ()=> {
//     cursor.classList.add('big');
//   });
//   link.addEventListener('mouseleave', ()=> {
//     cursor.classList.remove('big');
//   });
// });
// let cursor_h3 = Array.from(document.querySelectorAll('h3'));
// cursor_h3.forEach((link) => {
//   link.addEventListener('mouseover', ()=> {
//     cursor.classList.add('title');
//   });
//   link.addEventListener('mouseleave', ()=> {
//     cursor.classList.remove('title');
//   });
// });

// acardeon 
$('.projects__acardeon-preview').click(function (event) {
  $(this).toggleClass('active').next().slideToggle(450);
});

// slider 
var review_slider = new Swiper(".reviews__slider", {
  spaceBetween: 20,
  slidesPerView: 2,
  navigation: {
    spaceBetween: 30,
    nextEl: ".reviews__slider-button-next",
    prevEl: ".reviews__slider-button-prev",
  },
});

// mob 
let window_w = window.innerWidth;
if ( window_w < 450 ) {
	review_slider = new Swiper(".reviews__slider", {
		spaceBetween: 20,
		slidesPerView: 1,
		navigation: {
		  spaceBetween: 30,
		  nextEl: ".reviews__slider-button-next",
		  prevEl: ".reviews__slider-button-prev",
		},
	 });
}

// burger 
let nav = document.querySelector('.header__nav');
let burger = document.querySelector('.header__burger');

function mob_nav() {
	nav.classList.toggle('active');
	burger.classList.toggle('active');
}
burger.onclick =  mob_nav;

// tabs 
let tabBtn = document.querySelectorAll('.projects__tabs-btn');
let tabItem = document.querySelectorAll('.projects__tabs-item');

tabBtn.forEach(function (item) {
	item.addEventListener('click', () => {
			let currentBtn = item;
			let tabId = currentBtn.getAttribute('data-tab');
			let currentTub = document.querySelector(tabId);

			tabBtn.forEach(function (item) {
				item.classList.remove('active');
			});

			tabItem.forEach(function (item) {
				item.classList.remove('active');
			});

			currentBtn.classList.add('active');
			currentTub.classList.add('active');
		});
});