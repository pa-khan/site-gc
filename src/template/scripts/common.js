$(document).ready(function($) {

	$('.input_phone .input__wrap').mask('+7 (000) 000-00-00');

	function valueElementForm(nameElement) {
		var newNameElement = '.' + nameElement;
			element = $(newNameElement);
		element.each(function(index, el) {
			var elementInput = $(this).find($('input')),
				elementLabel = $(this).find($('label')),
				elementValue = index + 1;
			elementInput.attr('id', nameElement + '-' + elementValue);
			elementLabel.attr('for', nameElement + '-' + elementValue);
		});
		
	}
	valueElementForm('radio');
	valueElementForm('input');
	valueElementForm('toggle');
	

	$('.price__list_open .price__body').slideDown(300);

	$('.price__head').click(function(event) {
		var item = $(this).parent('.price__list'),
				body = $(this).next('.price__body');

		if (!item.hasClass('price__list_open')) {
			$('.price__list').removeClass('price__list_open');
			$('.price__body').slideUp(300);
			body.slideDown(300);
			item.addClass('price__list_open');
		}
	});

	var hum = $('.hum'),
			humClass = 'hum_toggle',
			nav = $('.panel__nav'),
			navClass = 'panel__nav_toggle'

	hum.click(function(event) {
		hum.toggleClass(humClass);
		nav.toggleClass(navClass);
	});


	$slick_slider = $('.reviews_block .reviews__list');
  settings_slider = {
    dots: true,
    arrows: false
    // more settings
  }
  slick_on_mobile( $slick_slider, settings_slider);

// slick on mobile
  function slick_on_mobile(slider, settings){
    $(window).on('load resize', function() {
      if ($(window).width() > 767) {
        if (slider.hasClass('slick-initialized')) {
          slider.slick('unslick');
        }
        return
      }
      if (!slider.hasClass('slick-initialized')) {
        return slider.slick(settings);
      }
    });
  };

  function SubmitForm(button, parent) {
  	button.click(function(event) {

	  	event.preventDefault();

	  	var count = 0,
	  			form = $(this).parents(parent),
	  			inputsRequired = form.find('.input_required'),
	  			inputsRequiredLength = inputsRequired.length;

	  	inputsRequired.each(function(index, el) {
	  		var input = $(this).find('input');
	  		if (input.val() != '') {
	  			count++;
	  			$(this).removeClass('input_error');
	  		} else{
	  			$(this).addClass('input_error');
	  		}
	  	});

	  	if (count == inputsRequiredLength) {
	  		$.ajax({
				    type: "POST",
				    url: "order.php",
				    data: form.serialize()
				}).done(function() {
					$.fancybox.close();
				  $.fancybox.open({src  : '#popup-thanks',type : 'inline'});
				  
				});
				return false;
	  	}

	  });
  }

  SubmitForm($('.order__btn'), '.order');
  SubmitForm($('.popup__form .form__btn'), '.popup__form');


  // $('.calc__radios input').prop('checked', true);

  if ($('.calc__radios input[value = 1]').prop('checked', true)) {
  	alert(1);
  }


  
});
