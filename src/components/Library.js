import React from "react";
import LibrarySong from "./LibrarySong";

const Library = ({
  songs,
  setCurrentSong,
  audioRef,
  isPlaying,
  setSongs,
  currentSong,
}) => {
  return (
    <div className="library">
      <h2 className="library-title">Library</h2>
      <div className="library-songs">
        {songs.map((song) => (
          <LibrarySong
            audioRef={audioRef}
            songs={songs}
            setCurrentSong={setCurrentSong}
            song={song}
            isPlaying={isPlaying}
            setSongs={setSongs}
            key={song.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Library;
