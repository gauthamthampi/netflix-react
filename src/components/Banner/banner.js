import React, { useEffect, useState } from 'react'
import "./banner.css"
import axios from '../../axios'
import { baseURL,api_key,imageURL } from '../../constants/constant'
function Banner() {
  const [movie,setMovie] = useState("")
  
  useEffect(() => {
    const getRandomMovieIndex = () => {
      return Math.floor(Math.random() * 12); // Generate a random number between 0 and 11
    };

    axios
      .get(`https://api.themoviedb.org/3/trending/all/week?api_key=${api_key}&language=en-US`)
      .then((response) => {
        const randomIndex = getRandomMovieIndex();
        setMovie(response.data.results[randomIndex]);
      })
      .catch((error) => {
        console.error('Error fetching movie:', error);
      });
  }, []);
  
  return (
    <div style={{backgroundImage:`url(${imageURL}/${movie.backdrop_path})`}} className='banner'>
      <div className='content'>
        <h1 className='title'>{movie.title ? movie.title:movie.name}</h1>
        <div className='banner_buttons'>
            <button className='button'>Play</button>
            <button className='button'>My List</button>
        </div>
        <h1 className='description'>{movie.overview}</h1>
      </div>
    <div className="fade_bottom">
      
    </div>
    </div>
  )
}

export default Banner
