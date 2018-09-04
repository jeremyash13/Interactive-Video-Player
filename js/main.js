//Variables
const mainVideo = document.querySelector('.main__video--main');
const capTrack = document.querySelector('.main__video--main').textTracks[0];
const spanCollection = document.querySelectorAll('span');
const textContainer = document.querySelector('.main__wrapper--text');


//Hook all audio & video elements, call MediaElementJS
$('video, audio').mediaelementplayer({
  //Options
  stretching: 'responsive'
});

//Highlights text as video plays, by hardcoded cue times
//within element's data-start and data-end attributes
mainVideo.addEventListener('timeupdate', (e) => {
  let time = e.target.currentTime;

  for (let i = 0; i < spanCollection.length; i += 1) {
    if (time >= spanCollection[i].dataset.start && time <= spanCollection[i].dataset.end) {
      spanCollection[i].className = 'caption-highlight';
    } else {
      spanCollection[i].className = '';
    }
  }
});

//Seeks to time in video by clicking on text
textContainer.addEventListener('click', (e) => {
  if (e.target.tagName === 'SPAN') {
    mainVideo.currentTime = e.target.dataset.start;
  }
});


// Highlights text as video plays, by getting the cue times from the VTT file
// requires a server to work, therefore violating project guidelines
// const highlightText = () => {
//   //Searchs cues[] (the cue list), for a match with active cue.
//   //if match is found, cues[i] corresponds perfectly with spanCollection[i].
//   //letting me know exactly which span element within the collection needs the
//   //'.caption-highlight' class.
//
//   let i = 0;
//   for (i=0; i<capTrack.cues.length; i+=1) {
//     if (capTrack.activeCues[0].text === capTrack.cues[i].text) {
//       spanCollection[i].className = 'caption-highlight';
//     } else {
//       spanCollection[i].className = '';
//     }
//   }
//   mainVideo.addEventListener('ended', () => {
//     spanCollection[i-1].className = '';
//   });
// };
// mainVideo.addEventListener('timeupdate', highlightText);
