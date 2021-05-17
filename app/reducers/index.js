import {combineReducers} from 'redux';
import cartReducer from './cartItems';
import ordersReducer from './orders';
import registerReducer from './register';
import loginReducer from './login';


export default combineReducers({
	cartReducer,
	ordersReducer,
	registerReducer,
	loginReducer,
});

