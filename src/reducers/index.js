import { combineReducers } from 'redux';
import {ADD_MOVIES,ADD_FAVOURITES, REMOVE_FAVOURITES,SET_SHOW_FAVOURITE,ADD_MOVIE_TO_LIST,ADD_SEARCH_RESULT} from '../actions';
const initialMoviesState = {
    list:[],
    favourites:[],  
    showFavourites:false
};

export function movies(state=initialMoviesState, action){  
    console.log("Movie reducer");
    // if(action.type === ADD_MOVIES){
    //     // return action.movies;
    //     return{
    //         ...state,
    //         list:action.movies
    //     }
    // }
    // return state;
    switch(action.type){
        case ADD_MOVIES:
            return{
                ...state,
                list:action.movies
            }
        case ADD_FAVOURITES:
            return{
                ...state,
                favourites:[action.movie, ...state.favourites]
            }
        case REMOVE_FAVOURITES:
            const filteredArray = state.favourites.filter(
                movie => movie.Title !== action.movie.Title

            );
            return{
                ...state,
                favourites:filteredArray
            } 
        case SET_SHOW_FAVOURITE:
            return{
                ...state,
                showFavourites:action.val
            }   
        case ADD_MOVIE_TO_LIST:
            return{
                ...state,
                list:[action.movie,...state.list]
            }           
        default:
               return state; 
    }
}


const initialSearchState = {
    result:{},
    showSearchResults:false,
};

export function search(state=initialSearchState,action){
    // console.log("Search reducer");
    // return state;

    switch(action.type){
        case ADD_SEARCH_RESULT:
            return{
                ...state,
                result:action.movie,
                showSearchResults:true    
            }
        case ADD_MOVIE_TO_LIST:
            return{
                ...state,
               showSearchResults:false
            }    
              
        default:
            return state;    
    }
} 

// const initialRootReducer = {
//     movies:initialMoviesState,
//     search:initialSearchState
// };


// export default function rootReducer(state=initialRootReducer,action){
//     return {
//         movies:movies(state.movies,action),
//         search:search(state.search,action),
//     }    
// };

//We don't have to create rootReducer bcz redux gives us an inbuilt function combineReducers()

export default combineReducers({
    movies,  //or movies:movies  //we use shorthand property bcz function name is same as variable name
    search  //or search:search
});

