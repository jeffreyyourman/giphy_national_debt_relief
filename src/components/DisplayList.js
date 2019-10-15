import React from 'react';
import DisplayGifs from './DisplayGif';
import '../styles/displayList.css'

const DisplayScreen = ({ data }) => {

  if(!data) {
    return <h1>loading...</h1>
  }

  const gifs = data.data.map((eachGif)=>{
    return <DisplayGifs key={eachGif.id} individualGifs={eachGif}/>
  })

  return (
    <div className="gifList">
      {gifs}
    </div>
  );
}

export default DisplayScreen;