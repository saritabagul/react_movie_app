import {data} from '../data';
import Navbar from './Navbar';
import MovieCard from './MovieCard';
import React from 'react';
import {addMovies} from '../actions'; 

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

     console.log('STATE',this.props.store.getState()); 

  }
  
  isFavourite = (movie) =>{
    const {favourites} = this.props.store.getState();

    const index = favourites.indexOf(movie);
    if(index !== -1){
      return true; // Movie found in fav list
    }else{
      return false;
    }
  }
  render() {
    // const movies = props.store.getState();
    // const movies = this.props.store.getState();
   
    const {list} = this.props.store.getState(); //{list:[],movies:[]}
    return(
    <div className="App">
      <Navbar />
      <div className="main">
        <div className="tabs">
          <div className="tab">Movies</div>
          <div className="tab">Favourites</div>
        </div>
        <div className="list">
          {list.map((movie,index)=>(           
            <MovieCard 
              movie={movie} 
              key={`movies-${index}`} 
              dispatch={this.props.store.dispatch }
              isFavourite = {this.isFavourite(movie)}
            />
            ))}
        </div>
      </div>
    </div>
  );
  }
}

export default App;
