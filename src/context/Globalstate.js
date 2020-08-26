import React from "react";
import { createContext, useReducer } from "react";
import Trackreducer from "./Trackreducer";
const initialState = {
  tracks: [],
  trackDetail:[],
  albumdetail:[],
  isSearch:false,
};

export const GlobalContext = createContext(initialState);
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Trackreducer, initialState);
  const getTracks = async () => {
    const response = await fetch(
      `https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/chart.tracks.get?chart_name=top&page=1&page_size=10&country=in&f_has_lyrics=1&apikey=${process.env.REACT_APP_MM_API_KEY}`
    );
    const data = await response.json();
    dispatch({
      type: "GET_TRACKS",
      payload:data.message.body.track_list,
    });
  };
  const searchTracks = async (term) => {
    const response = await fetch(
      `https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.search?q_artist=${term}&page_size=10&page=1&s_track_rating=desc&apikey=${process.env.REACT_APP_MM_API_KEY}`
    );
    const data = await response.json();
    dispatch({
      type: "SEARCH_TRACKS",
      payload:data.message.body.track_list,
    });
  };

  const getTrackdetail = async (id) => {
    const response = await fetch(
      `https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${id}&apikey=${process.env.REACT_APP_MM_API_KEY}`
    );
    const data = await response.json();
    dispatch({
      type: "SET_TRACK",
      payload:data.message.body.lyrics,
    });
  };
  const getalbumdetail = async (id) => {
    const response = await fetch(
      `https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/album.get?album_id=${id}&apikey=${process.env.REACT_APP_MM_API_KEY}`
    );
    const data = await response.json();
    dispatch({
      type: "SET_ALBUM",
      payload:data.message.body.album,
    });
  };
  return (
    <GlobalContext.Provider value={{ 
        tracks: state.tracks,
        isSearch:state.isSearch,
        trackDetail:state.trackDetail,
        albumdetail:state.albumdetail, 
        getTracks,searchTracks,getTrackdetail,getalbumdetail}}>
      {children}
    </GlobalContext.Provider>
  );
};
