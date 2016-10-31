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

	$(".wrap-header h1").animated("fadeInDown", "fadeOutUp")
	$(".wrap-header p, .about-descr").animated("fadeInUp", "fadeOutDown")

	$("").animated("","")
});
$(window).load(function() {
	$(".loader-inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");
});

