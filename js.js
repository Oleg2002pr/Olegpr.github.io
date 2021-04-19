window.onscroll = function scrollMenu() {
	var menu = document.querySelector('.container_menu');

	if ( window.pageYOffset > 90 ) {
		menu.classList.add('menu_scroll');
	} else {
		menu.classList.remove('menu_scroll');
	}
}

function popab_1 () {
	var popab = document.getElementById('popab_1');
	popab.classList.toggle('active');
}
function popab_2 () {
	var popab = document.getElementById('popab_2');
	popab.classList.toggle('active');
}
function popab_3 () {
	var popab = document.getElementById('popab_3');
	popab.classList.toggle('active');
}
