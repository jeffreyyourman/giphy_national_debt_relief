import React, { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import DisplayScreen from './components/DisplayScreen';
import axios from 'axios';

function App() {
  const [term, setTerm] = useState('');
  const [response, setResponse] = useState(null);

  const searchSubmit = async (searchTerm) => {
    const giphyResponse = await axios.get(`https://api.giphy.com/v1/gifs/search?api_key=luf1CU9IkTZFVRTAyuC7dkaTcL8utidh&q=${searchTerm}&limit=25&offset=0&rating=G&lang=en`);
    console.log(giphyResponse)
    setResponse(giphyResponse.data);
  }

  useEffect(()=>{
    searchSubmit('nba') //giphy initial render
  }, [])

  return (
    <div className="App">
      <SearchBar term={term} onTermChange={setTerm} onSubmit={()=>searchSubmit(term)}/>
      <DisplayScreen data={response}/>
    </div>
  );
}

export default App;
