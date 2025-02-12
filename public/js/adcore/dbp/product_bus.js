jQuery(document).ready(function() {
/* 서브 헤더 시작 */
	function subHeader(){
		if ($(window).scrollTop() > 235) {
			$(".bus_snb").css("position","fixed").css("top", "80px").css("left",0).css("z-index","1").css("width","100%");
			$(".page-wrap.media").css("margin-top","155px");
		} else {
			$(".bus_snb").css("position","relative").css("top","0").css("left",0);
			$(".page-wrap.media").css("margin-top",0);
		} 
	}
	subHeader();

	$(window).scroll(function(){
		var position = $(window).scrollTop();
		subHeader();
	});

	$(".menu-icon img").mouseover(function(){
		$(this).animate({opacity:"0.5"},200,"swing");
	});
	$(".menu-icon img").mouseleave(function(){
		$(this).animate({opacity:"1"},200,"swing");
	});
/* 서브 헤더 끝 */

/* 서브 아이콘 오버 시작 */
	$(".icon_box:eq(0)").mouseover(function(){
		$(".icon_box:eq(0):not(:animated)").stop().animate({
			scale:"0.7"
		},{
			duration:90, easing:"easeInCirc"
		}).animate({
			scale:"1"
		},{
			duration:1000, easing:"easeOutElastic"
		}).siblings('h2').addClass('hover');
	});
	$(".icon_box:eq(0)").mouseleave(function(){
		$(this).siblings('h2').removeClass('hover');
	});

	$(".icon_box:eq(1)").mouseover(function(){
		$(".icon_box:eq(1):not(:animated)").stop().animate({
			scale:"0.7"
		},{
			duration:90, easing:"easeInCirc"
		}).animate({
			scale:"1"
		},{
			duration:1000, easing:"easeOutElastic"
		}).siblings('h2').addClass('hover');
	});
	$(".icon_box:eq(1)").mouseleave(function(){
		$(this).siblings('h2').removeClass('hover');
	});

	$(".icon_box:eq(2)").mouseover(function(){
		$(".icon_box:eq(2):not(:animated)").stop().animate({
			scale:"0.7"
		},{
			duration:90, easing:"easeInCirc"
		}).animate({
			scale:"1"
		},{
			duration:1000, easing:"easeOutElastic"
		}).siblings('h2').addClass('hover');
	});
	$(".icon_box:eq(2)").mouseleave(function(){
		$(this).siblings('h2').removeClass('hover');
	});

	$(".icon_box:eq(3)").mouseover(function(){
		$(".icon_box:eq(3):not(:animated)").stop().animate({
			scale:"0.7"
		},{
			duration:90, easing:"easeInCirc"
		}).animate({
			scale:"1"
		},{
			duration:1000, easing:"easeOutElastic"
		}).siblings('h2').addClass('hover');
	});
	$(".icon_box:eq(3)").mouseleave(function(){
		$(this).siblings('h2').removeClass('hover');
	});

	$(".icon_box:eq(4)").mouseover(function(){
		$(".icon_box:eq(4):not(:animated)").stop().animate({
			scale:"0.7"
		},{
			duration:90, easing:"easeInCirc"
		}).animate({
			scale:"1"
		},{
			duration:1000, easing:"easeOutElastic"
		}).siblings('h2').addClass('hover');
	});
	$(".icon_box:eq(4)").mouseleave(function(){
		$(this).siblings('h2').removeClass('hover');
	});

	$(".icon_box:eq(5)").mouseover(function(){
		$(".icon_box:eq(5):not(:animated)").stop().animate({
			scale:"0.7"
		},{
			duration:90, easing:"easeInCirc"
		}).animate({
			scale:"1"
		},{
			duration:1000, easing:"easeOutElastic"
		}).siblings('h2').addClass('hover');
	});
	$(".icon_box:eq(5)").mouseleave(function(){
		$(this).siblings('h2').removeClass('hover');
	});
/* 서브 아이콘 오버 끝 */

/* 서브 아이콘 올레 스크롤 시작 */
	$(".media_nav li:eq(0)").click(function(){
		$("html,body").animate({scrollTop:'200px'},{duration:1000, easing:"easeInCubic"});
	});
	$(".media_nav li:eq(1)").click(function(){
		$("html,body").animate({
			scrollTop: $(".special").offset().top - 235 + "px"
		}, {
			duration:1500, easing:"easeInCubic"
		});
	});
/* 서브 아이콘 올레 스크롤 끝 */
	
/* 로그인 팝업 */
	$('.txt_login').toggle(function() {
		$('.memAttr .log').css('display', 'block');
	},
	function() {
		$('.memAttr .log').css('display', 'none');
	});
	
	$('#pop_mem_id').focus(function() {
		$('.log_alert').css('display', 'none');
	});
	
	$('#pop_mem_pwd').focus(function() {
		$('.log_alert').css('display', 'none');
	});
});