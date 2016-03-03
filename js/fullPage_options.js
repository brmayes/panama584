$(document).ready(function() {
  $('#fullpage').fullpage({

    //Navigation
    menu: '#menu',
    lockAnchors: false,
    anchors: ['firstPage', 'secondPage', '3rdPage'],
    navigation: true,
    navigationPosition: 'right',
    navigationTooltips: ['First page', 'Second page', 'Third and last page'],
    showActiveTooltip: true,
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
    recordHistory: true,

    //Design
    sectionsColor: ['#FFFFFF'],
    controlArrows: false,
    verticalCentered: true,
    resize : false,
    paddingTop: '1.5em',
    paddingBottom: '5em',
    fixedElements: '#header',
    responsiveWidth: 0,
    responsiveHeight: 0
  });
});
