import React from 'react';
import { useParams } from 'react-router-dom';
import ReactPlayer from 'react-player';
import './Trailer.css';

function Trailer() {
  let params = useParams();
  let key = params.ytTrailerId;
  return (
    <div className="player-container">
      {key ? (
        <ReactPlayer
          url={`https://www.youtube.com/watch?v=${key}`}
          controls={true}
          width="100%"
          height="100%"
        />
      ) : null}
    </div>
  );
}

export default Trailer;
