import React from 'react';
import {Link, Switch} from 'react-router-dom';

const image_api = "https://image.tmdb.org/t/p/w1280";



export const MovieThumb = ({id,poster_path, release_date, title, vote_average}) => { 

return (<>
<div className={`${vote_average >= 7 ? "ring-2 ring-yellow-500 rounded-lg bg-gray-100 mb-5 max-w-xs overflow-hidden" : "rounded-lg bg-gray-100 mb-5 max-w-xs overflow-hidden"}`}>
    <img className="mb-4" src={image_api + poster_path} alt={title} />
    <div className="flex flex-wrap justify-between px-3">
        <h3>{title}</h3>
        <span className="text-sm text-white bg-gray-800 rounded-full py-1 px-2">{vote_average}</span>
    </div>
    <div className="p-2">
        <span className="text-sm px-1"
        ><strong>Release date: </strong>{release_date}</span>
    </div>
    <div className="p-2">
    <Switch>
    <Link to={`${id}`}>
    <button className="uppercase px-4 bg-red-800 hover:bg-gray-800 py-2 rounded border border-transparent text-white max-w-max shadow-sm hover:shadow-lg">read more</button>
    </Link>
    </Switch>
    </div>
</div>
</>)
};