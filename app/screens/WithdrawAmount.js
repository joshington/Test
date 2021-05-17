import React, {Component} from 'react'
import {MaterialCommunityIcons,AntDesign} from '@expo/vector-icons'
import {Flag} from 'react-native-svg-flagkit'
import {View,Text,TextInput,StatusBar,TouchableOpacity} from 'react-native';
import LoginTextInput from '../components/LoginTextInput/LoginTextInput';
// import PhoneInput from "react-native-phone-number-input";


const WithdrawAmount = () => {
        return (
            <>
            <StatusBar translucent={false} barStyle="light-content"/>
            <View style={{marginHorizontal:30,marginTop:10}}>
                <Text style={{textAlign:"center",marginTop:40,marginBottom:15,fontSize:15}}>MOBILE MONEY NUMBER</Text>
                <View style={{alignItems:"center"}}>
                    <Text style={{fontSize:20,marginHorizontal:20,textAlign:"center"}}>+256773943826</Text>
                </View>
                <Text style={{fontSize:14,marginTop:10}}>AMOUNT TO WITHDRAW FROM WALLET</Text>
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
                <Text style={{fontSize:15,textAlign:"right",color:"red",fontWeight:"bold"}}>Balance: UGX 100,000</Text>
                <Text style={{fontSize:15,textAlign:"right"}}>Min 2000 & Max 1,000,000</Text>
                
                <TouchableOpacity style={{borderRadius:18,backgroundColor:"#20B2AA",
                    width:200,height:40,alignItems:"center",alignSelf:"center",marginTop:40,
                }}>
                    <Text style={{fontSize:22,fontWeight:"bold"}}>Confirm Withdraw</Text>
                </TouchableOpacity>
            </View>
            
            </>
        )
}

export default WithdrawAmount;
 