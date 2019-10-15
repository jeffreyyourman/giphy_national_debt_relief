import React from "react";
import "../styles/displayGif.css";

const DisplayGifs = ({ individualGifs }) => {
  console.log("individualGifs", individualGifs);
  // displaying individual gifs here through img tag.
  return (
    <>
      <img
        className="gif"
        src={individualGifs.images.downsized.url}
        alt={individualGifs.title}
      />
    </>
  );
};

export default DisplayGifs;
