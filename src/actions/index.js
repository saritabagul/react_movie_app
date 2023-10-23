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
export const ADD_MOVIE_TO_LIST = 'ADD_MOVIE_TO_LIST';
export const ADD_SEARCH_RESULT = 'ADD_SEARCH_RESULT';


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

export function addMovieToList(movie){
    return{
        type:'ADD_MOVIE_TO_LIST',
        movie
    }
}

export function handleMovieSearch(movie){
    const url=`https://www.omdbapi.com/?i=tt3896198&apikey=468f1b7c&t=${movie}`;
    // https://www.omdbapi.com/?i=tt3896198&apikey=468f1b7c&t=superman

    return function(dispatch){
        fetch(url)
        .then(response => response.json())
        .then(movie=>{
            console.log('movie',movie);

            //dispatch an action
            dispatch(addMoviSearchResult(movie));
        })
    }
}


export function addMoviSearchResult(movie){
    return{
        type:'ADD_SEARCH_RESULT',
        movie
    }
}