import React from 'react'
import "./Movie.scss"

const IMAGE_API = "https://image.tmdb.org/t/p/w500/"

export const Movie = (movie) => {
    console.log(movie)
    return (
        <div className="movie">
            <img src={IMAGE_API + movie.poster_path} alt=""/>  
            <div className="movie-info">
                <h3>{movie.title}</h3>
            </div>
            <div className="movie-over">
                <h2>Overview</h2>
                <p>{movie.overview}</p>
            </div>
        </div>
    )
}
