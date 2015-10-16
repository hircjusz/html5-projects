$(document).ready(function() {
	
	$(window).resize(function() {

		$('.js--equal-columns').each(function(){
			var $wrapper = $(this);
			var $cols = $wrapper.find('.js--eq-column');
			var maxH = 0;

			$cols.removeAttr('style');

			$cols.each(function(){
				var $col = $(this);
				if($col.height() > maxH) maxH = $col.height();
			});

			$cols.height(maxH);
		});

	}).resize();

});