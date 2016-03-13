$(document).ready(function(){

   $('#play_button').click(function(){
     $('.container-home').fadeOut();
     console.log("it worked!");
     $('#trailer_video').fadeIn("slow");
     console.log("it also worked!");
   })

   $('.trailer_text').click(function(){
     $('.container-home').fadeOut();
     console.log("it worked!");
     $('#trailer_video').fadeIn("slow");
     console.log("it also worked!");
   })

   $('#trailer_video').click(function(){
     $('#trailer_video').fadeOut("slow");
     $('.container-home').fadeIn();
   })
   $('.exit').click(function(){
     $('#trailer_video').fadeOut("slow");
     $('.container-home').fadeIn();
   })

// wave hover
    // $('.home_links').mouseenter(function(){
    //   $('#c').fadeIn("fast");
    // })
   $('.home_links').mouseenter(function(){
     $('#c').animate({top: '75%', opacity: '0.4'}, "slow");
   })
   $('.home_links').mouseleave(function(){
     $('#c').animate({top: '100%', opacity: '0.4'}, "slow");
   })

   $('.home_links').click(function(){
     $('.home_headline').animate({opacity: "0.0"}, "fast");
     $('#play_trailer').animate({opacity: "0.0"}, "fast");
   })

   $(".chapter_one").click(function(){
     $("#c").animate({top: '-10%', opacity: '1.0', height: '110%'}, {duration: 1000, complete: function(){
       window.location = "story-template.html";
     }});
     $(".chapter_one").css({color: '#DE7769', 'border-bottom': '0px solid #DE7769'});
     $(".home_links").fadeOut();
   });

   $(".chapter_two").click(function(){
     $("#c").animate({top: '-10%', opacity: '1.0', height: '110%'}, {duration: 1000, complete: function(){
       window.location = "story-template.html";
     }});
     $(".chapter_two").css({color: '#DE7769', 'border-bottom': '0px solid #DE7769'});
     $(".home_links").fadeOut();
   });

   $(".chapter_three").click(function(){
     $("#c").animate({top: '-10%', opacity: '1.0', height: '110%'}, {duration: 1000, complete: function(){
       window.location = "story-template.html";
     }});
     $(".chapter_three").css({color: '#DE7769', 'border-bottom': '0px solid #DE7769'});
     $(".home_links").fadeOut();
   });

   $(".chapter_four").click(function(){
     $("#c").animate({top: '-10%', opacity: '1.0', height: '110%'}, {duration: 1000, complete: function(){
       window.location = "story-template.html";
     }});
     $(".chapter_four").css({color: '#DE7769', 'border-bottom': '0px solid #DE7769'});
     $(".home_links").fadeOut();
   });

   $(".chapter_five").click(function(){
     $("#c").animate({top: '-10%', opacity: '1.0', height: '110%'}, {duration: 1000, complete: function(){
       window.location = "story-template.html";
     }});
     $(".chapter_five").css({color: '#DE7769', 'border-bottom': '0px solid #DE7769'});
     $(".home_links").fadeOut();
   });
});


var c = document.getElementById('c'),
  ctx = c.getContext('2d'),
  cw = c.width = window.innerWidth,
  ch = c.height = window.innerHeight,
  points = [],
  tick = 0,
  opt = {
    count: 5,
    range: {
      x: 20,
      y: 40
    },
    duration: {
      min: 20,
      max: 40
    },
    thickness: 0,
    strokeColor: 'rgba(255,255,255,1.0)',
    level: .96,
    curved: true
  },
  rand = function(min, max) {
    return Math.floor((Math.random() * (max - min + 1)) + min);
  },
  ease = function(t, b, c, d) {
    if ((t /= d / 2) < 1) return c / 2 * t * t + b;
    return -c / 2 * ((--t) * (t - 2) - 1) + b;
  };

ctx.lineJoin = 'round';
ctx.lineWidth = opt.thickness;
ctx.strokeStyle = opt.strokeColor;

var Point = function(config) {
  this.anchorX = config.x;
  this.anchorY = config.y;
  this.x = config.x;
  this.y = config.y;
  this.setTarget();
};

Point.prototype.setTarget = function() {
  this.initialX = this.x;
  this.initialY = this.y;
  this.targetX = this.anchorX + rand(0, opt.range.x * 2) - opt.range.x;
  this.targetY = this.anchorY + rand(0, opt.range.y * 2) - opt.range.y;
  this.tick = 0;
  this.duration = rand(opt.duration.min, opt.duration.max);
}

Point.prototype.update = function() {
  var dx = this.targetX - this.x;
  var dy = this.targetY - this.y;
  var dist = Math.sqrt(dx * dx + dy * dy);

  if (Math.abs(dist) <= 0) {
    this.setTarget();
  } else {
    var t = this.tick;
    var b = this.initialY;
    var c = this.targetY - this.initialY;
    var d = this.duration;
    this.y = ease(t, b, c, d);

    b = this.initialX;
    c = this.targetX - this.initialX;
    d = this.duration;
    this.x = ease(t, b, c, d);

    this.tick++;
  }
};

Point.prototype.render = function() {
  ctx.beginPath();
  ctx.arc(this.x, this.y, 3, 0, Math.PI * 2, false);
  ctx.fillStyle = '#000';
  ctx.fill();
};

var updatePoints = function() {
  var i = points.length;
  while (i--) {
    points[i].update();
  }
};

var renderPoints = function() {
  var i = points.length;
  while (i--) {
    points[i].render();
  }
};

var renderShape = function() {
  ctx.beginPath();
  var pointCount = points.length;
  ctx.moveTo(points[0].x, points[0].y);
  var i;
  for (i = 0; i < pointCount - 1; i++) {
    var c = (points[i].x + points[i + 1].x) / 2;
    var d = (points[i].y + points[i + 1].y) / 2;
    ctx.quadraticCurveTo(points[i].x, points[i].y, c, d);
  }
  ctx.lineTo(-opt.range.x - opt.thickness, ch + opt.thickness);
  ctx.lineTo(cw + opt.range.x + opt.thickness, ch + opt.thickness);
  ctx.closePath();
  ctx.fillStyle = 'rgba(255,255,255, 1.0)';
  ctx.fill();

};

var clear = function() {
  ctx.clearRect(0, 0, cw, ch);
};

var loop = function() {
  window.requestAnimFrame(loop, c);
  tick++;
  clear();
  updatePoints();
  renderShape();
  //renderPoints();
};

var i = opt.count + 2;
var spacing = (cw + (opt.range.x * 2)) / (opt.count - 1);
while (i--) {
  points.push(new Point({
    x: (spacing * (i - 1)) - opt.range.x,
    y: ch - (ch * opt.level)
  }));
}

window.requestAnimFrame = function() {
  return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(a) {
    window.setTimeout(a, 1E3 / 60)
  }
}();

loop();
