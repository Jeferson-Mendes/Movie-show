import React, {useState, useEffect} from "react";
import { useLocation } from 'react-router-dom';

import Footer from '../../components/Footer/index';
import MovieList from '../../components/MovieList/index';

const Home = () => {
  const apiKey = process.env.REACT_APP_KEY

  const [movies, setMovies] = useState([]);
  const [title, setTitle] = useState('');

  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }
  const query = useQuery();
  let newSearchTerm = query.get('search')
  let genre = [ query.get('genreId'), query.get('genreName') ]
  
  useEffect(()=> {
    if(newSearchTerm){
      try{
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${newSearchTerm}`)
        .then(data => data.json())
        .then(data => {
          console.log(data)
          setMovies([...data.results])
        })
        setTitle(newSearchTerm);
  
      }catch(error) {
        console.log('ERROR: ',error)
      }
    }else if(genre) {
      try {
        const genreId = genre[0]
        const genreName = genre[1]
        setTitle(genreName)
        fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&with_genres=${genreId}`)
        .then(data => data.json())
        .then(data => {
          setMovies([...data.results])
        })
      }catch(error){
        console.log('ERROR: ', error)
      }
    }
  }, [newSearchTerm])

  return (
    <div className="App" >

      <h2 className='titleMovieList' data-tesid='home-field' >
        {`RESULTS TO: "${title}"`}
      </h2>

      <MovieList movieList={movies} />
        <Footer />
    </div>
  );
}
export default Home;