import React from "react";
import "../styles/displayGif.css";

const DisplayGifs = ({ individualGifs }) => {
  const { images: {downsized: {url}}, title } = individualGifs
  return (
    <>
      <img
        className="gif"
        src={url}
        alt={title}
      />
    </>
  );
};

export default DisplayGifs;
