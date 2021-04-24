import React, { useState, useEffect } from 'react'
import './App.scss';
import { Movie } from './components/movie/Movie';

const FEATURED_API = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=70846ae2c3bdf81734c4dc36fab283cc&page=1";
const SEARCH_API = "https://api.themoviedb.org/3/search/movie?&api_key=70846ae2c3bdf81734c4dc36fab283cc&query="



function App() {

  const [movies, setMovies] = useState([]);


  useEffect(() => {
    fetch(FEATURED_API)
      .then(res => res.json())
      .then(data => {
        setMovies(data.results);
      })


  }, []);

  return (
    <div className="App">
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
