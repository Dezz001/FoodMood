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
  //  if err, permission denied, ask for mood? or display all moods and have them click on? 
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
      var snap = canvas.toDataURL();
    snapReduced = snap.replace("data:image/png;base64,", "");
   

  // Need a name for emoji face "button"
    $("#start-camera").on("click", function() {
        var queryURL = "https://cors-anywhere.herokuapp.com/https://api-us.faceplusplus.com/facepp/v3/detect";
        // the ajax will call to the URL with a promise to return the data when it is available. 
         $.ajax({
          url: queryURL,
          method: "POST",
          data: {
            api_key:"p6UKO6ReXnPt97o_onB63zBEqgN9lid-",
            api_secret:"j6FMcivnXOlnv9V9JXem932TziruiJby",
            image_base64: snapReduced.toString(),
            return_attributes:"emotion"
           }
        }).done(function(response) {
  // Assign a variable to each emotion return to isolate the numeric value
        var anger = response.faces[0].attributes.emotion.anger;
        var disgust = response.faces[0].attributes.emotion.disgust;
        var fear = response.faces[0].attributes.emotion.fear;
        var happiness = response.faces[0].attributes.emotion.happiness;
        var neutral = response.faces[0].attributes.emotion.neutral;
        var sadness = response.faces[0].attributes.emotion.sadness;
        var surprise = response.faces[0].attributes.emotion.surprise;
  // calculate the highest emotion from the list 
        // var a = (Math.max(anger, disgust, fear, happiness, neutral, sadness, surprise));
        // console.log("highest emotion = " + a);
        var emotionArray = [];
        emotionArray.push({
          emotion: "anger",
          value: anger
        });
        emotionArray.push({
          emotion: "disgust",
          value: disgust
        });emotionArray.push({
          emotion: "fear",
          value: fear
        });emotionArray.push({
          emotion: "happiness",
          value: happiness
        });emotionArray.push({
          emotion: "neutral",
          value: neutral
        });emotionArray.push({
          emotion: "sadness",
          value: sadness
        });
        emotionArray.push({
          emotion: "surprise",
          value: surprise
        });
        // create the highestVal variable. Then loop through the array and compare each value to determine the highest
        var highestVal = {
          value: 0
        };
        for (var i = 0; i < emotionArray.length; i++) {
          if (emotionArray[i].value > highestVal.value) {
            highestVal = emotionArray[i];
          };
        };
        console.log(highestVal.emotion);

        sessionStorage.clear();
        sessionStorage.setItem("emotion", highestVal.emotion);
        window.location.href='results-index.html'
  });
});
};

  
 
 

  