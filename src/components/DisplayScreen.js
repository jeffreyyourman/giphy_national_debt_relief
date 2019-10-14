import React from 'react';
import DisplayGifs from './DisplayGifs';

const DisplayScreen = ({ data }) => {

  if(!data) {
    return <h1>loading...</h1>
  }

  const gifs = data.data.map((eachGif)=>{
    return <DisplayGifs key={eachGif.id} gif={eachGif}/>
  })
  
  return (
    <div>
      {gifs}
    </div>
  );
}

export default DisplayScreen;