export const playAudio = (isPlaying, audioRef) => {
  if (isPlaying) {
    //We wait until the song we clicked on loads, THEN we play it.
    const playPromise = new Promise((resolve, reject) => {
      resolve(audioRef);
    });
    playPromise.then((audioRef) => {
      audioRef.current.play();
    });
  }
};
