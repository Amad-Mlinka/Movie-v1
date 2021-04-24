import React, { useState, useEffect } from 'react'
import './App.scss';
import { Movie } from './components/movie/Movie';

const FEATURED_API = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=70846ae2c3bdf81734c4dc36fab283cc&page=1";
const SEARCH_API = "https://api.themoviedb.org/3/search/movie?&api_key=70846ae2c3bdf81734c4dc36fab283cc&query="


function App() {

  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const getMovies= (API) => {
    fetch(API)
        .then(res => res.json())
        .then(data => {
          setMovies(data.results);
        })
  }


  const onSubmit = (e) => {
    console.log(searchTerm)
    e.preventDefault();
    if (searchTerm && searchTerm.length >= 3) {
      getMovies(SEARCH_API + searchTerm)
      setSearchTerm("")
    }
  }

  const onChange = (e) => {
    setSearchTerm(e.target.value)
  }


  useEffect(() => {
    getMovies(FEATURED_API)
    setSearchTerm("")
  }, []);


  useEffect(() => {
    if (searchTerm) {
      console.log(searchTerm)
      if (searchTerm.length >= 3) {
        getMovies(SEARCH_API + searchTerm)
        setSearchTerm("")
      }
      if (searchTerm.length < 3) {
        getMovies(FEATURED_API)
        setSearchTerm("")
      }
    }

  }, [searchTerm]);


  return (
    <div className="App">
      <header>
        <form action="" className="searchForm" onSubmit={onSubmit} value={searchTerm}>
          <input className="search" type="search" placeholder="Search" onChange={onChange} />
        </form>

      </header>
      <div className="movie-container">
        {
          movies.length > 0 && movies.map(movie => (
            <Movie key={movie.id} {...movie} />
          ))
        }
      </div>


    </div>
  );
}

export default App;
