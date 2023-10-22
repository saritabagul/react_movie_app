import React from 'react';
import ReactDOM from 'react-dom/client';
import {createStore, applyMiddleware} from 'redux';
import './index.css';
import App from './components/App';
// import movies from './reducers';
import rootReducer from './reducers';
import thunk from 'redux-thunk';

// const logger = function({dispatch,getState}){
//   return function(next){
//     return function (action){
//       //middleware code
//       console.log('ACTION_TYPE= ',action.type);
//       next(action);
//     }
//   }
// }

//cleaner modified middleware
const logger = ({dispatch,getState}) => (next) => (action) =>{
      //logger code
      if(typeof action !== 'function'){
        console.log('ACTION_TYPE= ',action.type);
      }      
      next(action);
}

// const thunk = ({dispatch,getState}) => (next) => (action) =>{
//   //logger code
//   if(typeof action === 'function'){
//       action(dispatch);
//   }

//   next(action);
// }

const store = createStore(rootReducer,applyMiddleware(logger,thunk));
// console.log('store',store);
// console.log('state',store.getState());


// store.dispatch({
//   type:'ADD_MOVIES',
//   movies:[{name:'Superman'}]
// });

// console.log('after state:',store.getState());

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App store={store}/>
  </React.StrictMode>
);

