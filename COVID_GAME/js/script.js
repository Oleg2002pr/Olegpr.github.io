$(document).ready(function () {
	
	// при клиике на кнопку играть, покажу таблицу уровней
	$('.play-btn').click(function () {
		$('.container-welcome').css('display', 'none');
		$('.container-levels').css('display', 'flex');
	});
	$('.bask-lavel-btn').click(function () {
		$('.container-levels').css('display', 'none');
		$('.container-welcome').css('display', 'flex');
	});

	$('.setings-btn').click(function () {
		$('.container-welcome').css('display', 'none');
		$('.container-setings').css('display', 'flex');
	});

	// при клике на радио кнопку, сделать только одну активной
	$('#key-radio').click(function () {
		$('#arrow-radio').prop('checked', false);
	});

	$('#arrow-radio').click(function () {
		$('#key-radio').prop('checked', false);
	});

	$('.bask-lavel-btn.setings').click(function () {
		$('.container-setings').css('display', 'none');
		$('.container-welcome').css('display', 'flex');
	});

	// При клике кнопки контролл в настойках, показать вкладку
	$('.setings-nav-item.control').click(function () {
		$('.setings-section.volume').css('display', 'none');
		$('.setings-section.control').css('display', 'flex');
		$('.setings-nav-item.volume').removeClass('active');
		$('.setings-nav-item.control').addClass('active');
		// при клике обратно
		$('.setings-nav-item.volume').click(function () {
			$('.setings-section.volume').css('display', 'flex');
			$('.setings-section.control').css('display', 'none');
			$('.setings-nav-item.volume').addClass('active');
			$('.setings-nav-item.control').removeClass('active');
		});
	});


	// Уровень 1
	// Ходьба и анимацыя 
	//var level_1_position = $('.level_player img').position();
	var w_player_level_1 = $('.level_player img').css('width');
	var h_player_level_1 = $('.level_player img').css('height');
	$('body').keyup(function(e) {
          if (e.which == 39) {
          	var level_1_position = $('.level_player img').position();
            $('.level_player img').css('left', level_1_position.left + 20 + 'px');
            $('.level_player img').attr('src', 'run.png');
            $('.level_player img').css('width', w_player_level_1);
            $('.level_player img').css('height', h_player_level_1);
          }
          if (e.which == 37) {
          	var level_1_position = $('.level_player img').position();
          	$('.level_player img').css('left', level_1_position.left - 20 + 'px');
          	$('.level_player img').attr('src', 'run_left.png');
          	$('.level_player img').css('width', w_player_level_1);
          	$('.level_player img').css('height', h_player_level_1);
          }
          if (e.which == 40) {
          	$('.level_player img').attr('src', 'stand.png');
          	$('.level_player img').css('width', w_player_level_1);
          	$('.level_player img').css('height', h_player_level_1);
          }
	});
	$('.control_btn.phone.right').click(function () {
	  var level_1_position = $('.level_player img').position();
	  $('.level_player img').css('left', level_1_position.left + 20 + 'px');
	  $('.level_player img').attr('src', 'run.png');
	  $('.level_player img').css('width', w_player_level_1);
	  $('.level_player img').css('height', h_player_level_1);
	});
	$('.control_btn.phone.left').click(function () {
		var level_1_position = $('.level_player img').position();
		$('.level_player img').css('left', level_1_position.left - 20 + 'px');
		$('.level_player img').attr('src', 'run_left.png');
		$('.level_player img').css('width', w_player_level_1);
		$('.level_player img').css('height', h_player_level_1);
	});
	$('.control_btn.phone.bottom').click(function () {
		$('.level_player img').attr('src', 'stand.png');
		$('.level_player img').css('width', w_player_level_1);
		$('.level_player img').css('height', h_player_level_1);
	});

});