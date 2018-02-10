window.onload = function() {
    var startPos;
    navigator.geolocation.getCurrentPosition(function(position) {
        console.log(position);
      // same as above
    }, function(error) {
      alert('Error occurred. Error code: ' + error.code);
      // error.code can be:
      //   0: unknown error
      //   1: permission denied
      //   2: position unavailable (error response from locaton provider)
      //   3: timed out
    });
  };