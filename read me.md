
Food Mood
Group Members: Donna England, Ethan Rogers, Jaclyn Pajor, Darrin Davis


Don't know what to eat?  Use this app to help!

Our app will ask permission to use the camera on your device.  You allow this to happen.

Then you will take a snapshot of your face from the video streaming from the camera. 

This snapshot will be sent to the face++ api which will return the emotion you have expressed. 

Based on the emotion displayed, you will be asked if this is correct. 

If this is correct, you will be provided with a list of food places based on your emotion. 

From this list of food places, google maps will show the location of each place. 


******** API's used: 
navigator.getUserMedia = The deprecated Navigator.getUserMedia() method prompts the user for permission to use up to one video input device (such as a camera or shared screen) and up to one audio input device (such as a microphone) as the source for a MediaStream. If permission is granted, a MediaStream whose video and/or audio tracks come from those devices is delivered to the specified success callback.  



Canvas Api = Added in HTML5, the HTML element can be used to draw graphics via scripting in JavaScript. For example, it can be used to draw graphs, make photo compositions, create animations, or even do real-time video processing or rendering.

face ++ api = Face++ detects and locates human faces within an image, and returns high-precision face bounding boxes. It returns multiple attributes.  We are just focusing on emotion. 

google maps api = able to provide food locations based on current location. 

********** New technology:  

navigator web apps both getUserMeia. 
The CanvasRenderingContext2D.drawImage() method of the Canvas 2D API provides different ways to draw an image onto the canvas.


*********** Presentation: 
Donna - Intro, camera, snapshot, face ++ api
Jackie - use emotion to relate to food
Ethan - CSS, UI, 
Darrin - use google maps to find places to eat


*********** Future 
....allow user to avoid use of camera and select an emotion  (set default emotion)
....navigator.geolocation = The Geolocation interface represents an object able to programmatically obtain the position of the device.
    It gives Web content access to the location of the device. This allows a Web site or app to offer customized results based on the user's location
....allow user to avoid geolocation and manually enter a zip code
....show local events in addtion to local restaurants based on emotion
....different choices based on male vs. female
....group vs. single person
....google maps, use a restaurant picture for each location

******* still need
user input validation
some type of repeating element
firebase????