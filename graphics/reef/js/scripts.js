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
            "name": "High-density growth bands",
            "id": "high_density",
            "description": "During wet seasons, corals grow more quickly. By the end of a yearly cycle, a coral will have grown a new, high-density layer. Researchers identify these high-growth layers in the years of a coral&apos;s life by sending the coral core through a scanner that produces an image like the one above. Here, lighter shades are where layers are denser and allow the researchers to determine what years the environment was healthier for corals and their ecosystems."
          }, {
            "name": "Low-density growth bands",
            "id": "low_density",
            "description": "During dry seasons such as during the winter, corals grow slowly. By the end of a yearly cycle, a coral will have grown a new layer that has low density. Researchers identify these low-growth layers in the years of a coral&apos;s life by sending the coral core through a scanner produces an image like the one above. Here, lighter shades are where layers are less dense and allow the researchers to determine what years the environment was less healthy for corals."
          }, {
            "name": "Polyp and polyp paths",
            "id": "polyp_paths",
            "description": "Polyps are the bodies of each individual coral. In the above image of a segment of a massive starlet coral colony, the polyps have grown over the years from the left (the base of the coral) to the right and upward (outward from the base) until they protrude from the right of the image out of the colony&apos;s main body. The polyps have a clear body and white skeleton similar to human bones. They appear colored only by the tiny algae that live in their tissues."
          }, {
            "name": "Erosion",
            "id": "erosion",
            "description": "Like with many natural structures, corals erode over time, and their skeletons become damaged. Because of this, some of the coral cores&apos; scans return rigid, black gaps of air. Erosion is typical of corals, but because some skeletal matter is washed away, researchers have less data from the cores to assess coral health."
          }];

          var elemID = jQuery(this).attr('id');
          if (elemID === undefined) {
            //do nothing
          } else {
            for (var i = 0; i < coralData.length; i++) {
              if (elemID == coralData[i].id) {
                  var contentInformation = "";
                  contentInformation += '<h4>' + coralData[i].name + '</h4><p>' + coralData[i].description + '</p>';

                  document.getElementById("info").innerHTML = contentInformation;
              }
            }
          };
        });
      });
    });
  });
});
