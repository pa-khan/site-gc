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
});
