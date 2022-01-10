$(document).ready(function () {
	//preloader
	$('.preloader').fadeOut();
	//burger 
	$('.burger-btn').click(function () {
		$('.burger-btn, .nav').toggleClass('active');
	});
	//TABS PORTFOLIO
	$('.box-ture').fadeOut();
	$('.box-house').fadeOut();
	$('.box-table').fadeOut();
	$('.box-other').fadeOut();
	$('.swich-more').click(function () {
		$('.box-more').fadeIn();
		$('.box-ture, .box-house, .box-table, .box-other').hide();
		$('.swich-more').addClass('active');
		$('.swich-ture, .swich-house, .swich-table, .swich-other').removeClass('active');
	});
	$('.swich-ture').click(function () {
		$('.box-ture').fadeIn();
		$('.box-more, .box-house, .box-table, .box-other').hide();
		$('.swich-ture').addClass('active');
		$('.swich-more, .swich-house, .swich-table, .swich-other').removeClass('active');
	});
	$('.swich-house').click(function () {
		$('.box-house').fadeIn();
		$('.box-more, .box-ture, .box-table, .box-other').hide();
		$('.swich-house').addClass('active');
		$('.swich-more, .swich-ture, .swich-table, .swich-other').removeClass('active');
	});
	$('.swich-table').click(function () {
		$('.box-table').fadeIn();
		$('.box-more, .box-ture, .box-house, .box-other').hide();
		$('.swich-table').addClass('active');
		$('.swich-more, .swich-ture, .swich-house, .swich-other').removeClass('active');
	});
	$('.swich-other').click(function () {
		$('.box-other').fadeIn();
		$('.box-more, .box-ture, .box-house, .box-table').hide();
		$('.swich-other').addClass('active');
		$('.swich-more, .swich-ture, .swich-house, .swich-table').removeClass('active');
	});
	//SM VERSIONS TABS
	$(window).resize(function () {
		if ($(window).width() < 631) {
			$('.swich-other, .swich-table, .swich-house, .swich-ture, .swich-more').click(function () {
				$('.portfolio-row-sm').fadeOut();
				$('.btn-portfolio-more-bask').fadeOut();
				$('.btn-portfolio-more').fadeIn();
			});
			$('.btn-portfolio-more').click(function () {
				$('.portfolio-row-sm').fadeIn(200);
				$('.btn-portfolio-more').css("display", "none");
				$('.btn-portfolio-more-bask').fadeIn();
			});
			$('.btn-portfolio-more-bask').click(function () {
				$('.portfolio-row-sm').fadeOut(200);
				$('.btn-portfolio-more-bask').css("display", "none");
				$('.btn-portfolio-more').fadeIn();
			});
		} else {
			$('.portfolio-row-sm').fadeIn();
		}
	});
});