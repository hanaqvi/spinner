import "./App.css";

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from "./components/Navbar/Navbar";
import Home from './pages/Home/Home'
import SearchResults from "./pages/SearchResults/SearchResults";
import ReleaseInfo from "./pages/ReleaseInfo/ReleaseInfo";

function App() {

  return (
    <BrowserRouter>

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search-results" element={<SearchResults />} />
        <Route path="/release-info/:mbid" element={<ReleaseInfo />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App