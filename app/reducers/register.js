import { SET_REGISTER_STATE,SET_REGISTER_FAIL} from '../actions/register';

const initialState = {
	isRegistered:false,
	error:null,
}

const registerReducer = (state=initialState, action) => {
	switch(action.type){
		case SET_REGISTER_STATE:
			return {
				...state,
				...action.payload,
				isRegistered:true,
				error:null
			}

		case SET_REGISTER_FAIL:
			return {
				...state,
				isRegistered:false,
				error:action.payload

			}
		default:
			return state;
	}
}

export default registerReducer;