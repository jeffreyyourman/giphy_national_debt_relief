import React, { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import DisplayList from './components/DisplayList';
import GiphyApi from './utils/GiphyApi';
// import axios from 'axios';

function App() {
  const [term, setTerm] = useState('');
  const [searchApi, response, errorMessage] = GiphyApi();

  // const [response, setResponse] = useState(null);

  // const searchSubmit = async (searchTerm) => {
  //   const giphyResponse = await axios.get(`https://api.giphy.com/v1/gifs/search?api_key=luf1CU9IkTZFVRTAyuC7dkaTcL8utidh&offset=0`, {
  //     params: {
  //       limit: 10,
  //       q: searchTerm,
  //       rating: 'G',
  //       lang:'en'
  //     }
  //   });
  //   setResponse(giphyResponse.data);
  //   setTerm('')
  // }

  useEffect(()=>{
    searchApi('nba') //giphy initial render
  }, [])

  return (
    <div className="App">
      <SearchBar term={term} onTermChange={setTerm} onSubmit={()=>searchApi(term)}/>
      <DisplayList data={response} showErrorMsg={errorMessage}/>
    </div>
  );
}

export default App;
