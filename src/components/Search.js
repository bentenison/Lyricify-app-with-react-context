import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/Globalstate";
function Search() {
  const [Query, setQuery] = useState("");
  const { searchTracks } = useContext(GlobalContext);
  const Handlesubmit = (e) => {
    e.preventDefault();
    console.log(Query)
    searchTracks(Query);
  };
  return (
    <div className="container">
      <form className="form-group  my-3">
        <input
          className="form-control"
          type="search"
          value={Query}
          onChange={(e)=>setQuery(e.target.value)}
          placeholder="Search"
          aria-label="Search"
        />
        <button
          className="btn btn-outline-success my-2"
          type="submit"
          onClick={Handlesubmit}
        >
          Search
        </button>
      </form>
    </div>
  );
}

export default Search;
