import React from 'react';
import {Link, Switch} from 'react-router-dom';

const image_api = "https://image.tmdb.org/t/p/w1280";



export const MovieThumb = ({id,poster_path, title, vote_average}) => { 

return (<>
<div className="rounded-lg bg-gray-100 mb-5 max-w-xs overflow-hidden">
    <img className="mb-4" src={image_api + poster_path} alt={title} />
    <div className="flex flex-wrap justify-between p-2 m-2">
        <h3>{title}</h3>
        <span className={`${vote_average >= 7 ? "bg-yellow-400 rounded px-1" : "text-white bg-gray-800 rounded px-1"}`}>{vote_average}</span>
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