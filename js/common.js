$(document).ready(function() {
	function heightDetect() {
		$(".main-head").css("height",$(window).height());
		$("#header-overlay").css("height",$(window).height());
	};
	heightDetect();

	$(window).resize(function(event) {
		heightDetect();
	});

	$(".menu-toggle").click(function() {
  		if($(".switch").hasClass('active')) {
  			$(".top-menu").fadeOut('600');
  			$(".top-menu li a").removeClass('fadeInUp animated');
  		} else {
  			$(".top-menu").fadeIn('600');
  			$(".top-menu li a").addClass('fadeInUp animated');
  		}
  		$(".switch").toggleClass("active");
	});

	$(".top-menu ul li a").click(function() {
		$(".top-menu").fadeOut('600');
		$(".top-menu li a").removeClass('fadeInUp animated');
		$(".switch").toggleClass("active");
	});

	$(".wrap-header h1, .about-descr").animated("fadeInDown", "fadeOutUp");
	$(".wrap-header p").animated("fadeInUp", "fadeOutDown");

	$(".gallery-list li").click(function(event) {
		$("li.active").removeClass("active");
		$(this).addClass("active");
	});

	/*	These animations totally break responsivity 
		
	$(".content-col-left").animated("fadeInLeft","fadeOutRight")
	$(".content-col-right").animated("fadeInRight","fadeOutLeft")
	$(".content-col-mid").animated("fadeIn","fadeOut")

	*/
});
$(window).load(function() {
	$(".loader-inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");
});

