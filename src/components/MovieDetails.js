import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom'

const image_api = "https://image.tmdb.org/t/p/w1280";


export const MovieDetails = ({movies}) => {
    const [films, setFilms] = useState([]);
    
    useEffect(() => {
        setFilms(movies)
    },[movies]);
    const { id } = useParams();
    let result = films.filter(movie => movie.id == id);
    
    return (
       
        result.map( movie => {
            if(movie.id == id){
                return (
                    <div className="bg-gray-900 text-white py-8">
                <div className="w-10/12 mx-auto grid grid-cols-8 gap-2">
                    <div className="grid col-span-2 hidden md:block">
                        <img
                        src={image_api + movie.poster_path} alt={movie.title} />
                        </div>
                    <div className="col-span-full md:col-span-6 bg-cover"
                    style={{
                        backgroundImage:`url(${image_api + movie.backdrop_path})`,
                        minHeight: "30vh"
                    }}>
                        </div>
                <div className="col-span-full my-8">
                    <h2 className="text-2xl">{movie.title}</h2>
                    <p className="text-lg">{movie.overview}</p>
                </div>
                </div>
                </div>
                )
            } 
        })
        
    )
}
