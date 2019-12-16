//=../bower_components/jquery/dist/jquery.js
//=../bower_components/slick-carousel/slick/slick.js
//=../bower_components/jQuery.mmenu/dist/jquery.mmenu.all.js

$(function() {
	$(".main-slider-js").slick({
		dots: true,
		arrows: false,
		appendDots: '.main-slider__dots',
		customPaging : function(slider, i) {
			return '<a class="main-slider__dot"></a>';
			
		},
		autoplay: true,
	});
	$(".brands-slider-js").slick({
		infinite: false,
		slidesToShow: 8,
		slidesToScroll: 1,
		// variableWidth: true,
		prevArrow: '.brands-slider__nav-prev',
		nextArrow: '.brands-slider__nav-next'
	});

	var GoodsSlider = function () {

		$('.goods__top-js').each(function(ind) {
			$(this).slick({
				slidesToShow: 1,
				slidesToScroll: 1,
				infinite: false,
				dots: true,
				arrows: false,
				swipe: false,
				appendDots: $(this).parents('.goods__top').find('.goods__colors'),
				customPaging: function(slider, i) {
					var color = $('.goods__img').eq(i).data('color');
					
					return '<a href="javascript:void(0);" class="goods__colors-item" style="background-color:'+ color +'"></a>'
				}
			});	
		});
	}
	GoodsSlider();
	var sliderGoodsList;
	function sliderGoods() {
		sliderGoodsList = $(".main-goods__list").slick({
			infinite: false,
			dots: false,
			arrows: false,
			slidesToShow: 5,
			slidesToScroll: 1,
			autoplay: true,
			responsive: [
				{
					breakpoint: 1500,
					settings: {
						slidesToShow: 5,
						slidesToScroll: 1,
					}
				},
				{
					breakpoint: 1300,
					settings: {
						slidesToShow: 4,
						slidesToScroll: 1,
					}
				},
				{
					breakpoint: 1024,
					settings: {
						slidesToShow: 3,
						slidesToScroll: 1,
					}
				},
				{
					breakpoint: 800,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 1,
					}
				},
				{
					breakpoint: 600,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
					}
				}
			]
		});
	} 
	sliderGoods()
	$( window ).resize(function() {
		sliderGoodsList.slick('reinit');
	});

	$('.main-about__btn').click(function(){
		$('.main-about').toggleClass('height-auto');
	});

	$('.mobile-drop__icon-btn').click(function(){
		$(this).closest('li').toggleClass('active');
		return false;
	});

	var mobMenu = '.mobile-menu__content',
		overMenu = '.mobile-menu__overlay',
		openMenu = '.mobile-menu__btn',
		closeBtn = '.mobile-menu__close-btn';
		
	$(mobMenu).hide().css( {"left": -$(mobMenu).outerWidth()+'px'}).delay(50).queue(function(){$(mobMenu).show()}); 
	$(openMenu).click(function(e){ //при нажатии на кнопку "Открыть меню"
		e.preventDefault();
		$(mobMenu).css( {"left": "0px"}); 
		setTimeout(function(){
			$(mobMenu).addClass('active'); 
		},50);
		$(overMenu).css({"opacity":"1", "width":"100%"});
	});
	$(document).on('click', function(e) { 
		function closeMenu() {
			$(mobMenu).css( {"left": -$(mobMenu).outerWidth()+'px'}).removeClass('active');
			$(overMenu).css({"opacity":"0", "width":"0"});
		}
		
		if (!e.target.closest(mobMenu) && $(mobMenu).hasClass("active")){ 
			closeMenu()
		}

		if (e.target.closest(closeBtn) ) {
			closeMenu()
			
		}
	});
	
	$(".cataloge-slider-js").slick({
		infinite: true,
		dots: false,
		arrows: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		variableWidth: true
	});
	$(".articles-js").slick({
		autoplay: true,
		infinite: true,
		dots: false,
		arrows: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		variableWidth: true
	});

		
	jQuery('.btn-up').click( function(){
		jQuery('body,html').animate({scrollTop:0},800);
		return false;
	});

	jQuery(window).scroll(function(){
		if ( jQuery(document).scrollTop() > 500 ) {
			jQuery('.btn-up').fadeIn('fast');
		} else {
			jQuery('.btn-up').fadeOut('fast');
		}
	});
});
