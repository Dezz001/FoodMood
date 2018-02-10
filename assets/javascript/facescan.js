// define constraints, audio, video or both
var constraints = {
    video: {
      mandatory: {
        maxWidth: 640,
        maxHeight: 360
      }
    }
  };
  
  // MediaDevices.getUserMedia()  With the user's permission through a prompt, turns on a camera or screensharing and/or a microphone on the system and provides a MediaStream containing a video track and/or an audio track with the input.
  navigator.mediaDevices.getUserMedia(constraints)
  
  .then(function(stream) {
          video.srcObject = stream;
          video.play();
      })
      .catch(function(err) {
          console.log("An error occured! " + err);
      });
  
  // The querySelector() method returns the first element that matches a specified CSS selector(s) in the document.
    var video = document.querySelector("#video");
    var canvas = document.querySelector("#canvas");
    var ctx = canvas.getContext("video");
    var localMediaStream = document.querySelector(video.srcObject);
  
    function snapshot() {
            if (localMediaStream) {
        ctx.drawImage(video, 0, 0);
        document.querySelector('img').src = canvas.toDataURL('image/webp');
      }
    }
  
  document.querySelector("#start-camera").onclick = function(e) {
      canvas.getContext("2d").drawImage(video, 0, 0);
      var x = canvas.toDataURL();
      console.log(x)
      window.location.href='results-index.html'
  };

 
 