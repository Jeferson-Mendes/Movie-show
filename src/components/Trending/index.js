import React from 'react';
import { Link } from 'react-router-dom';

import './style.css';

const Trending = (props) => {
    return(
        <div className="trending-content">
            <div className="movies-week">
                <h1>Trending movies of Week</h1>
                {props.trending.map(movie => (
                <Link key={movie.id} to={`/detail/${movie.id}`} > <h3 > {movie.title} </h3> </Link>
                ))}
            </div>
        </div>
    )
}

export default Trending;