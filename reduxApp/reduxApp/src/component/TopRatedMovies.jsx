import React from 'react';
import { useGetTopRatedMoviesQuery } from '../service/movieApi';
import Card from '../reusable/card';

const TopRatedMovies = () => {
    const data = useGetTopRatedMoviesQuery();
        console.log(data);
  return (
    <div>
      <Card data={data}/>
    </div>
  )
}

export default TopRatedMovies
