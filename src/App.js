import React, {useEffect, useState} from "react";
import { MovieList } from "./components/MovieList";
import { MovieDetails} from "./components/MovieDetails"
import { Link, Route, Switch } from "react-router-dom";
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
    <div className="flex items-center justify-between flex-wrap bg-red-800 md:p-6">
      <header className="w-10/12 mx-auto flex items-center justify-between flex-wrap">
    <div className="my-4 md:my-2 w-full md:w-auto flex justify-center">
    <Link to="/">
    <img src={logo} alt="logo" />
    </Link>
    </div>
  
  <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
    <div className="text-sm lg:flex-grow text-white text-center">
      <h2 className='uppercase text-lg md:my-2'>
        <Link to='/'>
        Trending this week
        </Link>
      </h2>
    </div>
    <div className="flex justify-center text-xs py-2 leading-none hover:border-transparent my-2 lg:mt-0">
    <form
    onSubmit={formSubmit}
    className="max-w-full flex">
    	<input
      type="search"
      value={queryTerm}
      onChange={inputChange}
      className="rounded-l-lg p-1 md:p-4 border-t mr-0 border-b border-l text-gray-800 border-gray-200 bg-white"
      placeholder="Search by titlte"/>
		<button className="px-4 rounded-r-lg bg-yellow-400 text-gray-800 font-bold p-1 md:p-4 uppercase border-yellow-500 border-t border-b border-r">Search</button>
	</form>
    </div>
  </div>
      </header>
      </div>
        <Switch>
          <Route path='/:id'>
            <MovieDetails movies={movies}/>
            </Route>
          <Route path="/"><MovieList movies={movies}/></Route>
        </Switch>
    </>
  );
}

export default App;
