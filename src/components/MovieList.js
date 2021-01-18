import React from 'react';
import {MovieThumb} from './MovieThumb'

export const MovieList = ({movies}) => {
  


    return (
        <div className="bg-gray-900 flex">
        <div className="w-10/12 mx-auto flex flex-wrap justify-between py-10">
            { movies.length > 0 && movies.map((movie, idx) => (

              <MovieThumb key={idx} {...movie}/>

          ))}
          </div>
      </div>
    )
}


