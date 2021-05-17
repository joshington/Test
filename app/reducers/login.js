import {SET_LOGIN_STATE,SET_LOGIN_FAIL}  from '../actions/login';

const initialState = {
    isLoggedIn:false,
    error:null,
}


const loginReducer = (state=initialState, action) => {
	switch (action.type){
		case SET_LOGIN_STATE:
			return {
				...state,
				...action.payload,
				isLoggedIn:true,
				error:null,
			}
		case SET_LOGIN_FAIL:
			return {
				...state,
				isLoggedIn:false,
				error:action.payload,

			}
		default:
			return state;
	}
}

export default loginReducer;