import CallButton from './components/CallButton'
import CallDisplay from './components/CallDisplay'
import SearchBar from './components/SearchBar/SearchBar';
import "./App.css";

import { useState } from 'react';

function App() {

  const [apiData, setApiData] = useState(null);

  return (
    <>
      <SearchBar onSearch={console.log("hello")} />

      {/* <CallButton onDataFetched={setApiData} />
      <CallDisplay data={apiData} /> */}

    </>
  )
}

export default App