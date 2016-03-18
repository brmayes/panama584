// $(document).ready(function() {
//
//   $('#section4').afterLoad(function(){
//     console.log("ahoy!");
//     $('#previous-chapter').fadeIn(100);
//     $('#previous-chapter').animate({left: "0"}, 500);
//     $('#next-chapter').fadeIn(100);
//     $('#next-chapter').animate({right: "0"}, 500);
//   });
//   $('#section4').onLeave(function(){
//     console.log("ahoy mate!");
//     $('#previous-chapter').animate({left: "-200px"}, 500);
//     $('#previous-chapter').fadeOut(100);
//     $('#next-chapter').animate({right: "-200px"}, 500);
//     $('#next-chapter').fadeOut(100);
//   });
//
// 	// var targetOffset = $("#section4").offset().top;
//   //
// 	// var $w = $(window).scroll(function(){
// 	//     if ( $w.scrollTop() > targetOffset ) {
// 	// 			console.log("blergh");
// 	// 			$('#previous-chapter').fadeIn(100);
// 	// 			// $('#previous-chapter').animate({left: "0"}, 500);
// 	// 			$('#next-chapter').fadeIn(100);
// 	// 			// $('#next-chapter').animate({right: "0"}, 500);
// 	// 		}});
// 			// var $v = $(window).scroll(function(){
// 			//     if ( $v.scrollTop() <= targetOffset ) {
// 			// 			console.log("blahhh");
// 			// 			$('#previous-chapter').stop().css({left:"-200px"});
// 			// 			$('#previous-chapter').stop().css({right: "-200px"});
// 			// 		}
// 			// 	});
//
// 	});

// $(document).ready(function(){
//   $('span').click(function(){
//     if ($(theItem).hasClass('first')){
//         $('#progress-bar').val('0');
//         $(theItem).nextAll().removeClass('border-change');
//        }else if ($(theItem).hasClass('second')){
//         $(theItem).nextAll().removeClass('border-change');
//         $('#progress-bar').val('34');
//         $(theItem).prevAll().addClass('border-change');
//         $(theItem).addClass('border-change');
//        }else if ($(theItem).hasClass('third')){
//         $(theItem).nextAll().removeClass('border-change');
//         $('#progress-bar').val('67');
//         $(theItem).prevAll().addClass('border-change');
//         $(theItem).addClass('border-change');
//        } else{
//         $('#progress-bar').val('100');
//          $(theItem).addClass('border-change');
//         $(theItem).prevAll().addClass('border-change');
//        }
//   });
// });// complete click

// progress bar
var progressBar = function(theItem) {
  console.log(theItem);
  if ($(theItem).hasClass('firstPage_dot')){
    $('#progress-bar').val('0');
    $('.secondPage_dot span').css({border: '1px solid #9C9994'},  'fast');
    $('.thirdPage_dot span').css({border: '1px solid #9C9994'},  'fast');
    $('.fourthPage_dot span').css({border: '1px solid #9C9994'},  'fast');
  }else if ($(theItem).hasClass('secondPage_dot')){
    $('#progress-bar').val('25');
    console.log("second works");
    $('.firstPage_dot span').css({border: '1px solid #DE7769'},  'fast');
    $('.secondPage_dot span').css({border: '1px solid #DE7769'},  'fast');
    $('.thirdPage_dot span').css({border: '1px solid #9C9994'},  'fast');
    $('.fourthPage_dot span').css({border: '1px solid #9C9994'},  'fast');
    console.log("second page");
   }else if ($(theItem).hasClass('thirdPage_dot')){
    $('#progress-bar').val('50');
    $('.firstPage_dot span').css({border: '1px solid #DE7769'},  'fast');
    $('.secondPage_dot span').css({border: '1px solid #DE7769'},  'fast');
    $('.thirdPage_dot span').css({border: '1px solid #DE7769'},  'fast');
    $('.fourthPage_dot span').css({border: '1px solid #9C9994'},  'fast');
  }else if ($(theItem).hasClass('fourthPage_dot')){
    $('#progress-bar').val('75');
    $('.firstPage_dot span').css({border: '1px solid #DE7769'},  'fast');
    $('.secondPage_dot span').css({border: '1px solid #DE7769'},  'fast');
    $('.thirdPage_dot span').css({border: '1px solid #DE7769'},  'fast');
    $('.fourthPage_dot span').css({border: '1px solid #DE7769'},  'fast');
  } else if ($(theItem).hasClass('fifthPage_dot')){
    $('#progress-bar').val('100');
    $('.firstPage_dot span').css({border: '1px solid #DE7769'},  'fast');
    $('.secondPage_dot span').css({border: '1px solid #DE7769'},  'fast');
    $('.thirdPage_dot span').css({border: '1px solid #DE7769'},  'fast');
    $('.fourthPage_dot span').css({border: '1px solid #DE7769'},  'fast');
   }
 };

$(document).ready(function(){
  $('a').click(function(){
    progressBar(this);
    console.log(this);
  });
});// complete click


$(document).ready(function(){

  $('.menu-click').click(function(){
    console.log("menu!");
    $('#menu').animate({bottom: "0"}, 100);
    $('.ex-out').delay(100).fadeIn(100);
  });

  $('.ex-out').click(function(){
    console.log("menu closed!");
    $('.ex-out').fadeOut(100);
    $('#menu').delay(100).animate({bottom: "-60px"}, 100);
  });

  $('.menu-click').mouseenter(function(){
    $('.menu-click').css({"background-color": "#008B8F"});
    $('#ex-in').hide();
    $('#ex-in-hover').show();
  });

  $('.menu-click').mouseleave(function(){
    $('.menu-click').css({"background-color": "#E2E0DD"});
    $('#ex-in-hover').hide();
    $('#ex-in').show();
  });

  $('.ex-out').mouseenter(function(){
    $('.menu-click').css({"background-color": "#008B8F"});
  });

});
