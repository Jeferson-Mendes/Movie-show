import React from 'react';

import './style.css'
const Video = (props) => {
    return (
        <>
        <div className="trailers">
            <h2>VIDEOS</h2>
                <ul>
                    {props.trailerVideo.map(video => (
                        <li key={video.id}> 
                            <a href={`https://www.youtube.com/watch?v=${video.key}`}>{video.name}</a>    
                        </li>
                    ))}
                </ul>
        </div>
        </>
    )
}

export default Video;