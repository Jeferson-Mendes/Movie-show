import React, {useState, useEffect} from "react";
import { useHistory } from 'react-router-dom'

import Nav from '../../components/Nav/index';
import Wellcome from '../../components/Wellcome';
import Discover from '../../components/Discover';
import Footer from '../../components/Footer/index';

const Home = () => {

  const apiKey = process.env.REACT_APP_KEY

  const [searchTerm, setSearchTerm] = useState('');
  const [genres, setGenres] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const [trendingMovies, setTrendingMovies] = useState([]);

  const history = useHistory();


  // Get genres list
  useEffect(()=>{
    fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=en-US`)
    .then(data => data.json())
    .then(data => {
      setGenres([...data.genres])
    })
  }, [])

  // Get most popular movies
  useEffect(() => {
    try {
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`)
        .then(response => response.json())
        .then(data => {
            console.log(data.results)
            setPopularMovies([...data.results])
        })
    }catch(e){
        console.log(e)
    }
  }, [])

  // Get upcoming movies
  useEffect(()=> {
    try {
      fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}&language=en-US&page=1`)
      .then(response => response.json())
      .then(data => {
        console.log(data.results)
        setUpcomingMovies([...data.results])
      })

    }catch(e) {
      console.log(e)
    }

  }, [])

  // Get movie and TV trendings of Week
  useEffect(()=> {
    try {
      fetch(`https://api.themoviedb.org/3/trending/all/week?api_key=${apiKey}`)
      .then(response => response.json())
      .then(data => {
        console.log(data.results)
        setTrendingMovies([...data.results])
      })
    }catch(e) {
      console.log(e)
    }
  }, [])

  // Show movies with specific genre
  const handleSelectGenreChange = (event) => {
    const genreId = (event.target.value.split(','));
    history.push(`/movies/?genreName=${genreId[1]}&genreId=${genreId[0]}`)
  }

  // Show movies for the search term
  const handleSubmit = (event) => {
    event.preventDefault();
      history.push(`/movies/?search=${searchTerm}`)
  }

  // Set the search field when the new value of the "input" change
  const handleInputChange = (event) => {
    setSearchTerm(event.target.value)
  }

  return (
    <div className="App" >

      <Nav 
        submit={handleSubmit}
        inputChange={handleInputChange}
        genre={genres}
        genreChange={handleSelectGenreChange}
         />
      <Wellcome 
        submit={handleSubmit}
        inputChange={handleInputChange}
       />   

      <Discover movies={popularMovies} title="Most Popular" />
      <Discover movies={upcomingMovies} title="Upcoming Movies" />
      <Discover movies={trendingMovies} title="Trending Movies and TV of Week" />
      <Footer />
    </div>
  );
}

export default Home;