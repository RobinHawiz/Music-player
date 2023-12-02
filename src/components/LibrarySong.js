import React from "react";

const LibrarySong = ({ song, setCurrentSong, audioRef, isPlaying }) => {
  //Event handlers
  const songSelectHandler = () => {
    setCurrentSong(song);
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
  return (
    <div onClick={songSelectHandler} className="library-song">
      <img alt={song.name} src={song.cover}></img>
      <div className="song-description">
        <h2>{song.name}</h2>
        <h3>{song.artist}</h3>
      </div>
    </div>
  );
};

export default LibrarySong;
