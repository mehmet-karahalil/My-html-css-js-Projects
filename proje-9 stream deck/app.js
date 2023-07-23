var audioElements = ["muzik1", "muzik2", "muzik3"];
var currentSong = null;

audioElements.forEach((sound) => {
  var btn = document.createElement("button");
  btn.classList.add("btn");
  btn.innerHTML = sound;

  btn.addEventListener("click", () => {
    var audio = document.getElementById(sound);
    
    if (currentSong === audio) {
      if (audio.paused) {
        audio.play();
      } else {
        audio.pause();
      }
    } else {
      stopSongs();
      audio.currentTime = 0;
      audio.play();
      currentSong = audio;
    }
  });

  document.getElementById("buttons").appendChild(btn);
});

function stopSongs() {
  audioElements.forEach((sound) => {
    const audio = document.getElementById(sound);
    audio.pause();
    audio.currentTime = 0;
  });
  currentSong = null;
}
