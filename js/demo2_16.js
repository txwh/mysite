$(document).ready(function() {
	$('.left_container ul li').hover(function() {
			$('a', this).animate({
				left: "10px"
			});
			return false
		},
		function() {
			$('a', this).animate({
				left: "0px"
			});
		});
		
		
		$(".navi li ").unbind('hover').hover(
		function() {
		
			$("ul",this).filter(":not(:animated)").slideDown(200);
	
		},
		function() {
			$("ul",this).slideUp(100);
	
		});
		
//	$('.navi li ').hover(
//		function() {
//			$('ul', this).slideDown(200);
//		},
//		function() {
//			$('ul', this).slideUp(100);
//		});

	$(".app_title").click(function() {
		var disp = $(".navigation").css('display');
		if (disp == "none")
			$(".navigation").css("display", "block");
		else
			$(".navigation").css("display", "none");


	});
})