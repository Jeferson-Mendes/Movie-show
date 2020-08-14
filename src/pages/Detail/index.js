import React, {useState, useEffect} from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import Footer from '../../components/Footer/index';
import Video from '../Detail/Components/Video';
import Discover from '../../components/Discover';

import no_image from '../../assets/no_image.svg';

import  './style.css'

const Detail = (props) => {
    const MovieId = props.match.params.id
    const apiKey = process.env.REACT_APP_KEY
    
    const [movie, setMovie] = useState({});
    const [movieVideos, setMovieVideos] = useState([]);
    const [similarMovie, setSimilarMovie] = useState([]);
    const [language, setLanguage] = useState('en-US');

    // Get movie who movie ID is equal to the id in the url
    useEffect(()=>{
        fetch(`https://api.themoviedb.org/3/movie/${MovieId}?api_key=${apiKey}&language=${language}`)
        .then(data => data.json())
        .then(data => {
            console.log(data)
            setMovie({...data})
        })
    },[apiKey, language, MovieId])

    // Get Movie Videos
    useEffect(()=>{
        fetch(`https://api.themoviedb.org/3/movie/${MovieId}/videos?api_key=${apiKey}&language=en-US&page=1`)
        .then(data => data.json())
        .then(data => {
            console.log('movie videos => ', data.results)
            setMovieVideos([...data.results])
        })
    },[apiKey, language, MovieId])


    // Get similar movies
    useEffect(()=>{
        fetch(`https://api.themoviedb.org/3/movie/${MovieId}/similar?api_key=${apiKey}&language=en-US&page=1`)
        .then(data => data.json())
        .then(data => {
            console.log(data.results)
            setSimilarMovie([...data.results])
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
                <img className="movie-detail-figure" src={ movie.poster_path ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}` : no_image } alt='imageDetail' />
                <img className="movie-detail-backdrop" src={ movie.backdrop_path ? `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}` : 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80' } alt='imageDetail' />
                <div className="details-movie">

                    <select className="setLanguage" onChange={handleChangeLanguage} >
                        <option value="">Language</option>    
                        <option value="pt-BR">Português</option>
                        <option value="en-US">Inglês</option>
                    </select>

                    <h3>{movie.title}</h3>
                    <h4>{movie.release_date}</h4>
                    <p>{movie.overview}</p>
                </div>

            </div>
        <Video trailerVideo={movieVideos} />

        {similarMovie.length !== 0 ? <Discover movies={similarMovie} title='Similar Movies' /> : <p></p> }
        
        <Footer/>
        </>
    )
}

export default Detail;