import React from 'react'
import "./Movie.scss"

const IMAGE_API = "https://image.tmdb.org/t/p/w500/"

export const Movie = (movie) => {
    return (
        <div className="movie">
            <img src={movie.poster_path!=null ? IMAGE_API + movie.poster_path:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/488px-No-Image-Placeholder.svg.png"} alt=""/>  
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
