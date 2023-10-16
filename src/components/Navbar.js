import React, { useState } from "react";
import { searchData } from '../actions';

const Navbar = (props) =>{

    const [query, setQuery] = useState('');

  const handleSearch = () => {
    props.dispatch(searchData(query));
  };

  const movies = props.movies;

//   console.log("filter movie", movies);

    return(
        <div className="nav">
            <div className="search-container">
                <input onChange={(e)=> setQuery(e.target.value)} onKeyUp={handleSearch}/>
                <button id="search-btn" onClick={handleSearch}>Search</button>
            </div>
        </div>
    );
};


export default Navbar;