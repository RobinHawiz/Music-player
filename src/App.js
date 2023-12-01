import React, { useState } from "react";
import "./styles/app.scss";
//Adding components
import Player from "./components/Player";
import Song from "./components/Song";
//import Util
import songLibrary from "./util";

function App() {
  //State
  const [songs, setSongs] = useState(songLibrary());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  return (
    <div className="App">
      <Song currentSong={currentSong} />
      <Player />
    </div>
  );
}

export default App;
