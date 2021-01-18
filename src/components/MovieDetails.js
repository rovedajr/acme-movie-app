import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom'


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
                return <h2>{movie.original_title}</h2>
            } 
        })
        
    )
}
