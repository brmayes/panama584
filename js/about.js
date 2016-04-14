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
            bio += '<div class="bio"><p class="bio-body">' + teamMember.bio + '</p></div>';

            if (teamMember.twitter !== 0) {
              // console.log teamMember.twitter
              bio += '<div class="social"><p class="bio-twitter"><a target="_blank" href="http://www.twitter.com/' + teamMember.twitter + '">@' + teamMember.twitter + '</a></p></div>';
            }else if (teamMember.instagram !== 0){
              bio += '<div class="social"><p class="bio-instagram"><a target="_blank" href="http://www.instagram.com/' + teamMember.instagram + '">@' + teamMember.instagram + '</a></p></div>';
            } else {}

            if (teamMember.website !== 0) {
              bio += '<div class="social"><p class="bio-website"><a target="_blank" href="http://www.' + teamMember.website + '">' + teamMember.website + '</a></p></div>';
            }

          bio += '</div>'; //end of body of content
        bio += '</div>'; //end of overlay
        bio += '<p class="bio-name hidden-xs">' + teamMember.first + ' ' + teamMember.last + '</p>';
        bio += '<p class="bio-role hidden-xs">' + teamMember.role + '</p>';
        bio += '<p class="bio-name visible-xs">' + teamMember.first + ' ' + teamMember.last + ', ' + teamMember.role + '</p>';//bio info for mobile

        //mobile social media
        if (teamMember.twitter !== 0) {
          // console.log teamMember.twitter
          bio += '<div class="visible-xs"><p class="bio-role"><a target="_blank" href="http://www.twitter.com/' + teamMember.twitter + '">@' + teamMember.twitter + '</a>' + ' | ' + '<a target="_blank" href="http://www.' + teamMember.website + '">' + teamMember.website + '</a>' + '</p></div>';
        }else if (teamMember.instagram !== 0){
          bio += '<div class="visible-xs"><p class="bio-role"><a target="_blank" href="http://www.instagram.com/' + teamMember.instagram + '">@' + teamMember.instagram + '</a>' + ' | ' + '<a target="_blank" href="http://www.' + teamMember.website + '">' + teamMember.website + '</a>' + '</p></div>';
        } else if (teamMember.website == 0){}



      bio += '</div>';


      if (i % 3 == 0) {
        bio += '</div>'
      }

    });

    $('#teambios').append(bio);

  }
});
