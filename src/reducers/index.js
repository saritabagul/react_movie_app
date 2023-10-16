import {ADD_MOVIES} from '../actions';
const initialMoviesState = {
    list:[],
    favourites:[]
};

export default function movies(state=initialMoviesState, action){

    // console.log("check",state);
    if(action.type === ADD_MOVIES){
        // return action.movies;
        return{
            ...state,
            list:action.movies
        }
    }
    return state;
}