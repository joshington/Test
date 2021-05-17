import React,{useState, useRef, useEffect} from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, View,Text,KeyboardAvoidingView,TextInput,TouchableOpacity} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import {useSelector,useDispatch} from 'react-redux';
import {SET_REGISTER_STATE} from '../actions/register';

function RegisterWallet({navigation}){
	// let textInput = useRef(null)
	const lengthInput = 4;
	const [internalVal, setInternalVal] = useState("")
	const [phonenumber, setPhone] = useState("");
	const [autoFocus, setAutoFocus] = useState(false)
	const [username, setUsername] = useState("");
	const [pinArray, setPinArray] = useState([])
	//now handling the pins
	const [pin1, setPin1] = useState("");
	const [pin2, setPin2] = useState("");
	const [pin3, setPin3] = useState("");
	const [pin4, setPin4] = useState("");

	const dispatch = useDispatch();
	// let startRegister = useSelector(state => {
 //        return state.authReducer.startRegister
 //    }

	const PinInput = ({onChangeText,value}) => {
		return(
			<TextInput 
				maxLength={1}
				autoFocus={false}
				keyboardType="phone-pad"
				width={50}
                height={50}
                style={{alignSelf:"center",borderWidth:2,textAlign:"center",alignContent:"center"}}
                onChangeText={onChangeText}
                value={value}
			/>
		)
	}

	const submitRegister = ({pin1,pin2,pin3,pin4}) => {
		if(pin1 !== "" && pin2 !== "" && pin3 !== "" && pin4 !== ""){
			pinArray.push(pin1,pin2,pin3,pin4)
			console.log(pinArray)
			let new_array = pinArray.join("")
			console.log(new_array)
			if(phonenumber.length >=10 && username !== ""){
				console.log(new_array,phonenumber,username)
			}
			dispatch({
				type:SET_REGISTER_STATE,
				payload:{new_array,phonenumber,username}
			})
		}
	}

	


	useEffect(() => {
		
	},[])
	return(
		<View style={styles.container}>
		
				<Text style={{fontSize:20,color:"green"}}>PIN CODE</Text>
				<View style={{marginTop:20,flexDirection:"row",justifyContent:'space-evenly'}}>
					<PinInput 
						onChangeText={text => setPin1(text)}
						value={pin1}
					/>
					<PinInput 
						onChangeText={text => setPin2(text)}
						value={pin2}

					/>
					<PinInput 
						onChangeText={text => setPin3(text)}
						value={pin3}
					/>
					<PinInput 
						onChangeText={text => setPin4(text)}
						value={pin4}
					/>
				</View>
				<Text style={{fontSize:20,color:"green",marginVertical:30}}>MOBILE MONEY NUMBER</Text>
				<TextInput 
                    editable={true}
                    value={phonenumber}
                  	onChangeText={text => setPhone(text)}
                    placeholder="E.g +256773943826"
                    placeholderTextColor="#000"
                    underlineColorAndroid="#000"
                    width={180}
                    height={35}
                    textAlign="center"
                    keyboardType="phone-pad"
                    autoFocus={false}
                    style={{alignSelf:"center"}}
                 />

                <Text style={{fontSize:20,color:"green",marginVertical:30}}>USERNAME</Text>
				<TextInput 
                    editable={true}
                    value={username}
                  	onChangeText={text => setUsername(text)}
                    placeholder="E.g Bbosa"
                    placeholderTextColor="#000"
                    underlineColorAndroid="#000"
                    width={180}
                    height={35}
                    textAlign="center"
                    autoFocus={false}
                    style={{alignSelf:"center"}}
                 />
                <TouchableOpacity style={{borderRadius:18,backgroundColor:"#20B2AA",
                    width:200,height:40,alignItems:"center",alignSelf:"center",marginTop:30
                }} 
                	onPress={
                		() => {
                			submitRegister({pin1,pin2,pin3,pin4})
                		}
                	}
                >
	                <Text style={{fontSize:22,fontWeight:"bold"}}>Register</Text>
	            </TouchableOpacity>
		</View>
	)
}

const styles = StyleSheet.create({
	container:{
		flex:1,
		alignItems:"center",marginTop:30
	},
	containerAvoidingView:{
		flex:1,
		alignItems:"center",
		padding:10,
		marginTop:50
	},
	containerInput:{
		flexDirection:'row',
		alignItems:"center",
		justifyContent:"center"
	},
	cellView:{
		paddingVertical:11,
		width:40,
		margin:5,
		justifyContent:'center',
		alignItems:'center',
		// borderBottomWidth:1.5,
		borderWidth:3
	},
	cellText:{
		textAlign:'center',
		fontSize:16,
	}
})

export default RegisterWallet