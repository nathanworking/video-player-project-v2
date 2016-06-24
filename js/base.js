// Video
var video = document.getElementById("video");

// Buttons
var playButton = document.getElementById("play-pause");
var muteButton = document.getElementById("mute");
var fullScreenButton = document.getElementById("fullscreen");

// Video Sliders
var progress = document.getElementById("progress");
var buffer = document.getElementById("buffer");

var caption = document.getElementsByClassName("caption");


  // Get currrent time of video & append to html
  setInterval(function() {
    var whereYouAt = video.currentTime;
    var minutes = Math.floor(whereYouAt / 60);
    var seconds = Math.floor(whereYouAt);
    var x = minutes < 10 ? "0" + minutes : minutes;
    var y = seconds < 10 ? "0" + seconds : seconds;

   document.getElementById("current_time").innerHTML = x + ":" + y;
  }, 400);

  // Get total time of video & append to html
  setInterval(function() {
    var totalTime = video.duration;
    var minutes = Math.floor(totalTime / 60);
    var seconds = Math.floor(totalTime);
    var x = minutes < 10 ? "0" + minutes : minutes;
    var y = seconds < 10 ? "0" + seconds : seconds;

   document.getElementById("total_time").innerHTML = x + ":" + y;
  }, 400);



    // Hide Controls
    video.controls = false;

    // Event listener for the play/pause button
    playButton.addEventListener("click", function() {
      if (video.paused === true) {
        // Play the video
        video.play();

        // Update the button icon to 'Pause'
        playButton.className = "pause-button";
      } else {
        // Pause the video
        video.pause();

        // Update the button icon to 'Play'
        playButton.className = "play-button";
      }
    });

    // Event listener for the mute button
    muteButton.addEventListener("click", function() {
      if (video.muted === false) {
        // Mute the video
        video.muted = true;

        // Update the button icon
        muteButton.className = "volume-off";
      } else {
        // Unmute the video
        video.muted = false;

        // Update the button icon
        muteButton.className = "volume-on";
      }
    });

    // Event listener for the full-screen button
    fullScreenButton.addEventListener("click", function() {
      if (video.requestFullscreen) {
        video.requestFullscreen();
      } else if (video.mozRequestFullScreen) {
        video.mozRequestFullScreen(); // Firefox
      } else if (video.webkitRequestFullscreen) {
        video.webkitRequestFullscreen(); // Chrome and Safari
      }
    });

    // Update the seek bar as the video plays
    video.addEventListener("timeupdate", function() {
      // Calculate the slider value
      var value = (100 / video.duration) * video.currentTime;
        progress.value = value;
    });
    function updating() {
      // Calculate the slider value
      var value = (100 / video.duration) * video.currentTime;
        progress.value = value;
    }
    video.addEventListener("timeupdate", updating);

    // Update the buffer bar as the video plays
    video.addEventListener("progress", function() {
      // Calculate the buffer value
      var buffered = ((video.buffered.end(0) / video.duration) * 100);
        buffer.value = buffered;
    });

    // Update video based on click
    function seek(e) {
        var percent = e.offsetX / this.offsetWidth;
        video.currentTime = percent * video.duration;
        progress.value = percent / 100;
        // Update the button icon to 'Pause'
        playButton.className = "pause-button";
    }
      progress.addEventListener("click", seek);


    // Pause the video when the slider handle is being dragged
    progress.addEventListener("mousedown", function() {
      video.pause();
    });

    // Play the video when the slider handle is dropped
    progress.addEventListener("mouseup", function() {
      video.play();
    });


    // Caption Highlighting
    function highlighter() {
      var text = video.currentTime;
      if(text > 0 && text < 4.130 ) {
            caption[0].classList.add('highlight');
        } else {
            caption[0].classList.remove('highlight');
        }
        if(text > 4.130 && text < 7.535 ) {
            caption[1].classList.add('highlight');

        } else {
            caption[1].classList.remove('highlight');
        }
        if(text > 7.535 && text < 11.270 ) {
            caption[2].classList.add('highlight');

        } else {
            caption[2].classList.remove('highlight');
        }
        if(text > 11.270 && text < 13.960 ) {
            caption[3].classList.add('highlight');
        } else {
            caption[3].classList.remove('highlight');
        }
        if(text > 13.960 && text < 17.940 ) {
            caption[4].classList.add('highlight');

        } else {
            caption[4].classList.remove('highlight');
        }
        if(text > 17.940 && text < 22.370 ) {
            caption[5].classList.add('highlight');

        } else {
            caption[5].classList.remove('highlight');
        }
        if(text > 22.370 && text < 26.880 ) {
            caption[6].classList.add('highlight');

        } else {
            caption[6].classList.remove('highlight');
        }
        if(text > 26.880 && text < 30.920 ) {
            caption[7].classList.add('highlight');

        } else {
            caption[7].classList.remove('highlight');
        }
        if(text > 32.100 && text < 34.730 ) {
            caption[8].classList.add('highlight');

        } else {
            caption[8].classList.remove('highlight');
        }
        if(text > 34.730 && text < 39.430 ) {
            caption[9].classList.add('highlight');

        } else {
            caption[9].classList.remove('highlight');
        }
        if(text > 39.430 && text < 41.190 ) {
            caption[10].classList.add('highlight');
        } else {
            caption[10].classList.remove('highlight');
        }
        if(text > 42.350 && text < 46.300 ) {
            caption[11].classList.add('highlight');
        } else {
          caption[11].classList.remove('highlight');
        }
        if(text > 46.300 && text < 49.270 ) {
            caption[12].classList.add('highlight');
        } else {
            caption[12].classList.remove('highlight');
        }
        if(text > 49.270 && text < 53.760 ) {
            caption[13].classList.add('highlight');
        } else {
            caption[13].classList.remove('highlight');
        }
        if(text > 53.760 && text < 57.780 ) {
            caption[14].classList.add('highlight');
        } else {
            caption[14].classList.remove('highlight');
        }
        if(text > 57.780) {
            caption[15].classList.add('highlight');
        } else {
            caption[15].classList.remove('highlight');
        }
    }

    video.addEventListener("timeupdate", (highlighter));
