// STEP 6: Wrap the entire contents of SpeakGoodBye.js inside of an IIFE
(function (window) {
  // STEP 7: Create an object, called 'byeSpeaker'
  var byeSpeaker = {};

  // STEP 8: Attach a 'speak' method to the byeSpeaker object
  var speakWord = "Good Bye";
  byeSpeaker.speak = function (name) {
    console.log(speakWord + " " + name);
  };

  // STEP 9: Expose the byeSpeaker object to the global scope
  window.byeSpeaker = byeSpeaker;

})(window);
