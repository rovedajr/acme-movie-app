import React, {useEffect, useState} from "react";
import { MovieList } from "./components/MovieList";
import logo from './assets/acme.png';

const trending_api = "https://api.themoviedb.org/3/trending/movie/week?api_key=724319318cacc02510ec09d55f468c4a"
const query_api = "https://api.themoviedb.org/3/search/movie?&api_key=724319318cacc02510ec09d55f468c4a&query="

function App() {

  const [movies, setMovies] = useState([]);
  const [queryTerm, setQueryTerm] = useState('');

  useEffect(() => {
    fetch(trending_api)
    .then(res => res.json())
    .then(data => {
      let sortedData = data.results.sort((a,b) => a.vote_average < b.vote_average ? 1 : -1)
      setMovies(sortedData);
    })
  },[]);

  const trendListCall = () => {
    fetch(trending_api)
    .then(res => res.json())
    .then(data => {
      let sortedData = data.results.sort((a,b) => a.vote_average < b.vote_average ? 1 : -1)
      setMovies(sortedData);
    })
  }
 

  const formSubmit = (event) => {
    event.preventDefault();
    setMovies([])
    fetch(query_api + queryTerm)
    .then(res => res.json())
    .then(data => {
      let query = data.results.sort((a,b) => a.vote_average < b.vote_average ? 1 : -1)
      setMovies(query);
    });
    setQueryTerm('');
  };

  const inputChange = (e) => {
    setQueryTerm(e.target.value);
  }

  return (
    <>
    <div className="flex items-center justify-between flex-wrap bg-red-800 p-6">
      <header className="w-10/12 mx-auto flex items-center justify-between flex-wrap">
  <div className="flex items-center flex-shrink-0 text-white mr-6">
    <span className="logo">
    <img src={logo} alt="logo" />
    </span>
  </div>
  
  <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
    <div className="text-sm lg:flex-grow text-white">
      <span onClick={trendListCall}
      className="cursor-pointer">
        Trending this week
      </span>
    </div>
    <div>

    <div className="inline-block text-sm px-4 py-2 leading-none hover:border-transparent mt-4 lg:mt-0">
            <form onSubmit={formSubmit}>
              <input
              className="border border-transparent focus:outline-none"
              type="search"
              placeholder="Search"
              value={queryTerm}
              onChange={inputChange}/>
            </form>
        </div>

    </div>
  </div>
      </header>
      </div>
        <MovieList movies={movies}/>
    </>
  );
}

export default App;
