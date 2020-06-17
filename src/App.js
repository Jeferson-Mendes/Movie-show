import React, {useState} from "react";

import Nav from './components/Nav/index';
import Footer from './components/Footer/index';
import MovieList from './components/MovieList/index';

export default function App() {

  const apiKey = process.env.REACT_APP_KEY

  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');


  const handleSubmit = (event) => {
    event.preventDefault();

    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchTerm}`)
      .then(data => data.json())
      .then(data => {
        console.log(data)
        setMovies([...data.results])
      })
  }

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value)
  }

  return (
    <div className="App">
      <Nav submit={handleSubmit} inputChange={handleInputChange} />
      <MovieList movieList={movies} />
      <Footer />
    </div>
  );
}
