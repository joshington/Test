import { Alert } from 'react-native'; // to show alerts in app
export const SET_REGISTER_STATE = 'SET_REGISTER_STATE';
export const SET_REGISTER_FAIL = 'SET_REGISTER_FAIL';


const uri = 'http://preghealth.pythonanywhere.com'

const setRegisterState = (registerData) => {
	return {
		type:SET_REGISTER_STATE,
		payload:registerData,
	}
}

export const register = payload  => {
	return (dispatch) => {//dont forget to use dispatch here.
		return fetch(uri+'/user/register/',{
			method:'POST',
			headers:{
				Accept:'application/json',
				"Content-Type":"application/json"
			},
			body:JSON.stringify({
				'pin_code':payload.new_array,
				'phone':payload.phonenumber,
				'name':payload.username,	
			})
		}).then((response) => {
			if(response.ok){
				const resData = response.json()
				if(resData.status === true){
					// dispatch(setRegisterState({...resData}))
					dispatch({type:SET_REGISTER_STATE,payload:resData})
				}else{
					Alert.alert('provide name,phonenumber and pincode')
				}
			}
		}).catch((err) => {
				dispatch({type:SET_REGISTER_FAIL,payload:err.message});
			})
	}
}



