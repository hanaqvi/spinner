import CallButton from './components/CallButton'
import CallDisplay from './components/CallDisplay'

import { useState } from 'react';

function App() {

  const [apiData, setApiData] = useState(null);

  return (
    <>
      <CallButton onDataFetched={setApiData} />
      <CallDisplay data={apiData} />
    </>
  )
}

export default App