$(document).ready(function() {
  $('#fullpage').fullpage({

    //Navigation
    menu: '#menu',
    lockAnchors: false,
    anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'fifthPage', 'sixthPage', 'seventhPage'],
    navigation: true,
    navigationPosition: 'right',
    navigationTooltips: ['First page', 'Second page', 'Third page', 'Fourth page', 'Fifth page', 'Sixth page', 'Seventh page'],      //have to figure out simplest way to customize this per page
    showActiveTooltip: false,
    slidesNavigation: true,
    slidesNavPosition: 'bottom',

    //Scrolling
    css3: true,
    scrollingSpeed: 700,
    autoScrolling: true,
    fitToSection: true,
    fitToSectionDelay: 1000,
    scrollBar: false,
    easing: 'easeInOutCubic',
    easingcss3: 'ease',
    loopBottom: false,
    loopTop: false,
    loopHorizontal: true,
    continuousVertical: false,
    normalScrollElements: '#element1, .element2',
    scrollOverflow: true,
    touchSensitivity: 75,
    normalScrollElementTouchThreshold: 5,

    //Accessibility
    keyboardScrolling: true,
    animateAnchor: true,
    recordHistory: false,
    responsiveWidth: 768,

    //Design
    sectionsColor: ['#FFFFFF'],
    controlArrows: false,
    verticalCentered: true,
    resize : false,
    paddingTop: '1.5em',
    paddingBottom: '3.5em',
    fixedElements: '#header, #logo, #switch_language, #next-chapter',
    responsiveWidth: 0,
    responsiveHeight: 0,

    //events
    afterLoad: function(anchorLink, index){
      var loadedSection = $(this);
      progressBar(loadedSection);
      console.log(loadedSection);
      if(index == 5){
                $('#next-chapter').fadeIn(100);
                $('#next-chapter').animate({right: "0"}, 500);
            }

    },
    onLeave: function(index, nextIndex, direction){
            var leavingSection = $(this);

            //after leaving section 5
            if(index == 5 && direction == 'up'){
                $('#next-chapter').animate({right: "-200px"}, 500);
                $('#next-chapter').fadeOut(100);
            }
        },
  });
});
