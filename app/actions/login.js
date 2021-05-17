import { Alert } from 'react-native'; // to show alerts in app
export const SET_LOGIN_STATE = 'SET_LOGIN_STATE';
export const SET_LOGIN_FAIL = 'const SET_LOGIN_FAIL';


const uri = 'http://preghealth.pythonanywhere.com'

const setLoginState = (loginData) => {
	return {
		type:SET_LOGIN_STATE,
		payload:loginData,
	}
}

export const login = payload  => {
	return (dispatch) => {//dont forget to use dispatch here.
		return fetch(uri+'/user/login/',{
			method:'POST',
			headers:{
				Accept:'application/json',
				"Content-Type":"application/json"
			},
			body:JSON.stringify({'pin_code':payload.pin_code}),
		}).then((response) => {
			if(response.ok){
				const resData = response.json()
				if(resData.status === true){
					dispatch({type:SET_LOGIN_STATE,...resData})
				}else{
					Alert.alert('Login Failed, PIN CODE is incorrect')
				}
			}
		}).catch((err) => {
				dispatch({type:SET_LOGIN_FAIL,payload:err.message});
			})
	}
}



