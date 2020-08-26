import React, { useContext } from "react";
import { useHistory } from "react-router-dom";

import { GlobalContext } from "../context/Globalstate";
const Track = (props) => {
  const { getTrackdetail,getalbumdetail} = useContext(GlobalContext);
  let history = useHistory()
  return (
    <div className="col-md-6">
      <div className="card mb-4 shadow-sm">
        <div className="card-body">
          <h5>{props.track.artist_name}</h5>
          <p className="card-text">
            <strong>
              <i className="fa fa-play"></i> Track
            </strong>
            : {props.track.track_name}
          </p>
          <p className="card-text">
            <strong>
              <i className="fa fa-play-circle"></i> Album
            </strong>
            : {props.track.album_name}
          </p>
          <div class="card-footer">
            <button
              className="btn btn-secondary"
              onClick={() => {getTrackdetail(props.track.track_id);getalbumdetail(props.track.album_id);history.push("/details")}}
            >
              View Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Track;
