import React from 'react';
import MovieCard from './MovieCard';

function MovieList({data}) {
  return (
    <div className='container-xl my-5'>
      <div className='row'>
       {
        

        data.map((movie , i)=>(
            <div key={i} className='col-4 d-flex align-items-center justify-content-center'>

                <MovieCard movie={movie}/>
            </div>
        ))
       }
       </div>
        </div>
  )
}

export default MovieList