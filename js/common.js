$(document).ready(function() {

	$("#cont").mixItUp();
	
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

	//* FUKKEN ANIMATIONS *//
	$(".wrap-header h1, .about-descr").animated("fadeInDown", "fadeOutUp");
	$(".wrap-header p").animated("fadeInUp", "fadeOutDown");
	$("#enrollment-form .form-col:nth-child(1)").animated("fadeInDown", "fadeOut");
	$("#enrollment-form .form-col:nth-child(2)").animated("fadeInDown", "fadeOut");
	$(".enrollment").animated("flipInX", "flipOutX");

	$(".gallery-list li").click(function(event) {
		$("li.active").removeClass("active");
		$(this).addClass("active");
	});

	$('.gallery-button').magnificPopup({
  		type:'inline',
 		midClick: true 
 	});

	$('a[href^="#"]').click(function(){
		var aTopOffset = $($(this).attr("href")).offset().top;
		var duration = Math.abs(aTopOffset - $(window).scrollTop()) * 0.5;
		if(duration > 1600)
			duration = 1600 + Math.random() * 200 * Math.pow(-1, ~~(Math.random() * 100)); 
		$("html, body").animate(
			{ scrollTop: aTopOffset + 50 +"px" }, 
			duration, 
			"swing",
			function() {
				console.log("Ummm... Animation completed. duration = " + duration);
			});
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
