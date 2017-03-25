const transcriptDiv = document.getElementById('transcript');
const paragraph = document.createElement('p');
const videoDiv = document.getElementById('videoDiv');
const vid = document.getElementById('vid');
const videoVariables = document.getElementsByClassName('mejs__player');
const fullTranscript = [];

let highlighting;



// as long as the video runs, check if the currentTime is >= startPoint AND <= endPoint
// if you find the right caption put it in a span
vid.addEventListener('timeupdate', () => {


  if (videoVariables[1].currentTime > 0) {


    for (let i = 0; i < transcript.length; i++) {
      if (videoVariables[1].currentTime >= transcript[i].startPoint && videoVariables[1].currentTime <= transcript[i].endPoint && highlighting != transcript[i].caption) {
        highlighting = transcript[i].caption;
        paragraph.textContent += '<span>' + transcript[i].caption + '</span>';
      console.log(highlighting);
      }
    }
  }
  else {
    for (let i = 0; i < transcript.length; i++) {
      paragraph.textContent += transcript[i].caption;
      transcriptDiv.appendChild(paragraph);
    }
  }

  // paragraph.textContent = '';

});
