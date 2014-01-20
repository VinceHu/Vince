$(function() {

	/*	subMenu show	*/

	$('.site-menu>li').hover(function() {

		var subMenu = $(this).find('.sub-menu')

		if ($(this).children().hasClass('sub-menu')) {

			subMenu.show();
		}
	}, function() {

		$(this).find('.sub-menu').hide();

	})

	/* 		Photo Slide 		*/
	$('#slide-plane').bxSlider({

		nextSelector: '.slider-next',
		prevSelector: '.slider-prev',
		nextText: 'next',
		prevText: 'prev',
		captions: true

	});

	$('.carousel').hover(function() {

		$('#slide-ctrl').show();
	}, function() {

		$('#slide-ctrl').hide();
	})

	/*						*/
	$('.msg-item').hover(function() {

		$(this).find('.sub-msg').show()

	}, function() {

		$(this).find('.sub-msg').hide()
	})

	/*=================================================

		calendar
		CLNDR
		http://kylestetz.github.io/CLNDR/

	====================================================*/

	/*  language Settings	default Eng*/
	moment.lang('zh-cn');

	var coursedayArray = [{
		date: '2013-12-09'
	}, {
		date: '2013-12-10'
	}, {
		date: '2013-12-21'
	}, {
		date: '2013-12-25'
	}, {
		date: '2013-11-09'
	}, {
		date: '2014-01-01'
	}, ];

	$('#calendar').clndr({

		template: $('#template-calendar').html(),
		events: coursedayArray,
		clickEvents: {

			click: function(target) {
				if ($(target.element).hasClass('event')) {

					$(target.element).addClass('active').siblings().removeClass('active')

					$('.day-event').show();

					$('.month-event').hide();
				}
			},
			onMonthChange: function(month) {

				$('.month-event').show();
				$('.day-event').hide();
			}
		}
	});

	/*		video 		*/

	$(".fancybox-video").fancybox({

		maxWidth: 560,
		maxHeight: 360
	});
})