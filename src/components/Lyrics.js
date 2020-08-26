import React, { useContext } from "react";
import { GlobalContext } from "../context/Globalstate";
import LyricsDetail from "../components/LyricsDetail";
const Lyrics = () => {
  const { track, trackDetail,albumdetail} = useContext(GlobalContext);
  return (
    <div>
      <h1 className="my-5 text-center">Your Track Lyrics.. Enjoy!!!</h1>
      <div className="row my-3">
          <LyricsDetail lyrics={trackDetail} track={albumdetail}/>
      </div>
    </div>
  );
};

export default Lyrics;
