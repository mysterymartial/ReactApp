import React from 'react';
import style from "../styles/card.module.css";
import { MOVIE_IMAGE_URL, useGetNowPlayingMoviesQuery } from '../service/movieApi';

const Card = (props) => {
    const {data, isLoading, isError} = props;
  return (
    <div>
      <div className={style.images}>
    
    {data?.data?.results.map((movie)=>(
      <div  key={movie.id}>
          <img src={`${MOVIE_IMAGE_URL}${movie.poster_path}`}alt={`${movie.title}`} />
          <div className={style.overview}>{movie.overview}</div>
      </div>
      

    ))};
    </div>
  
    </div>
  )
}

export default Card
