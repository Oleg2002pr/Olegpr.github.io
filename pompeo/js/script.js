// body lock
let body = document.querySelector('body');
function bodyLock() {
    body.classList.toggle('lock');
}

// burger 
let headerMenu = document.querySelector('.header__menu');
let headerBtn = document.querySelector('.mobile_menu-icon');
let headerExitBtn = document.querySelector('.mobile_exit-icon');
let headerMenuItem = document.querySelector('.menu_item');

function menuActive () {
    headerMenu.classList.toggle('active');
    headerExitBtn.classList.toggle('active');
    bodyLock();
}
headerBtn.onclick = menuActive;
headerExitBtn.onclick = menuActive;

//cart 
let cartMenu = document.querySelector('.cart-popab');
let cartBtn = document.querySelector('.menu_item.cart');

function cartMenuShow(event) {
    cartMenu.classList.toggle('active');
    document.onclick = cartMenuHide;
}
function cartMenuHide(e) {
    if ( e.target === cartMenu) {
        cartMenu.classList.remove('active');
    }
}
cartBtn.onclick = cartMenuShow;

// colection 
let colectionCard = document.querySelector('.collection__card-wrap.second');
let colectionBtn = document.querySelector('.collection__card-btn');

function colectionShow() {
    colectionCard.classList.toggle('active');
    colectionBtn.classList.add('none');
}
colectionBtn.onclick = colectionShow;

// news popab
let newsPopabBg = document.querySelector('.new_popab-bg');
let newsPopab = document.querySelector('.new_popab');
let newsPopabBtn = document.querySelector('.news_form_btn');
let newsPopabBtn_Ok = document.querySelector('.popab_btn_news');

let newsFormInput = document.querySelector('.form_input_email');
let newsFormEmailVal = document.querySelector('.popab_email_name');

// popab
function newsShowPopab(e) {
    let input_val = newsFormInput.value;
    newsFormEmailVal.innerHTML = input_val;
    newsPopabBg.classList.add('active');
    event.preventDefault();
    bodyLock();
}
function newsHidePopab(e) {
    if ( e.target ===  newsPopabBg) {
        newsPopabBg.classList.remove('active');
        bodyLock();
    }
}
function newsHidePopab_Btn () {
    newsPopabBg.classList.remove('active');
    bodyLock();
}
newsPopabBtn.onclick = newsShowPopab;
newsPopabBtn_Ok.onclick = newsHidePopab_Btn;
document.onclick = newsHidePopab;

// popab collection 

// 1
let colectPopabBg_gold = document.querySelector('.product_card-popab_bg.gold');
let colectPopabBtn_gold = document.querySelector('.card_view.gold');

function colectPopab_goldShow() { colectPopabBg_gold.classList.toggle('active'); document.onclick = colectPopab_goldHide;  bodyLock();}
function colectPopab_goldHide(e) {  if ( e.target ===  colectPopabBg_gold) {colectPopabBg_gold.classList.remove('active'); bodyLock();} }

colectPopabBtn_gold.onclick = colectPopab_goldShow;


//2
let colectPopabBg_orange = document.querySelector('.product_card-popab_bg.orange');
let colectPopabBtn_orange = document.querySelector('.card_view.orange');

function colectPopab_orangeShow() { colectPopabBg_orange.classList.toggle('active'); document.onclick = colectPopab_orangeHide;  bodyLock();}
function colectPopab_orangeHide(e) {  if ( e.target ===  colectPopabBg_orange) {colectPopabBg_orange.classList.remove('active');  bodyLock();}}

colectPopabBtn_orange.onclick = colectPopab_orangeShow;
