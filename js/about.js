jQuery(document).ready(function() {

  var bio = "";

  jQuery.ajax({
    type: "GET",
    url: "../assets/about/team.json",
    dataType: "json",
    success: buildTeam
  });

  function buildTeam(team) {


    $.each(team,function(i,teamMember){
      var i = 1;

      if (i % 3 == 0) {
        bio += '<div class="row">';
      }

      bio += '<div class="col-md-4">';
        bio += '<div class="bio-pic">'; //start of overlay
          bio += '<img class="bio-headshot bio-pic__image" src="assets/about/headshots/' + teamMember.headshot + '" alt="teamImg" />';
          bio += '<div class="bio-pic__body">';
            bio += '<p class="bio-name">' + teamMember.bio + '</p>';

            if (teamMember.twitter !== '') {
              bio += '<p class="bio-twitter">@' + teamMember.twitter + '</p>';
            }

            if (teamMember.website !== '') {
              bio += '<p class="bio-website"><a target="_blank" href="http://www.' + teamMember.website + '">"' + teamMember.website + '</a></p>';
            }

          bio += '</div>'; //end of body of content
        bio += '</div>'; //end of overlay
        bio += '<p class="bio-name">' + teamMember.name + '</p>';
      bio += '</div>';


      if (i % 3 == 0) {
        bio += '</div>'
      }

    });

    $('#teambios').append(bio);

  }
});
