$(document).ready(function() {	
			$('.slider').find('.next').click(function(){
				var currentSlide = $('.slider-content').find('.active-slide');
				var nextSlide = currentSlide.next();
				var sliderContent = $('.slider-content');
				var sliderControls = $('.slider-controls');

				if (nextSlide.length == 0) {
					sliderContent.animate({ 'left' : '0px' }, 500);
					nextSlide = sliderContent.find('.slider-item').first();
				} else {
					sliderContent.animate({ 'left' : '-=620px' }, 500);
				}
				
				currentSlide.removeClass('active-slide');
				nextSlide.addClass('active-slide');
				
				var currentDot = sliderControls.find('.active-dot');
				var nextDot = currentDot.next();

				if (nextDot.length == 0) {
					nextDot = sliderControls.find('a').first();
				}

				currentDot.removeClass('active-dot');
				nextDot.addClass('active-dot');

				return false;
			}); //end click next

			$('.slider').find('.previous').click(function(){
				var currentSlide = $('.slider-content').find('.active-slide');
				var prevSlide = currentSlide.prev();
				var sliderContent = $('.slider-content');
				var sliderControls = $('.slider-controls');
				var slidesWidth = sliderContent.width() - sliderContent.find('li').width();

				if (prevSlide.length == 0) {
					sliderContent.animate({ 'left' : '-=' + slidesWidth }, 500);
					prevSlide = sliderContent.find('.slider-item').last();
				} else {
					sliderContent.animate({ 'left' : '+=620px' }, 500);
				}
				
				currentSlide.removeClass('active-slide');
				prevSlide.addClass('active-slide');
				
				var currentDot = sliderControls.find('.active-dot');
				var prevDot = currentDot.prev();

				if (prevDot.length == 0) {
					prevDot = sliderControls.find('a').last();
				}

				currentDot.removeClass('active-dot');
				prevDot.addClass('active-dot');

				return false;
			}); //end click prev

			$('.slider-controls').find('a').click(function(event) {
				event.preventDefault();
			}); //end click
			
			var serviceControls = $('.service-slider-controls');
			var serviceInner = $('.service-slider-inner');

			serviceControls.find('a').click(function(event) {
				event.preventDefault();
				if (!$(this).hasClass('active')) {
					serviceControls.find('.active').removeClass('active');
					$(this).addClass('active');

					var indexItem = $(this).parent().index();

					serviceInner.find('.active-item').removeClass('active-item').fadeOut(500);
					
					$('.service-slider-item').eq(indexItem).addClass('active-item').fadeIn(500);

				}
			}); //end click
}); //end ready
