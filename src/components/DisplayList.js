import React from "react";
import DisplayGifs from "./DisplayGif";
import "../styles/displayList.css";

const DisplayList = ({ dataGif, showErrorMsg }) => {
  
  if (showErrorMsg.length) {
    return <h1 className="errorHeading">{showErrorMsg}</h1>;
  }
  
  if (!dataGif) {
    return <h1 className="loadingGifs">loading...</h1>;
  }
  const {data} = dataGif;
  
  const gifs = data.map(eachGif => {
    return <DisplayGifs key={eachGif.id} individualGifs={eachGif} />;
  });

  return <div className="gifList">{gifs}</div>;
};

export default DisplayList;
