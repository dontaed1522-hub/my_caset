var main = function() {
  var state;
  
  //The PLAY button
  $('#play').click(function(){
    $('#message').text("Playing track");
    $('#player').trigger("play");
  });
  //Pause
  $('#pause').click(function(){
    $('#message').text("Paused track");
    $('#player').trigger("pause");
  });
  //This will assign the variable muted with true or false
  muted = $("player").prop('muted');
  $("player").prop('muted', true);
  //mute
  $('#mute').click(function(){
    $('#message').text("Muted");
    $('#player').prop("muted", true);
  });
  //Unmute
  $('#unmute').click(function(){
    $('#message').text("Unmuted");
    $('#player').prop("muted", false);
  });
  //Stop
  $('#stop').click(function(){
    $('#message').text("Track stopped ");
    $('#player').trigger("pause");
    $('#player').prop("currentTime", 0);
  });
  //Volume Up
  $('#volumeUp').click(function(){
    var volume = $('#player').prop("volume");
    if (volume < 1) {
      $('#player').prop("volume", volume + 0.1);
    }
    $('#message').text("Volume: " + Math.round($('#player').prop("volume") * 100) + "%");
  });
  //Volume Down
  $('#volumeDown').click(function(){
    var volume = $('#player').prop("volume");
    if (volume > 0) {
        $('#player').prop("volume", volume - 0.1);
    }
    $('#message').text("Volume: " + Math.round($('#player').prop("volume") * 100) + "%");
  });


  
}

$(document).ready(main);
