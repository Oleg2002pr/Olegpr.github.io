// burger
$('.btn-nav').click(function() {
    $('.nav').toggleClass('nav-active');
    $('.body').toggleClass('body-hiden');
});
// profile
$('.profile-icon').click(function () {
	var input_profile = prompt("Ведите пороль администратора:");
	if (input_profile == 18981253) {
		alert("Вы администратор");
		window.location.href = 'admin/admin-panel.html'
	}else {
		alert("Упс, пороль не верен.");
	}
})
// preloader
$(document).ready(function () {
	$('.preloader-div, .preloader').fadeOut();
})