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
      var firstname = teamMember.first.replace(/\s/g, '');

      if (i % 3 == 0) {
        bio += '<div class="row">';
      }

      bio += '<div class="col-md-4">';
        bio += '<div class="bio-pic">'; //start of overlay

          bio += '<img class="bio-headshot bio-pic__image" src="assets/about/portraits/' + firstname.toLowerCase() + '_' + teamMember.last.toLowerCase() + '.JPG" alt="teamImg" />';
          bio += '<div class="bio-pic__body hidden-xs">';
          bio += '<p class="bio-body">' + teamMember.bio + '</p>';

            if (teamMember.twitter !== 0) {
              bio += '<p class="bio-twitter">Twitter: <a href="http://www.twitter.com/' + teamMember.twitter + '" target="_blank">@' + teamMember.twitter + '</a></p>';
            }

            if (teamMember.instagram !== 0) {
              bio += '<p class="bio-instagram">Instagram: <a href="http://www.instagram.com/' + teamMember.instagram + '" target="_blank">@' + teamMember.instagram +  '</a></p>';
            }

            if (teamMember.website !== 0) {
              bio += '<p class="bio-website"><a target="_blank" href="http://www.' + teamMember.website + '">' + teamMember.website + '</a></p>';
            }

        bio += '</div>'; //end of body of content
        bio += '</div>'; //end of overlay
        bio += '<div class="hidden-xs">';
        bio += '<p class="bio-name">' + teamMember.first + ' ' + teamMember.last + '</p>';
        bio += '<p class="bio-role">' + teamMember.role + '</p>';
        bio += '</div>'; //end of desktop
        bio += '<div class="bio-mobile visible-xs center-text">';
        bio += '<p class="bio-name">' + teamMember.first + ' ' + teamMember.last + ', ' + teamMember.role + '</p>';
        bio += '<p class="bio-role-mobile"><a href="http://www.' + teamMember.website + '" target="_blank">Website</a>' + ' | ';

          if (teamMember.twitter !== 0) {
            bio += '<p class="bio-role-mobile"><a href="http://www.twitter.com/' + teamMember.twitter + '" target="_blank">@' + teamMember.twitter + '</a></p>';
          }

          if (teamMember.instagram !== 0){
            bio += '<p class="bio-role-mobile"><a href="http://www.instagram.com/' + teamMember.instagram + '" target="_blank"> @' + teamMember.instagram + '</a></p>';
          }

        bio += '</div>'; //end of mobile bio info
      bio += '</div>';


      if (i % 3 == 0) {
        bio += '</div>'
      }

    });

    $('#teambios').append(bio);

  }
});
