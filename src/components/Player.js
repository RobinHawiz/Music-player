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
  //Apparently in Javascript the % operator allways gives negative results on negative numbers. So I found this solution on the internet. Pretty nifty.
  Number.prototype.mod = function (n) {
    return ((this % n) + n) % n;
  };
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
  const skipTrackHandler = async (direction) => {
    //Get index of the current playing song
    let activeIndex = songs.findIndex((song) => song.id === currentSong.id);
    songs[activeIndex].active = false;

    if (direction === "skip-back") {
      //If the song we selected was the first one in the library, index will refer to the last song.
      activeIndex = (--activeIndex).mod(songs.length);
      songs[activeIndex].active = true;
    }
    //skip-forward
    else {
      //If the song we selected is the last one in the library, index will refer to the first song.
      activeIndex = (++activeIndex).mod(songs.length);
      songs[activeIndex].active = true;
    }
    await setCurrentSong(songs[activeIndex]);
    if (isPlaying) {
      audioRef.current.play();
    }
  };
  //Add the styles
  const trackAnim = {
    transform: `translateX(${songInfo.animationPercentage}%)`,
  };
  return (
    <div className="player">
      <div className="time-control">
        <p>{getTime(songInfo.currentTime)}</p>
        <div
          style={{
            background: `linear-gradient(to right, ${currentSong.color[0]}, ${currentSong.color[1]})`,
          }}
          className="track"
        >
          <input
            min={0}
            max={songInfo.duration || 0}
            value={songInfo.currentTime}
            onChange={dragHandler}
            type="range"
          />

          <div style={trackAnim} className="animate-track"></div>
        </div>
        <p>{songInfo.duration ? getTime(songInfo.duration) : "0:00"}</p>
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
