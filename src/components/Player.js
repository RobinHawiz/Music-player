import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faAngleLeft,
  faAngleRight,
  faPause,
} from "@fortawesome/free-solid-svg-icons";
const Player = ({
  isPlaying,
  setIsPlaying,
  audioRef,
  setSongInfo,
  songInfo,
  currentSong,
  setCurrentSong,
  songs,
  setSongs,
}) => {
  //Event handlers
  const playSongHandler = () => {
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(!isPlaying);
    } else {
      audioRef.current.play();
      setIsPlaying(!isPlaying);
    }
  };
  const getTime = (time) => {
    return (
      Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
    );
  };
  const dragHandler = (e) => {
    audioRef.current.currentTime = e.target.value;
    setSongInfo({ ...songInfo, currentTime: e.target.value });
  };
  const skipTrackHandler = (direction) => {
    let activeIndex = -1;
    //Get index of the current playing song AND set that song to false.
    do {
      activeIndex++;
      if (songs[activeIndex].active === true) {
        songs[activeIndex].active = false;
        break;
      }
    } while (songs[activeIndex].active === false);

    if (direction === "skip-back") {
      //If the song we selected is the first one in the library, index will refer to the last song.
      if (activeIndex === 0) {
        activeIndex = songs.length - 1;
        songs[activeIndex].active = true;
      } else {
        activeIndex--;
        songs[activeIndex].active = true;
      }
    }
    //skip-forward
    else {
      //If the song we selected is the last one in the library, index will refer to the first song.
      if (activeIndex === songs.length - 1) {
        activeIndex = 0;
        songs[activeIndex].active = true;
      } else {
        activeIndex++;
        songs[activeIndex].active = true;
      }
    }
    setCurrentSong(songs[activeIndex]);
    setSongs(songs);

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
    <div className="player">
      <div className="time-control">
        <p>{getTime(songInfo.currentTime)}</p>
        <input
          min={0}
          max={songInfo.duration || 0}
          value={songInfo.currentTime}
          onChange={dragHandler}
          type="range"
        />
        <p>{getTime(songInfo.duration)}</p>
      </div>
      <div className="play-control">
        <FontAwesomeIcon
          onClick={() => skipTrackHandler("skip-back")}
          className="skip-back"
          size="2x"
          icon={faAngleLeft}
        />
        <FontAwesomeIcon
          onClick={playSongHandler}
          className="play"
          size="2x"
          icon={isPlaying ? faPause : faPlay}
        />
        <FontAwesomeIcon
          onClick={() => skipTrackHandler("skip-forward")}
          className="skip-forward"
          size="2x"
          icon={faAngleRight}
        />
      </div>
    </div>
  );
};

export default Player;
