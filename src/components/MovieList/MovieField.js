import React from 'react';
import { Link } from 'react-router-dom';

import no_image from '../../assets/no_image.svg';

import './style.css'
const MovieField = (props) => {
    return (
        <div className="movie-card">
        <Link to={`/detail/${props.movieId}`}> <img className="movie-figure" src={ props.image ? `https://image.tmdb.org/t/p/w500/${props.image}` : no_image } alt="CardImage"/> </Link>
            <div className="details">
            <Link to={`/detail/${props.movieId}`} > <h3>{props.movieTitle}</h3> </Link>
                <h4>{props.release}</h4>
               <Link to={`/detail/${props.movieId}`} > <p>Show details</p> </Link>
            </div>
        </div>
    )
}

export default MovieField;