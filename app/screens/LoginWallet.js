import React,{useState, useRef, useEffect} from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, View,Text,KeyboardAvoidingView,TextInput,TouchableOpacity} from 'react-native';
import {useSelector,useDispatch} from 'react-redux';
import {login} from '../actions/login';


function LoginWallet({navigation}){
	const lengthInput = 4;
	const [internalVal, setInternalVal] = useState("")
	const [phonenumber, setPhone] = useState("");
	const [pinArray, setPinArray] = useState([]);

	//now handling the pins
	const [pin1, setPin1] = useState("");
	const [pin2, setPin2] = useState("");
	const [pin3, setPin3] = useState("");
	const [pin4, setPin4] = useState("");



	const PinInput = ({onChangeText,value}) => {
		return(
			<TextInput 
				maxLength={1}
				autoFocus={true}
				keyboardType="phone-pad"
				width={50}
                height={50}
                style={{alignSelf:"center",borderWidth:2,textAlign:"center",alignContent:"center"}}
                onChangeText={onChangeText}
                value={value}
			/>
		)
	}

	const submitLogin = ({pin1,pin2,pin3,pin4}) => {
		if(pin1 !== "" && pin2 !== "" && pin3 !== "" && pin4 !== ""){
			pinArray.push(pin1,pin2,pin3,pin4)
			console.log(pinArray)
			let new_array = pinArray.join("")
			console.log(new_array)
		}
	}

	return(
		<View style={styles.container}>
				<Text style={{fontSize:20,color:"black",marginTop:20,fontWeight:"bold"}}>Have An Account ?</Text>
				<Text style={{fontSize:20,color:"green",marginTop:40}}> Enter PIN CODE</Text>
				<View style={{marginTop:40,flexDirection:"row",justifyContent:'space-evenly'}}>
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
				
                <TouchableOpacity style={{borderRadius:18,backgroundColor:"#20B2AA",
                    width:200,height:40,alignItems:"center",alignSelf:"center",marginTop:50
                }} onPress={() => submitLogin({pin1,pin2,pin3,pin4})}>
	                <Text style={{fontSize:22,fontWeight:"bold"}}>Login</Text>
	            </TouchableOpacity>

	            <Text style={{fontSize:15}}>Or</Text>
	            <TouchableOpacity style={{borderRadius:18,backgroundColor:"#20B2AA",
                    width:200,height:40,alignItems:"center",alignSelf:"center",marginTop:10
                }} onPress={() => navigation.navigate("Register")}>
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

export default LoginWallet