import "./App.css";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import HomeView from "./components/HomeView";
import AboutView from "./components/AboutView";
import { Routes, Route } from "react-router-dom";
import SearchView from "./components/SearchView";
import MovieView from "./components/MovieView";
import PageNotFoundView from "./components/PageNotFoundView";

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [searchText, setSearchText] = useState([""]);

  useEffect(() => {
    if (searchText) {
      fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=ab166ff82684910ae3565621aea04d62&language=en-US&query=${searchText}&page=1&include_adult=false`
      )
        .then((response) => response.json())
        .then((data) => {
          setSearchResults(data.results);
        });
    }
  }, [searchText]);

  return (
    <div className="App">
      <Navbar
        searchText={searchText}
        setSearchText={setSearchText}
      />
      <Routes>
        <Route
          path="/"
          element={<HomeView />}
        />
        <Route
          path="/about"
          element={<AboutView />}
        />
        <Route
          path="/search"
          element={
            <SearchView
              keyword={searchText}
              searchResults={searchResults}
            />
          }
        />
        <Route
          path="/movie/:id"
          element={<MovieView />}
        />
        <Route
          path="*"
          element={<PageNotFoundView />}
        />
      </Routes>
    </div>
  );
}

export default App;
