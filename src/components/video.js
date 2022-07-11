import React from "react";

const Video = (props) => {
  return (
    <div className="video-container">
      <div className="video-image">
        <img src={props.thumbnail} alt="same alt value" />
      </div>
      <div className="video-info">
        <h3>{props.title}</h3>
        <p>upload date :2009</p>
        <h4> channel's tittle: rod stewart</h4>
      </div>
    </div>
  );
};

export default Video;
