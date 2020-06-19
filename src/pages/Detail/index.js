import React, {useState, useEffect} from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import Footer from '../../components/Footer/index';

import  './style.css'

const Detail = (props) => {
    const MovieId = props.match.params.id
    const apiKey = process.env.REACT_APP_KEY
    
    const [movie, setMovie] = useState({});
    const [lenguage, setLanguage] = useState('en-US');

    useEffect(()=>{
        fetch(`https://api.themoviedb.org/3/movie/${MovieId}?api_key=${apiKey}&language=${lenguage}`)
        .then(data => data.json())
        .then(data => {
            console.log(data)
            setMovie({...data})
        })
    },[])

    return(
        <>
        <div className="nav-detail">
            <div className="title">Movie Show | Movie Detail</div>
        </div>
        <Link to='/' style={{marginLeft:20}} > <FiArrowLeft size={30} color="#FF5733" /> </Link>
            <div className="movie-detail-card" >
                <img className="movie-detail-figure" src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}/>
                <div className="details-movie">
                    <h3>{movie.title}</h3>
                    <h4>{movie.release_date}</h4>
                    <p>{movie.overview}</p>
                </div>
            </div>

        <Footer/>
        </>
    )
}

export default Detail;