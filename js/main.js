




$(window).load(function() {
   $('.preloader').fadeOut('slow');
});






var $paragraph =  $("p");

$(window).scroll(function () {
	$paragraph.each(function () {
		 paragraphMiddle = $(this).offset().top +(0.5 
		 	*$(this).height());
		           windowBottom = $(window).scrollTop() +
		     $(window).height();

		         if (paragraphMiddle < windowBottom) {
		         	$(this).addClass("paraFadeIn");
		         }
		      });

	       });

          $(window).scroll();
