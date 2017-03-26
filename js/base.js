/*
Challenge:
Highlight the captions matching to the current scene and link all caprions to the accurate time

Way to go:
Get the current time from the video and if this is > 0 you know, that the video is playing right now.
Afterwards check which caption is matching, highlight it and set all others to time links.

Improvement:
Minimize the amount of loops the code has to perform by checking, if the highligting is the same as it was before.
Only enter the loop if the highligting has changed.
*/


const transcriptDiv = document.getElementById('transcript');
const paragraph = document.createElement('p');
const videoDiv = document.getElementById('videoDiv');
const vid = document.getElementById('vid');
const videoVariables = document.getElementsByClassName('mejs__player');

let fullTranscript = [];
let highlighting;


// function to set the links on the not-highlighted captions
function setTimeLink( startPoint) {
  vid.currentTime = startPoint;
};


// perform this code right at the beginning when the video is != playing. Fallback code
for (let i = 0; i < transcript.length; i++) {
  fullTranscript.push(transcript[i].caption);
}

paragraph.innerHTML = fullTranscript;
transcriptDiv.appendChild(paragraph);



// perform this code to check for time udates
vid.addEventListener('timeupdate', () => {


// perform this code if the video is playing or played before
  if (videoVariables[1].currentTime > 0) {

    // loop through the transcript
    for (let i = 0; i < transcript.length; i++) {



        // only enter this code if: there is a starting Point in the right timezone AND a endPoint in the right timezone AND the highlighting has changed
        // thanks to this checking prozess, all of this code will only entered once the caption has changed
        if (videoVariables[1].currentTime >= transcript[i].startPoint && videoVariables[1].currentTime <= transcript[i].endPoint && highlighting != transcript[i].caption) {

          let fullTranscript = []; // restet the entire text once the highlight has changed

          paragraph.innerHTML = ''; // reset the innerHTML so we can update it

          highlighting = transcript[i].caption; // set the new highlight


            // loop through the transcript once again to set the new innerHTML construction
            for (let y = 0; y < transcript.length; y++) {

              // set up the startPoint for each caption so we can link to it
              let startPoint = transcript[y].startPoint;

              // if you find the new highlight, set the class to highlight
              if (transcript[y].caption === highlighting) {
                fullTranscript.push('<span class="highlighting">' + transcript[y].caption + '</span> '); // push it to the array
              }
              // if you can't find a highlight set up a link on the caption and push it to the array
               else {fullTranscript.push('<span onclick="setTimeLink(' + startPoint + ')">' + transcript[y].caption + ' ' + '</span>');}
            }
          // after the loop finished, set up the new innerHTML and post it to the page
          paragraph.innerHTML = fullTranscript.join('');
          transcriptDiv.appendChild(paragraph);
        }

      }
  }

});
