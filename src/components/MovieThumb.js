
import React from 'react'

const image_api = "https://image.tmdb.org/t/p/w1280";
// const language = "&language=en&include_image_language=null,en";

export const MovieThumb = ({poster_path, title, vote_average}) => ( 

<div className="rounded-lg bg-gray-100 mb-5 max-w-xs overflow-hidden">
    <img className="mb-4" src={image_api + poster_path} alt={title} />
    <div className="flex flex-wrap justify-between p-2 m-2">
        <h3>{title}</h3>
        <span className="bg-gray-800 rounded px-1 text-white">{vote_average}</span>
    </div>
    {/* <div className="p-4">
        <p>{overview.substring(0, 120)}...</p>
    </div> */}
</div>
);

