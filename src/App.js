import React from 'react';
import './App.css';
import SearchIcon from './search.svg';
import { useState, useEffect } from 'react';
import movieCard from './mymovieCard';
const API_URL = "http://www.omdbapi.com/?apikey=664d4025";


const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const searchMovies = async (title) => {
      const response = await fetch(`${API_URL}&s=${title}`);
      const data = await response.json();

      setMovies(data.Search);
    };

    
    useEffect(() => {
      searchMovies('spiderman');
    }, []);

  return (
    <div className='app'>
      <h1>MovieLand</h1>

      <div className='search'>
        <input 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}  
          placeholder='Search for movies' 
          />
          <img src={SearchIcon} 
          alt="search" 
          onClick={() => searchMovies(searchTerm)}
          />
      </div>
      
      
      {movies?.length > 0
        ? (
            <div className='container'>
              {movies.map((movie) =>(
                <movieCard movie={movie}/>
              ))}
            </div>
        ) : (
          <div className='empty'>
            <h2>Movie not found</h2>
          </div>
        )}
      
    </div>
  );
}

export default App;