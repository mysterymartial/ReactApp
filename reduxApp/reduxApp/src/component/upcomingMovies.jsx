import React from 'react';
import { useGetUpcomingMoviesQuery } from '../service/movieApi';
import Card from '../reusable/card';

const UpcomingMovies = () => {
    const data = useGetUpcomingMoviesQuery();
        console.log(data);

  return (
    <div>
      <Card data={data}/>
    </div>
  )
}

export default UpcomingMovies
