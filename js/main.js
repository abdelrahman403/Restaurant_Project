/*global $, document, window*/

$(document).ready(function () {
    'use strict';
	var clicked = false,
		$header = $("header"),
		$mainSection = $(".main-section");
	
	/* toggle closing and opening when click on burger icon */
    $header.find("nav .nav-btn").click(function () {
		var $this = $(this);
		if (!clicked) {
			clicked = true;
			$this.parent().toggleClass("active");
			setTimeout(function () {
				clicked = false;
			}, 1450);
		}
	});
	
	/* close navbar when click in any place in document */
	$(document).on('click', function (e) {
		// e.target -> return the place that i clicked on it in document
		// e1.closest('e2') -> check if e1 parent for e2 and return the element but .length return 0 1
		
		var $clickover = $(e.target),
			$nav = $('nav');
		if (!clicked) {
			clicked = true;
			if (!$clickover.closest('header').length && $nav.hasClass('active')) {
				$nav.removeClass('active');
			}
			setTimeout(function () {
				clicked = false;
			}, 1450);
		}
	});
	
	/* toggle closing and opening sticky navbar */
	$(window).scroll(function () {
		console.log($(this).scrollTop());
		if ($(this).scrollTop() >= 150) {
			$header.addClass("sticky");
		} else {
			$header.removeClass("sticky");
		}
	});
	
	/* slider function */
	function menuSlider() {
		
		var $sliderContainer = $('.menu-section .menu-slider'),
			$slider = $sliderContainer.find('.slider'),
			$sliderBanner = $sliderContainer.find('.slider-banner'),
			$sliderItems = $sliderBanner.find('.slider-item'),
			itemsLength = $sliderItems.length,
			$nextArrow = $sliderContainer.find('.arrow.next'),
			$prevArrow = $sliderContainer.find('.arrow.prev');
		
		
		var slidesToShow = 3;
		var	activeSlides = slidesToShow;
		
		
		function responsiveSlides(){
			activeSlides -= slidesToShow;
			if ($(window).width() <= 991 && $(window).width() > 550) {
				slidesToShow = 2;
			} else if ($(window).width() <= 550) {
				slidesToShow = 1;
			} else {
				slidesToShow = 3;
			}
			activeSlides += slidesToShow;
		}
		responsiveSlides();
		
		
		$sliderItems.outerWidth(parseInt($slider.width() / slidesToShow));
		
		var itemWidth,
			itemsWidth;
		
		function fixWidth () {
			itemWidth = $('.menu-slider .slider-item').outerWidth();
			itemsWidth = itemsLength * itemWidth;
			$sliderBanner.width(itemsWidth);
		}
		fixWidth();
		
		function leftCalc() {
			return itemWidth * itemMove;
		}

		$(window).resize(function () {
			
			responsiveSlides();
			
			$sliderItems.outerWidth(parseInt($slider.width() / slidesToShow));
			fixWidth();
			
			$sliderBanner.css('left', -leftCalc());
		});
		
		var left = 0,
			itemMove = 0,
			clicked = false;
		
		function checkStatus () {
			if(activeSlides == itemsLength) {
				$nextArrow.addClass('disabled');
			} else {
				$nextArrow.removeClass('disabled');
			}
			
			if(activeSlides == slidesToShow) {
				$prevArrow.addClass('disabled');
			} else {
				$prevArrow.removeClass('disabled');
			}
		}
		checkStatus();
		
		$nextArrow.click(function () {
			if (!clicked) {
				
				if (activeSlides != itemsLength) {
					clicked = true;
					itemMove++;
					left = -leftCalc();
					$sliderBanner.css('left', left);
					activeSlides++;
					setTimeout(function() {
						clicked = false;
					}, 400);
					checkStatus();
				}
			}
		});
		$prevArrow.click(function () {
			if(!clicked) {
				
				if (activeSlides > slidesToShow) {
					clicked = true;
					itemMove--;
					left = -leftCalc();
					$sliderBanner.css('left', left);
					activeSlides--;
					setTimeout(function() {
						clicked = false;
					}, 400);
					checkStatus();
				}
			}
		});

	}
	menuSlider();
	
	/* slider function */
	function chiefSlider() {
		
		var $sliderContainer = $('.chief-testimonials .chief-slider'),
			$slider = $sliderContainer.find('.slider'),
			$sliderBanner = $sliderContainer.find('.slider-banner'),
			$sliderItems = $sliderBanner.find('.slider-item'),
			itemsLength = $sliderItems.length,
			$nextArrow = $sliderContainer.find('.arrow.next'),
			$prevArrow = $sliderContainer.find('.arrow.prev');
		
		
		var slidesToShow = 1;
		var	activeSlides = slidesToShow;
		
		
		
		$sliderItems.outerWidth(parseInt($slider.width() / slidesToShow));
		
		var itemWidth,
			itemsWidth;
		
		function fixWidth () {
			itemWidth = $('.chief-slider .slider-item').outerWidth();
			itemsWidth = itemsLength * itemWidth;
			$sliderBanner.width(itemsWidth);
		}
		fixWidth();
		
		function leftCalc() {
			return itemWidth * itemMove;
		}

		$(window).resize(function () {
			
			$sliderItems.outerWidth(parseInt($slider.width() / slidesToShow));
			fixWidth();
			
			$sliderBanner.css('left', -leftCalc());
		});
		
		var left = 0,
			itemMove = 0,
			clicked = false;
		
		function checkStatus () {
			if(activeSlides == itemsLength) {
				$nextArrow.addClass('disabled');
			} else {
				$nextArrow.removeClass('disabled');
			}
			
			if(activeSlides == slidesToShow) {
				$prevArrow.addClass('disabled');
			} else {
				$prevArrow.removeClass('disabled');
			}
		}
		checkStatus();
		
		$nextArrow.click(function () {
			if (!clicked) {
				
				if (activeSlides != itemsLength) {
					clicked = true;
					itemMove++;
					left = -leftCalc();
					$sliderBanner.css('left', left);
					activeSlides++;
					setTimeout(function() {
						clicked = false;
					}, 400);
					checkStatus();
				}
			}
		});
		$prevArrow.click(function () {
			if(!clicked) {
				
				if (activeSlides > slidesToShow) {
					clicked = true;
					itemMove--;
					left = -leftCalc();
					$sliderBanner.css('left', left);
					activeSlides--;
					setTimeout(function() {
						clicked = false;
					}, 400);
					checkStatus();
				}
			}
		});

	}
	chiefSlider();
	
	/* Loading screen */
	$("body, html").addClass("overflow-prop");
	$(window).load(function () {
		$(".loading-overlay .sk-folding-cube").fadeOut(500, function () {
			$("body, html").removeClass("overflow-prop");
			$(this).parent().fadeOut(800, function () {
				$(this).remove();
			});
		});
	});
});

