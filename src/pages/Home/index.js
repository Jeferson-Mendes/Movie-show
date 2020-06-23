import React, {useState, useEffect} from "react";

import Nav from '../../components/Nav/index';
import Footer from '../../components/Footer/index';
import MovieList from '../../components/MovieList/index';
import Trending from '../../components/Trending/index';
import Pagination from '../../components/Pagination/index';


const Home = () => {

  const apiKey = process.env.REACT_APP_KEY

  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [title, setTitle] = useState('');
  const [trending, setTrending] = useState([]);
  const [genres, setGenres] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(()=>{
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=${currentPage}`)
    .then(data => data.json())
    .then(data => {
      setTotalPages(4) // A API fornece em torno de 900 páginas, não precisamos de todas.
      setMovies([...data.results])
    })
  },[apiKey, currentPage])

  useEffect(()=>{
    fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=${apiKey}`)
    .then(data => data.json())
    .then(data => {
      setTrending([...data.results])
    })
  },[apiKey])

  useEffect(()=>{
    fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=en-US`)
    .then(data => data.json())
    .then(data => {
      setGenres([...data.genres])
    })
  },[apiKey])

  const handleSelectGenreChange = (event) => {
    const genreId = (event.target.value.split(','));
    setTitle(genreId[1])
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&with_genres=${genreId[0]}`)
    .then(data => data.json())
    .then(data => {
      setMovies([...data.results])
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchTerm}`)
      .then(data => data.json())
      .then(data => {
        console.log(data)
        setMovies([...data.results])
      })
      setTitle(searchTerm);
  }

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value)
  }

  const handleCurrentPage = (event) => {
    setCurrentPage(event.target.value)
    window.scrollTo(0,0)
  }

  return (
    <div className="App" >
      <Nav 
        submit={handleSubmit}
        inputChange={handleInputChange}
        genre={genres}
        genreChange={handleSelectGenreChange}
         />

      <h2 className='titleMovieList' data-tesid='home-field' >
        { title.length === 0 ? 'MOST POPULAR:' : `RESULTS TO: "${title}"` }
      </h2>

      <Trending trending={trending} />
      <MovieList movieList={movies} />

      {title === '' ? <Pagination  currentPage={currentPage} totalPages={totalPages}  handlePage={handleCurrentPage}/> : '' }

      <Footer />
    </div>
  );
}

export default Home;