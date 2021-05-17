import axios from 'axios';


export const ORDER_START = 'ORDER_START';
export const ORDER_SUCCESS = 'ORDER_SUCCESS';
export const ORDER_FAIL = 'ORDER_FAIL';


const uri = 'http://preghealth.pythonanywhere.com'

export const placeOrder = (payload) => {
	dispatch({type:'ORDER_START'})
	return (dispatch) => {
		return fetch(uri+'/order/createOrder/',{
			method:'POST',
			headers:{
				Accept:'application/json',
				"Content-Type":"application/json"
			},
			body:JSON.stringify({
				'physical_address':payload.location,
				'phonenumber':payload.myContact,
				'cart':payload.data,
				'total_amount':payload.Order_total,
			})
			.then((response) => {
				if(response.ok){
					const resData = response.json()
					if(resData.status === true){
						dispatch({type:ORDER_SUCCESS})
					}else{
						Alert.alert('Check the inputs')
					}
		
				}
			}).catch((err) => {
				dispatch({type:ORDER_FAIL,payload:err.message});
			})
		})
	}
}