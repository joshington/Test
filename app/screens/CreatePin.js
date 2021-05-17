import React, {Component} from 'react'
import { Ionicons } from '@expo/vector-icons';
import {Flag} from 'react-native-svg-flagkit'
import {View,Text,TextInput,StatusBar,TouchableOpacity} from 'react-native';
// import PhoneInput from "react-native-phone-number-input";
import Separator from '../components/Wallet/Separator';

class CautionPin extends Component{
    render(){
        return (
            <>
                <StatusBar translucent={false} barStyle="light-content"/>
                <View style={{marginHorizontal:30,marginTop:30}}>
                    <View style={{alignSelf:"center",borderRadius:20,alignItems:"center",borderWidth:1,
                        borderColor:"#20B2AA",height:120,
                    }}>
                        <Text style={{fontSize:22,textAlign:"center"}}>Create Your pregCare Wallet PIN</Text>
                        <Ionicons name="md-close-circle" size={60} color="#20B2AA" />
                    </View>
                    {/* <Separator /> */}
                    <View>
                        <Text style={{fontSize:22,textAlign:"center",marginTop:15}}>
                           To protect your pregCare wallet from an Authorized access,please set your
                           PIN to add extra security
                        </Text>
                    </View>
                    <TouchableOpacity style={{borderRadius:18,backgroundColor:"#20B2AA",
                        width:200,height:40,alignItems:"center",alignSelf:"center",marginTop:40}}
                    >
                        <Text style={{fontSize:22,fontWeight:"bold"}}>Create PIN</Text>
                    </TouchableOpacity>
                </View>
            
            </>
        )
        
    }
}

export default  CautionPin;
 