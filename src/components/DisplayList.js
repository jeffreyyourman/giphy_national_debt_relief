import React from 'react';
import DisplayGifs from './DisplayGif';
import '../styles/displayList.css'

const DisplayScreen = ({ data, showErrorMsg }) => {
// console.log(showErrorMsg);
  if(showErrorMsg.length !== 0 ) {
    return <h1 className="center">{showErrorMsg}</h1> 
  }
  if(!data) {
    return <h1 className="center">loading...</h1>
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