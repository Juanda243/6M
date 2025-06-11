const music1 = document.getElementById("cancion1");
const music2 = document.getElementById("cancion2");
const playBtn = document.getElementById("playMusic");

playBtn.addEventListener("click", () => {
  music1.play();
});

music1.addEventListener("ended", () => {
  music2.play();
});

music2.addEventListener("ended", () => {
  music1.play();
});
