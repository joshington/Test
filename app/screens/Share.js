import React, {Component} from 'react'
import {MaterialCommunityIcons,AntDesign} from '@expo/vector-icons'
import {Flag} from 'react-native-svg-flagkit'
import {View,Text,TextInput,StatusBar,TouchableOpacity} from 'react-native';
import LoginTextInput from '../components/LoginTextInput/LoginTextInput';
// import PhoneInput from "react-native-phone-number-input";


const Share = ({navigation}) => {
        return (
            <>
                <StatusBar translucent={false} barStyle="light-content"/>
                <View style={{marginHorizontal:30,marginTop:30}}>
                    <Text style={{fontSize:20}}>Enter Beneficiary Number</Text>
                    <View style={{flexDirection:"row",marginTop:70}}>
                        <Flag id={'UG'} size={0.2}  />
                        <Text style={{fontSize:20,marginHorizontal:20}}>+256773943826</Text>
                        <AntDesign name="edit" size={24} color="#20B2AA" />
                    </View>
                    <TouchableOpacity style={{borderRadius:18,backgroundColor:"#20B2AA",
                        width:200,height:40,alignItems:"center",alignSelf:"center",marginTop:40,

                    }} onPress={() => {navigation.navigate('To:Beneficiary')}}>
                        <Text style={{fontSize:22,fontWeight:"bold"}}>Next</Text>
                    </TouchableOpacity>
                </View>
            
            </>
        )
        
}

export default Share;
 