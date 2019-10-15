import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import DisplayList from "./components/DisplayList";
import GiphyApi from "./utils/GiphyApi";

function App() {
  const [term, setTerm] = useState("");
  const [searchApi, response, errorMessage] = GiphyApi();

  return (
    <div className="App">
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onSubmit={() => {
          searchApi(term, setTerm);
          setTerm("");
        }}
      />
      <DisplayList dataGif={response} showErrorMsg={errorMessage} />
    </div>
  );
}

export default App;
