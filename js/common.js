$(document).ready(function() {
	function heightDetect() {
		$(".main-head").css("height",$(window).height());
		$("#header-overlay").css("height",$(window).height());
	};
	heightDetect();

	$(window).resize(function(event) {
	heightDetect();
	});
});
$(window).load(function() {
	$(".loader-inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");
});

