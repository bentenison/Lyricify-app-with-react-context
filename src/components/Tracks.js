import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../context/Globalstate";
import Track from "./Track";
const Tracks = () => {
  //Use Context Hook and Get wanted data from global context
  const context = useContext(GlobalContext);
  //Useeefect Hook reruns as componentdidmount( ) life cycle method
  useEffect(() => {
    context.getTracks();
  }, []);
  const { tracks, isSearch } = context;
  return (
    <React.Fragment>
      {isSearch ? (
        <h1 className="mb-5 mt-5 text-center">
          Your Search Results
        </h1>
      ) : (
        <h1 className="mb-5 mt-5 text-center">
          Top 10 Tracks Around the Globe
        </h1>
      )}
      <div className="row my-2">
        {tracks.map((track) => (
          <Track key={track.track.track_id} track={track.track} />
        ))}
      </div>
    </React.Fragment>
  );
};
export default Tracks;
