import {ADD_MOVIES,ADD_FAVOURITES, REMOVE_FAVOURITES,SET_SHOW_FAVOURITE,SEARCH_DATA} from '../actions';
const initialMoviesState = {
    list:[],
    favourites:[],
    filterData:[]
};

export default function movies(state=initialMoviesState, action){  
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