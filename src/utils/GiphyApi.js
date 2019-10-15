import { useState, useEffect } from "react";
import axios from 'axios';

export default () => {
  const [response, setResponse] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  const searchApi = async searchTerm => {
    try {
      const giphyResponse = await axios.get(
        `https://api.giphy.com/v1/gifs/search?api_key=luf1CU9IkTZFVRTAyuC7dkaTcL8utidh&offset=0`,
        {
          params: {
            limit: 10,
            q: searchTerm,
            rating: "G",
            lang: "en"
          }
        }
      );
      setResponse(giphyResponse.data);
    } catch (err) {
      setErrorMessage('Something went wrong');
    }
  };

  useEffect(()=>{
    searchApi('hi there');
  }, [])
  return [searchApi, response, errorMessage];
};
