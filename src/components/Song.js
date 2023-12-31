import React from "react";

const Song = ({ currentSong }) => {
  return (
    <div className="song-container">
      <img alt={currentSong.name} src={currentSong.cover}></img>
      <h2>{currentSong.name}</h2>
      <h3>{currentSong.artist}</h3>
      <a target="_blank" href={currentSong.link}>
        {currentSong.link}
      </a>
    </div>
  );
};

export default Song;
