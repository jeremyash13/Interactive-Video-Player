//Variables
let mainVideo = document.querySelector('.main__video--main');
let capTrack = document.querySelector('.main__video--main').textTracks[0];
let spanCollection = document.querySelectorAll('span');

//Hook all audio & video elements, call MediaElementJS
$('video, audio').mediaelementplayer({
  //Options
  stretching: 'responsive'
});


const highlightText = () => {
  //Searchs the cue list for a match with active cue,
  //if match is found, cues[i] corresponds perfectly with spanCollection[i],
  //letting me know exactly which span element within the collection needs the
  //'.caption-highlight' class

  let i = 0;
  for (i=0; i<capTrack.cues.length; i+=1) {
    if (capTrack.activeCues[0].text === capTrack.cues[i].text) {
      spanCollection[i].className = 'caption-highlight';
    } else {
      spanCollection[i].className = '';
    }
  }
  mainVideo.addEventListener('ended', () => {
    spanCollection[i-1].className = '';
  });
};

mainVideo.addEventListener('timeupdate', highlightText);
