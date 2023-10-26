import React, { createContext } from 'react';
import { Provider } from 'react-redux';
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

//creating context
// export const StoreContext = createContext();
// console.log(StoreContext);

// class Provider extends React.Component{
//   render(){
//     const {store} = this.props;
//     return(
//       <StoreContext.Provider value={store}>
//         {this.props.children}
//       </StoreContext.Provider>
//     );
//   }
// }


// export function connect(callback) {
//   return function (Component) {
//     class ConnectedComponent extends React.Component {
//       constructor(props) {
//         super(props);
//         this.unsubscribe = this.props.store.subscribe(() => {
//           this.forceUpdate();
//         });
//       }

//       componentWillUnmount() {
//         this.unsubscribe();
//       }
//       render() {
//         const { store } = this.props;
//         const state = store.getState();
//         const dataToBeSentAsProps = callback(state);

//         return <Component dispatch={store.dispatch} {...dataToBeSentAsProps} />;
//       }
//     }

//     class ConnectedComponentWrapper extends React.Component {
//       render() {
//         return (
//           <StoreContext.Consumer>
//             {(store) => {
//               return <ConnectedComponent store={store} />;
//             }}
//           </StoreContext.Consumer>
//         );
//       }
//     }
//     return ConnectedComponentWrapper;
//   };
// }




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App/>
    </Provider>
  </React.StrictMode>
);

