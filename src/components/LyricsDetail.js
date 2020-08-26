import React from 'react'

const LyricsDetail = (props) => {
    return (
        <>
        <div className="col-md-12">
            <div class="card" >
  <div class="card-title">
    <h3><i className="fa fa-play m-2"></i>  {props.track.album_name}</h3>
    <h3><i className="fa fa-music m-2"></i> {props.track.artist_name}</h3>
  </div>
  <div class="card-body">
    <p class="card-text">{props.lyrics.lyrics_body}</p>
  </div>
  <div class="card-footer">
      <h4>{props.track.album_copyright}</h4>
  </div>
        </div>
        </div>
        </>
    )
}

export default LyricsDetail
