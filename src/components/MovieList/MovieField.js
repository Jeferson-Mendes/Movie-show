import React from 'react';

import no_image from '../../assets/no_image.svg';

import './style.css'
const MovieField = (props) => {
    return (
        <div className="movie-card">
            <img className="movie-figure" src={ props.image ? `https://image.tmdb.org/t/p/w500/${props.image}` : no_image } alt="CardImage"/>
            <div className="details">
                <h3>{props.movieTitle}</h3>
                <p>Ver detalhes</p>
            </div>
        </div>
    )
}

export default MovieField;