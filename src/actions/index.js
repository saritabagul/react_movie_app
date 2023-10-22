// {
//     type:'ADD_MOVIES',
//     movies:[m1,m2,m3]
// }

//action type
export const ADD_MOVIES='ADD_MOVIES';
export const ADD_FAVOURITES='ADD_FAVOURITES';
export const REMOVE_FAVOURITES='REMOVE_FAVOURITES';
export const SET_SHOW_FAVOURITE='SET_SHOW_FAVOURITE';
export const SEARCH_DATA = 'SEARCH_DATA';

//action creators
export function addMovies(movies){
    return{
        type:ADD_MOVIES,
        movies
    }
}

export function addFavourite(movie){
    return{
        type:ADD_FAVOURITES,
        movie
    }
}

export function removeFavourite(movie){
    return{
        type:REMOVE_FAVOURITES,
        movie
    }
}

export function setShowFavourite(val){
    return{
        type:SET_SHOW_FAVOURITE,
        val
    }
}

export function handleMovieSearch(movie){
    const url=`http://www/omdbapi.com/?apikey=3ca5df7&t=${movie}`;

    return function(dispatch){
        fetch(url)
        .then(response => response.json())
        .then(movie=>{
            console.log('movie',movie);

            //dispatch an action
            //dispatch ({type:'ADD_SEARCH_RESULT',movie})
        })
    }
}
