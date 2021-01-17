import React from 'react'

export const MovieDetails = ({movie}) => {
    return (
        <div>
           <h1>Movie Details</h1>
           <p>{movie.id}</p>
        </div>
    )
}
