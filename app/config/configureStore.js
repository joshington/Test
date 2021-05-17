import {compose,createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reducer from '../reducers';

// if(process.env.NODE_ENV === 'development'){
//     middleware.push(logger);
// }
// const store = createStore(
//     reducer,
//     applyMiddleware(thunk)
// )

// export default store;
// const configureStore(initialState){
//     const middleware = [thunk]
//     const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
//     const store = createStore(reducer,initialState,composeEnhancers(applyMiddleware(...middleware)));
//     return store;
// }


const configureStore = () => {
	return createStore(reducer,applyMiddleware(thunk));
}
export default configureStore;