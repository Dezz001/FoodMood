var mood = sessionStorage.getItem('emotion');
console.log(mood);

if (mood == "anger") {
   //Display the anger emoji in the div (#emoji-display) along with the word "ANGRY" in the div (#emotion-text) on the results-index page
   $("#emoji-display").attr('src', 'assets/images/angry-emoji.png');
   $("#emoji-display-text").text('ANGRY');

} else if (mood == "disgust") {
   $("#emoji-display").attr('src', 'assets/images/disgust-emoji.png');
   $("#emoji-display-text").text('DISGUSTED');

} else if (mood == "fear") {
    console.log("Im Scared Emoji");
   $("#emoji-display").attr('src', 'assets/images/fear-emoji.png');
   $("#emoji-display-text").text('FEARFUL');

} else if (mood == "happiness") {
   $("#emoji-display").attr('src', 'assets/images/happy-emoji.png');
   $("#emoji-display-text").text('HAPPY');

} else if (mood == "neutral") {
   $("#emoji-display").attr('src', 'assets/images/neutral-emoji.png');
   $("#emoji-display-text").text('NEUTRAL');

} else if (mood == "sadness") {
   $("#emoji-display").attr('src', 'assets/images/sad-emoji.png');
   $("#emoji-display-text").text('SAD');

} else if (mood == "surprise") {
   $("#emoji-display").attr('src', 'assets/images/surprise-emoji.png');
   $("#emoji-display-text").text('SURPRISED');

} else {
   //code that will execute if all above conditions are false
   console.log("you are dead");
};

