$(document).ready(function() {

	$('.js--slider').each(function(){

		var $slider = $(this);
		var $list = $slider.find('.js--slider-list');
		var $items = $list.find('.js--slider-item');
		var $pagination = $slider.find('.js--slider-pagination');
		var $nav = $slider.find('.js--slider-nav');

		var interval = null;
		var intervalTime = parseInt($slider.attr('data-interval-time'));

		var listWidth = $items.size() * 100;
		var itemWidth = 100 / $items.size();

		var $currSlide = $items.first();

		var getPosition = function(index){
			return index * -100;
		};

		var selectPaginationItem = function(index){
			var $items = $pagination.find('li');
			$items.removeClass('active');
			$items.eq(index).addClass('active');
		};

		var moveSlider = function(newPosition){
			$list.css('left', newPosition+'%');
		};

		var startInterval = function(){
			if(0 === intervalTime || isNaN(intervalTime)) return;

			if(null != interval){
				clearInterval(interval);
			}

			interval = setInterval(function(){
				$nav.filter('.right').click();
			}, intervalTime);
		};

		$list.css('width', listWidth+'%');
		$items.css('width', itemWidth+'%');

		$pagination.empty();

		$items.each(function(){
			$pagination.append($('<li><a href="#"></a></li>'))
		});

		selectPaginationItem(0);

		$nav.click(function(event) {
	        event.preventDefault();

	        var $me = $(this);
	        var $newSlide;
	        
	        if ($me.hasClass('right')) {
	        	$newSlide = $currSlide.next();

	        	if($newSlide.size() < 1)  { 
	        		$newSlide = $items.first();
	        	}

	        } else {
	        	$newSlide = $currSlide.prev();

	        	if($newSlide.size() < 1)  { 
	        		$newSlide = $items.last();;
	        	}
	        }

	        var index = $newSlide.index();
	        var newPosition = getPosition(index);

	        moveSlider(newPosition);			

			selectPaginationItem(index);

			$currSlide = $newSlide;

			startInterval();
	    });

	    $pagination.on('click', 'a', function(e) {
	        e.preventDefault();

	        var $me = $(this);

	        var index = $me.parent().index();
	        var newPosition = getPosition(index);

	        moveSlider(newPosition);
	        selectPaginationItem(index);

	        $currSlide = $items.eq(index);

	        startInterval();
	    }); 

	    setTimeout(startInterval, intervalTime);
	});

	  

});