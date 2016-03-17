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
//     if ($(this).hasClass('first')){
//         $('#progress-bar').val('0');
//         $(this).nextAll().removeClass('border-change');
//        }else if ($(this).hasClass('second')){
//         $(this).nextAll().removeClass('border-change');
//         $('#progress-bar').val('34');
//         $(this).prevAll().addClass('border-change');
//         $(this).addClass('border-change');
//        }else if ($(this).hasClass('third')){
//         $(this).nextAll().removeClass('border-change');
//         $('#progress-bar').val('67');
//         $(this).prevAll().addClass('border-change');
//         $(this).addClass('border-change');
//        } else{
//         $('#progress-bar').val('100');
//          $(this).addClass('border-change');
//         $(this).prevAll().addClass('border-change');
//        }
//   });
// });// complete click

$(document).ready(function(){
  $('.secondPage').click(function(){
    if ($(this).hasClass('active')){
        $('#progress-bar').val('25');
       }
  });
});// complete click
