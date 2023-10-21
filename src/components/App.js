import {data} from '../data';
import Navbar from './Navbar';
import MovieCard from './MovieCard';
import React from 'react';
import {addMovies, setShowFavourite} from '../actions'; 

class App extends React.Component{
// function App(props) {
  componentDidMount(){
    const {store} = this.props;
    store.subscribe(()=>{
      console.log("UPDATED");
      this.forceUpdate();
    });

    //make api call
    //dispatch action

    // store.dispatch({
    //   type:'ADD_MOVIES',
    //   movies:data
    // });

    store.dispatch(addMovies(data));
    

    //  console.log('STATE',this.props.store.getState()); 

  }
  
  isFavourite = (movie) =>{
    // const {favourites} = this.props.store.getState();
    const {movies} = this.props.store.getState();
    const index = movies.favourites.indexOf(movie);
    if(index !== -1){
      return true; // Movie found in fav list
    }else{
      return false;
    }
  }

 onChangeTab =(val)=>{
  this.props.store.dispatch(setShowFavourite(val));
 }


  render() {
    // const movies = props.store.getState();
    // const movies = this.props.store.getState();
   const {movies} = this.props.store.getState();   //{movies:[],search:[]}
   // const {list,favourites,showFavourites,filterData} = this.props.store.getState(); //{list:[],movies:[]}
    const {list,favourites,showFavourites,filterData} = movies; //{list:[],movies:[]}
   
   console.log(filterData);
    let displayMovies;
    if(filterData.length === 0){
      displayMovies = showFavourites ? favourites : list;
    }else{
      //search bar
      displayMovies = showFavourites ? favourites : filterData; 
    }
    

   

    console.log("filteredData",this.props.store.getState());
    return(
    <div className="App">
      <Navbar  movies={displayMovies} dispatch={this.props.store.dispatch } />
      <div className="main">
        <div className="tabs">
          <div className={`tab ${showFavourites ? '':'active-tabs'}`} onClick={()=>this.onChangeTab(false)}>Movies</div>
          <div className={`tab ${showFavourites ? 'active-tabs':''}`} onClick={()=>this.onChangeTab(true)}>Favourites</div>
        </div>
        <div className="list">
          {displayMovies.map((movie,index)=>(           
            <MovieCard 
              movie={movie} 
              key={`movies-${index}`} 
              dispatch={this.props.store.dispatch }
              isFavourite = {this.isFavourite(movie)}
            />
            ))}
        </div>
        {
          displayMovies.length === 0 ? <div className='no-movies'>No movies to display!</div>:null
        }
      </div>
    </div>
  );
  }
}

export default App;
