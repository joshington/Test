import React, {useState,useRef} from 'react'
import {MaterialCommunityIcons} from '@expo/vector-icons'
import {View,Text,TextInput,StatusBar,TouchableOpacity} from 'react-native';
import LoginTextInput from '../components/LoginTextInput/LoginTextInput';
// import PhoneInput from "react-native-phone-number-input";


const Register = ({navigation}) => {
    const [value, onChangeText] = useState('Enter username');
    const [valuephone, setValue] = useState("Enter phone number");
    // const phoneInput = useRef<PhoneInput>(null);
    return (
        <>
            <StatusBar translucent={false} barStyle="light-content"/>
            <View style={{paddingTop:30}}>
                <View style={{alignItems:"center"}}>
                    <MaterialCommunityIcons name="mother-nurse" size={120} color="#20B2AA" />
                </View>
                <View style={{flexDirection:"row",justifyContent:"space-around",marginTop:20}}>
                    <Text style={{fontSize:20}}>Username</Text>
                    <TextInput 
                        editable={true}
                        // value={value}
                        // onChangeText={text => onChangeAmount(text)}
                        placeholder="Enter Username"
                        placeholderTextColor="#000"
                        underlineColorAndroid="#000"
                        width={150}
                        height={35}
                        textAlign="center"
                        autoFocus={true}
                    />
                </View>
                <View style={{flexDirection:"row",justifyContent:"space-around",marginTop:20}}>
                    <Text style={{fontSize:20}}>Phone No.</Text>
                    <TextInput 
                        editable={true}
                        // value={value}
                        // onChangeText={text => onChangeAmount(text)}
                        placeholder="E.g +256706626855"
                        placeholderTextColor="#000"
                        underlineColorAndroid="#000"
                        width={150}
                        height={35}
                        textAlign="center"
                        keyboardType="numeric"
                        autoFocus={true}
                    />
                </View>
                <View>
                    <TouchableOpacity style={{alignItems:"center",marginTop:30,marginRight:25,borderRadius:15,
                        backgroundColor:"#20B2AA",width:100,alignSelf:'flex-end',height:30
                    }}
                        onPress={() => navigation.navigate('Verify Otp')}
                    >
                        <View>
                            <Text style={{fontSize:15,color:"red",fontWeight:"bold",textAlign:"center"}}>SEND OTP</Text>
                        </View>
                    </TouchableOpacity>
                    <Text style={{fontSize:15,marginTop:60,textAlign:"center"}}>Press SEND OTP for phone number verification</Text>
                </View>
            </View>
        </>
    )
}

export default Register;
