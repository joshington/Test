import React, {Component} from 'react'
import {MaterialCommunityIcons,AntDesign,Ionicons} from '@expo/vector-icons'
import {Flag} from 'react-native-svg-flagkit'
import {View,Text,TextInput,StatusBar,TouchableOpacity} from 'react-native';
import LoginTextInput from '../components/LoginTextInput/LoginTextInput';
// import PhoneInput from "react-native-phone-number-input";


const SendToAnother =({navigation}) => {
        return (
            <>
                <StatusBar translucent={false} barStyle="light-content"/>
                <View style={{marginHorizontal:30,marginTop:30}}>
                    <View style={{alignSelf:"center"}}>
                        <Ionicons name="ios-person" size={60} color="black" />
                    </View>
                    <View style={{flexDirection:"row",marginTop:40,alignItems:"flex-end"}}>
                        <Text style={{textAlign:"right",fontSize:20,marginRight:50}}>UGX:</Text>
                        <TextInput 
                            editable={true}
                            // value={value}
                            // onChangeText={text => onChangeAmount(text)}
                            placeholder="E.g 10,000"
                            placeholderTextColor="#000"
                            underlineColorAndroid="#000"
                            width={150}
                            height={35}
                            textAlign="center"
                            keyboardType="numeric"
                            autoFocus={true}
                        />
                    </View>
                    <Text style={{fontSize:15,textAlign:"right",color:"red"}}>My Balance: UGX 50000</Text>
                    <Text style={{fontSize:15,textAlign:"right"}}>Min 2000 & Max 1,000,000</Text>
                    <TouchableOpacity style={{borderRadius:18,backgroundColor:"#20B2AA",
                        width:200,height:40,alignItems:"center",alignSelf:"center",marginTop:40,
                    }}>
                        <Text style={{fontSize:22,fontWeight:"bold"}}>Next</Text>
                    </TouchableOpacity>
                </View>
            
            </>
        )
        
}
export default SendToAnother;
 