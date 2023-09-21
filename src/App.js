import './App.css'
import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import HomeView from './components/HomeView'
import AboutView from './components/AboutView'
import { Routes, Route } from 'react-router-dom'
import SearchView from './components/SearchView'

function App() {

  const [searchResults, setSearchResults] = useState([])
  const [searchText, setSearchText] = useState([''])

  

  return (
    <div className="App">
      <Navbar searchText={searchText} setSearchText={setSearchText} />
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/about" element={<AboutView />} />
        <Route path ="/search" element={<SearchView keyword={searchText} searchResults={searchResults} />} />
      </Routes>
    </div>
  );
}

export default App;
