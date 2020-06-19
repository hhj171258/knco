//javaScript Document
/* header */
$(document).on("scroll", function(){
	var scrollTop = $(document).scrollTop();
	if(scrollTop > 620){
		$("#header").css({"border-bottom" : "2px solid #54a922"});
		$(".depth1 li").find(".depth2").css({"top":84});
	} else{
		$("#header").css({"border-bottom" : "none"});
		$(".depth1 li").find(".depth2").css({"top":82});
	}
});

/* nav */
$(document).on("mouseover", ".depth1 li", function(){
	$(this).find(".depth2").stop().slideDown(400);
})
$(document).on("mouseleave", ".depth1 li", function(){
	$(this).find(".depth2").stop().slideUp(400);
})

/* slick */
$('.autoplay').slick({
	infitnite: true,
	slidesToShow: 5,
	slidesToScroll: 1,
	speed: 300,
	autoplay: true,
	autoplaySpeed: 2000,
	prevArrow: '.slick-prev',
	nextArrow: '.slick-next',
	cssEase: 'ease'
});

/* product slide hover */
$(".product_slide").find("a").hide();
$(".autoplay .slick-slide").mouseover(function(){
	$(this).find("a").fadeIn(100);
});
$(".autoplay .slick-slide").mouseleave(function(){
	$(this).find("a").fadeOut(100);
});

/* .informaion */
$(window).scroll(function(){
	informaion();
});
informaion();
function informaion(){
	var scrollTop = $(window).scrollTop();
		if(scrollTop > 1530){
			$(".information").addClass("on");
		}else{
			$(".information").removeClass("on");
		}
};