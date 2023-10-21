import { combineReducers } from 'redux';
import {ADD_MOVIES,ADD_FAVOURITES, REMOVE_FAVOURITES,SET_SHOW_FAVOURITE,SEARCH_DATA} from '../actions';
const initialMoviesState = {
    list:[],
    favourites:[],
    filterData:[]
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
            case SEARCH_DATA:
                // Implement your search logic here
                const filteredData = state.list.filter(movie =>
                    movie.Title.toLowerCase().includes(action.query.toLowerCase())
                );
                return {
                  ...state,
                  filterData: filteredData,
                };       
        default:
               return state; 
    }
}


const initialSearchState = {
    result:{}
};

export function search(state=initialSearchState,action){
    console.log("Search reducer");
    return state;
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

