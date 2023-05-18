// Selecina o elemneto de video
const video = document.getElementById('video-player');

// Definindo um array com as URLs dos video;
const videoSource = [
  "https://cmaf.fly.latam.hbomaxcdn.com/videos/GYuFxFgzSGcIMvgEAAAAG/v/0_3d5bc3/v12.mp4",
  "https://cmaf.cf.latam.hbomaxcdn.com/videos/GYZ1KOABV3oydnQEAAAAE/0/f83e29/v/v11.mp4",
  "https://cmaf.akm.latam.hbomaxcdn.com/videos/GYk7rQgnSAJ25wgEAAAAC/0/cda460/v/v13.mp4"
];

// Definir o indice inicial
let currentVideoIndex = 0;

// Adiciona um listner de evento "ended" ao video
video.addEventListener("ended", () => {
  // Se o video atual for o ultimo do array, reinicie
  if (currentVideoIndex === videoSource.length - 1) {
    currentVideoIndex = 0;
  } else {
    // caso contrario, passa para o proximo video
    currentVideoIndex++;
  }

  // Altera a font de video para o proximo da lista
  video.src = videoSource[currentVideoIndex];

  //Reiniciar a reprodução
  video.play();
})