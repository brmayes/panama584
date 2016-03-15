$(document).ready(function() {

  $('#section4').mouseenter(function(){
    console.log("ahoy!");
    $('#previous-chapter').fadeIn(100);
    $('#previous-chapter').animate({left: "0"}, 500);
    $('#next-chapter').fadeIn(100);
    $('#next-chapter').animate({right: "0"}, 500);
  });
  $('#section4').mouseleave(function(){
    console.log("ahoy mate!");
    $('#previous-chapter').animate({left: "-200px"}, 500);
    $('#previous-chapter').fadeOut(100);
    $('#next-chapter').animate({right: "-200px"}, 500);
    $('#next-chapter').fadeOut(100);
  });

	// var targetOffset = $("#section4").offset().top;
  //
	// var $w = $(window).scroll(function(){
	//     if ( $w.scrollTop() > targetOffset ) {
	// 			console.log("blergh");
	// 			$('#previous-chapter').fadeIn(100);
	// 			// $('#previous-chapter').animate({left: "0"}, 500);
	// 			$('#next-chapter').fadeIn(100);
	// 			// $('#next-chapter').animate({right: "0"}, 500);
	// 		}});
			// var $v = $(window).scroll(function(){
			//     if ( $v.scrollTop() <= targetOffset ) {
			// 			console.log("blahhh");
			// 			$('#previous-chapter').stop().css({left:"-200px"});
			// 			$('#previous-chapter').stop().css({right: "-200px"});
			// 		}
			// 	});

	});
