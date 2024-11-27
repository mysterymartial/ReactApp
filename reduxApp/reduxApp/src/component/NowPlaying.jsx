import React from 'react'
import { MOVIE_IMAGE_URL, useGetNowPlayingMoviesQuery } from '../service/movieApi';
import Card from "../reusable/card";

const NowPlaying = () => {
    const data = useGetNowPlayingMoviesQuery();
        console.log(data);
  return (
    <div>
        <Card data={data}/>
    </div>
    
  )
}

export default NowPlaying
