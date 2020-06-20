import React, {useState, useEffect} from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import Footer from '../../components/Footer/index';

import no_image from '../../assets/no_image.svg';

import  './style.css'

const Detail = (props) => {
    const MovieId = props.match.params.id
    const apiKey = process.env.REACT_APP_KEY
    
    const [movie, setMovie] = useState({});
    const [language, setLanguage] = useState('en-US');

    useEffect(()=>{
        fetch(`https://api.themoviedb.org/3/movie/${MovieId}?api_key=${apiKey}&language=${language}`)
        .then(data => data.json())
        .then(data => {
            console.log(data)
            setMovie({...data})
        })
    },[apiKey, language, MovieId])

    const handleChangeLanguage = (event) => {
        setLanguage(event.target.value)
    }

    return(
        <>
        <div className="nav-detail">
            <div className="title">Movie Show | Movie Detail</div>
        </div>
        <Link to='/' style={{marginLeft:20}} > <FiArrowLeft size={30} color="#FF5733" /> </Link>
            <div className="movie-detail-card" >
                <img className="movie-detail-figure" src={ movie.backdrop_path ? `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}` : no_image } alt='imageDetail' />
                <div className="details-movie">

                    <select className="setLanguage" onChange={handleChangeLanguage} >
                        <option value="">Idioma</option>    
                        <option value="pt-BR">Português</option>
                        <option value="en-US">Inglês</option>
                    </select>

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