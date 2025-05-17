const musicBtn = document.getElementById("music-btn");
const audio = document.getElementById("bg-music");
let isPlaying = false;

musicBtn.addEventListener("click", () => {
  if (!isPlaying) {
    audio.play();
    musicBtn.textContent = "🔇 Music Off";
  } else {
    audio.pause();
    musicBtn.textContent = "🔊 Music On";
  }
  isPlaying = !isPlaying;
});


const moodBtn = document.getElementById("mood-btn");
const body = document.body;
const music = document.getElementById("bg-music");
let darkMood = true;

moodBtn.addEventListener("click", () => {

  darkMood = !darkMood;

  if (darkMood) {
    body.classList.remove("light-mood");
    body.style.background = "radial-gradient(circle at top, #0b0c2a, #050510)";
    music.src = "assets/music/theme.mp3";
    moodBtn.textContent = "🌙 Change Mood";
  } else {
    body.classList.add("light-mood");
    body.style.background = "radial-gradient(circle at bottom,rgb(255, 240, 198),rgb(233, 160, 91))";
    music.src = "assets/music/soft.mp3";
    moodBtn.textContent = "🌞 Back to Dark";
  }

  

  music.play();
});



const loreButtons = document.querySelectorAll(".lore-title");

loreButtons.forEach(button => {
  button.addEventListener("click", () => {
    const content = button.nextElementSibling;
    const isVisible = content.style.display === "block";
    content.style.display = isVisible ? "none" : "block";
  });
});






const loreItems = document.querySelectorAll('.lore-item');
const unlockedLore = document.getElementById('unlocked-lore');
let foundItems = new Set();

loreItems.forEach(item => {
  item.addEventListener('click', () => {
    const id = item.dataset.id;
    foundItems.add(id);
    item.style.display = 'none';

    if (foundItems.size === loreItems.length) {
      unlockedLore.classList.remove('hidden');
    }
  });
});


const collectSound = document.getElementById('collect-sound');

item.addEventListener('click', () => {
  collectSound.play();
  // rest of logic...
});








