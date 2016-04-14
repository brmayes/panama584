var id = jQuery(this).attr('id');

jQuery(document).ready(function() {
  /*
   * Replace all SVG images with inline SVG
   */
  jQuery('img.svg').each(function() {
    var $img = jQuery(this);
    var imgID = $img.attr('id');
    var imgClass = $img.attr('class');
    var imgURL = $img.attr('src');

    jQuery.get(imgURL, function(coralData) {
      // Get the SVG tag, ignore the rest
      var $svg = jQuery(coralData).find('svg');

      // Add replaced image's ID to the new SVG
      if (typeof imgID !== 'undefined') {
        $svg = $svg.attr('id', imgID);
      }
      // Add replaced image's classes to the new SVG
      if (typeof imgClass !== 'undefined') {
        $svg = $svg.attr('class', imgClass + ' replaced-svg');
      }

      // Remove any invalid XML tags as per http://validator.w3.org
      $svg = $svg.removeAttr('xmlns:a');

      // Replace image with new SVG
      $img.replaceWith($svg);

      // Add an handler
      jQuery('path').each(function() {
        jQuery(this).click(function() {

          //data for onclick - must give elements an id in svg first
          var coralData = [{
            "name": "scan1-mass",
            "id": "scan1-mass",
            "scan_number": 1,
            "description": "3 wolf moon umami typewriter polaroid ramps microdosing. Schlitz fanny pack lomo small batch, organic tacos lo-fi taxidermy distillery truffaut literally sartorial dreamcatcher gentrify. Readymade swag cray, kitsch fingerstache paleo before they sold out mlkshk lomo ugh next level migas affogato meh craft beer. Aesthetic leggings kogi hashtag, williamsburg iPhone next level lo-fi ugh fap letterpress."
          }, {
            "name": "scan1-longLine",
            "id": "scan1-longLine",
            "scan_number": 1,
            "description": "Schlitz fanny pack lomo small batch, organic tacos lo-fi taxidermy distillery truffaut literally sartorial dreamcatcher gentrify. Readymade swag cray, kitsch fingerstache paleo before they sold out mlkshk lomo ugh next level migas affogato meh craft beer. Aesthetic leggings kogi hashtag, williamsburg iPhone next level lo-fi ugh fap letterpress."
          }, {
            "name": "scan1-shortLine",
            "id": "scan1-shortLine",
            "scan_number": 1,
            "description": "Readymade swag cray, kitsch fingerstache paleo before they sold out mlkshk lomo ugh next level migas affogato meh craft beer. Aesthetic leggings kogi hashtag, williamsburg iPhone next level lo-fi ugh fap letterpress."
          }, {
            "name": "scan2-shortLine",
            "id": "scan2-shortLine",
            "scan_number": 2,
            "description": "Readymade swag cray, kitsch fingerstache paleo before they sold out mlkshk lomo ugh next level migas affogato meh craft beer. Aesthetic leggings kogi hashtag, williamsburg iPhone next level lo-fi ugh fap letterpress."
          }, {
            "name": "scan2-longLine",
            "id": "scan2-longLine",
            "scan_number": 2,
            "description": "Readymade swag cray, kitsch fingerstache paleo before they sold out mlkshk lomo ugh next level migas affogato meh craft beer. Aesthetic leggings kogi hashtag, williamsburg iPhone next level lo-fi ugh fap letterpress."
          }];

          var elemID = jQuery(this).attr('id');
          console.log(elemID);
          if (elemID === undefined) {
            //do nothing
          } else {
            for (var i = 0; i < coralData.length; i++) {
              if (elemID == coralData[i].id) {
                if (coralData[i].scan_number == 1) {
                  var contentInformation = "";
                  contentInformation += '<h5>' + coralData[i].name + '</h5><p>' + coralData[i].description + '</p>';

                  document.getElementById("info").innerHTML = contentInformation;
                  // document.getElementById(coralData[i].id).style.fill = "blue";
                } else {
                  var contentInformation = "";
                  contentInformation += '<h5>' + coralData[i].name + '</h5><p>' + coralData[i].description + '</p>';

                  document.getElementById("info2").innerHTML = contentInformation;
                  // document.getElementById(coralData[i].id).style.fill = "blue";
                }
              }
            }
          }
        });
      });
    });
  });
});
