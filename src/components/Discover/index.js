import React from 'react';
import { Link } from 'react-router-dom';

import no_image from '../../assets/no_image.svg'

import './style.css'
const MostPopular = (props ) =>{

    return (
        <>
        <div className="popular-container">
        <h4 className="discover-title" >{props.title}</h4>
            {props.movies.map(movie => (
                <div key={movie.id} className="movie-container">
                    <Link to={`/detail/${movie.id}`}> <img src={ movie.poster_path ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}` : no_image } alt="CardImage"/> </Link>

                    <div className={movie.vote_average > 7.5 ? 'vote_75-10' : 'vote_25-50' }>
                        <p >{movie.vote_average}</p>
                    </div>
                </div>
            ))}

        </div>
        </>
    )
}

export default MostPopular;