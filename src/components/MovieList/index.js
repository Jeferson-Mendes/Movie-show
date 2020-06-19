import React from 'react';

import './style.css'

import MovieField from './MovieField';

const MovieList = (props) => {
    return (
        <div className="movie-content">
            <div className="grid">
                {props.movieList.map((movie, index) => (

                <MovieField key={index} movieTitle={movie.title} release={movie.release_date} image={movie.poster_path} />  
                
                ))}
            </div>
        </div>
    )
}

export default MovieList;