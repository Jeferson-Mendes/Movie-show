import React from 'react';

import './style.css';

const Trending = (props) => {
    return(
        <div className="trending-content">
            <div className="movies-week">
                <h1>Trending movies of Week</h1>
                {props.trending.map((movie, index) => (
                    <h3 key={index}> {movie.title} </h3>
                ))}
            </div>
        </div>
    )
}

export default Trending;