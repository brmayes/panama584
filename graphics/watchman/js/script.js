$(document).ready(function(){
  console.log("DOC Ready!");

  var years = ["1969", "2007", "2011", "2014"];
  // var activeYear = "";
  var img = '<img src="img/1969.png">';
  document.getElementById("map-img").innerHTML = img;

function preloadImages(array) {
  if (!preloadImages.list){
    preloadImages.list = [];
  }

  var list = preloadImages.list;
  for (var i = 0; i < array.length; i++){
    var img = new Image();
    img.onload = function(){
      var index = list.indexOf(this);
      if (index !== -1){
        //remove image from the array once it's loaded
        //for memory consumption reasons
        list.splice(index, 1);
      }
    }
    list.push(img);
    img.src = array[i];
  }
}

preloadImages(["img/1969.png", "img/2007.png", "img/2011.png", "img/2014.png"]);

  $(".slider")
    .slider({
      min: 0,
      max: years.length-1,
      // value: activeYear
    })
    .slider("pips", {
        rest: "label",
        labels: years
    })



    .on("slidechange", function( e, ui) {
    console.log(ui.value);


      if (ui.value == 0) {
        img = '<img src="img/1969.png">'
        document.getElementById("map-img").innerHTML = img;

      }

      if (ui.value == 1) {
        img = '<img src="img/2007.png">'
        document.getElementById("map-img").innerHTML = img;
      }


      if (ui.value == 2) {
        img = '<img src="img/2011.png">'
        document.getElementById("map-img").innerHTML = img;

      }


      if (ui.value == 3) {
        img = '<img src="img/2014.png">'
        document.getElementById("map-img").innerHTML = img;

      }



    });


  });
