const audioPlayer = document.getElementById('audio-player');
const trackList = document.querySelectorAll('#track-list li');
const nextBtn = document.getElementById('next-btn');
const prevBtn = document.getElementById('prev-btn');

let currentTrack = 0;

function loadTrack(index) {
  trackList.forEach(track => track.classList.remove('active'));
  const selectedTrack = trackList[index];
  selectedTrack.classList.add('active');
  audioPlayer.src = selectedTrack.getAttribute('data-src');
  audioPlayer.play();
}

trackList.forEach((track, index) => {
  track.addEventListener('click', () => {
    currentTrack = index;
    loadTrack(currentTrack);
  });
});

nextBtn.addEventListener('click', () => {
  currentTrack = (currentTrack + 1) % trackList.length;
  loadTrack(currentTrack);
});

prevBtn.addEventListener('click', () => {
  currentTrack = (currentTrack - 1 + trackList.length) % trackList.length;
  loadTrack(currentTrack);
});

// Auto play next track when current ends
audioPlayer.addEventListener('ended', () => {
  currentTrack = (currentTrack + 1) % trackList.length;
  loadTrack(currentTrack);
});

// Load first track on page load
window.addEventListener('DOMContentLoaded', () => {
  loadTrack(currentTrack);
});

const volumeSlider = document.getElementById('volume-slider');

// Set initial volume
audioPlayer.volume = volumeSlider.value;

volumeSlider.addEventListener('input', () => {
  audioPlayer.volume = volumeSlider.value;
});
