$(document).ready(function() {
			
			function animateContentNext() {
				if (!$('.slider .slider-content').find('li.slider-item:last').hasClass('active-item')) {
					$('.slider').find('.slider-content').stop().animate(
						{
							'left': '-=620px'
						},
						600
					)//end animation;

					$('.slider .slider-content')
						.find('li.active-item')
						.removeClass('active-item')
						.next()
						.addClass('active-item');

					$('.slider .slider-controls')
						.find('a.active-item')
						.removeClass('active-item')
						.next()
						.addClass('active-item');
				}//end if
			} //end function Next

			function animateContentPrev() {
				if (!$('.slider .slider-content').find('li.slider-item:first').hasClass('active-item')) {
					$('.slider').find('.slider-content').stop().animate(
						{
							'left': '+=620px'
						},
						600
					)//end animation;

					$('.slider .slider-content')
						.find('li.active-item')
						.removeClass('active-item')
						.prev()
						.addClass('active-item');

					$('.slider .slider-controls')
						.find('a.active-item')
						.removeClass('active-item')
						.prev()
						.addClass('active-item');
				}//end if
			} //end function Prev

			$('.slider').find('a.next').click(function(event) {
				event.preventDefault();
				animateContentNext();
			});//end click next

			$('.slider-controls').find('a').click(function(event) {
				event.preventDefault();
			});//end click next

			$('.slider').find('a.previous').click(function(event) {
				event.preventDefault();
				animateContentPrev();
			});//end click prev

			$('.service-slider-controls li:first').find('a').click(function(event){
				event.preventDefault();
				if(!$(this).hasClass('active') && !$('.service-slider-inner').find('li:first').hasClass('active-item')) {
					$('.service-slider-controls').find('a.active').removeClass('active');
					$('.service-slider-inner').find('li.active-item').removeClass('active-item').fadeOut(500);
					
					$(this).addClass('active');
					$('.service-slider-inner').find('li:first').addClass('active-item').fadeIn(500);
				}
			}); //end click  the first

			$('.service-slider-controls li:nth-child(2)').find('a').click(function(event){
				event.preventDefault();
				if(!$(this).hasClass('active') && !$('.service-slider-inner').find('li:first').next().hasClass('active-item')) {
					$('.service-slider-controls').find('a.active').removeClass('active');
					$('.service-slider-inner').find('li.active-item').removeClass('active-item').fadeOut(500);
					
					$(this).addClass('active');
					$('.service-slider-inner').find('li:first').next().addClass('active-item').fadeIn(500);
				}
			}); //end click the second

			$('.service-slider-controls li:last-child').find('a').click(function(event){
				event.preventDefault();
				if(!$(this).hasClass('active') && !$('.service-slider-inner').find('li:last').hasClass('active-item')) {
					$('.service-slider-controls').find('a.active').removeClass('active');
					$('.service-slider-inner').find('li.active-item').removeClass('active-item').fadeOut(500);
					
					$(this).addClass('active');
					$('.service-slider-inner').find('li:last').addClass('active-item').fadeIn(500);
				}
			}); //end click the third


}); //end ready