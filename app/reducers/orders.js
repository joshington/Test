import {ORDER_START,ORDER_SUCCESS,ORDER_FAIL} from '../actions/orders';

const initialState = {
	start:false,
	ordered:false,
    error:null
}

function ordersReducer(state=initialState,action){
	switch(action.type){
		case ORDER_START:
			return {
				...state,
				start:true,
				ordered:false,
				error:null,
			}

		case ORDER_SUCCESS:
			return {
				...state,
				start:false,
				ordered:true,
				error:null,
			}
		case ORDER_FAIL:
			return {...state,start:false,ordered:false,error:payload}
		default:
			return state
	}
}

export default ordersReducer;