import React, { useState,useEffect } from "react";
import {StatusBar,Text,StyleSheet,View,ScrollView,Image,Dimensions,TouchableHighlight,
    TouchableOpacity,
} from 'react-native';
import { Ionicons,Feather,FontAwesome5 } from '@expo/vector-icons';
import Communications from 'react-native-communications';
import Separator from '../components/Wallet/Separator';


const contact_doctor = '0706626855';


const ContactDoctor = () => {
    const [credit,buyCredit] = useState(10000);//initially every one has 10,000 ushs
    const [counter,setCounter] = useState(0);//if counter is more than one then have to buy credit.

    const checkCredit =() => {
        //first check the times,and increment
        () => setCounter(counter + 1)
        if(counter === 1){
            () => Communications.phonecall(contact_doctor, true)
            credit == 0;
        }
    }
    // const processCall = () => {

    // }
    return(
        <View>
            <StatusBar translucent={false} />
            <View style={{flexDirection:"row",justifyContent:"space-around",margin:15,
                alignItems:"center"
            }}>
                <View style={{width:Dimensions.get('window').width/2}}>
                    <Text style={{fontSize:20,fontWeight:"bold"}}>Hello  Josh,</Text>
                    <Text style={{fontSize:16}}>Reach out to our team of professional doctors</Text>
                </View>
                
                <View>
                    <Ionicons name="ios-contact" size={70} color="blue" />
                </View>
            </View>
            <View  style={{width:Dimensions.get('window').width, height:StyleSheet.hairlineWidth,
                    backgroundColor:"#000000",marginTop:8}} 
            />
            {/* <TouchableOpacity>

                    <View style={{height:120,width:Dimensions.get('window').width/2,backgroundColor:"#B0E0E6",
                        alignItems:"center"
                    }}>
                        <Feather name="phone-call" size={30} color="black" style={{marginTop:20}} />
                        <Text style={{fontSize:20}}>Ask The Doctor</Text>
                    </View>
            </TouchableOpacity> */}
            <TouchableOpacity style={{margin:20,borderRadius:15,borderWidth:2,alignItems:"center",
                }} onPress={
                    // () => Communications.phonecall(contact_doctor, true)
                    checkCredit()
                }
            >
                <View style={{flexDirection:"row",justifyContent:"space-between"}}>
                    <Feather name="phone-call" size={40} color="black" />
                    <Text style={{fontSize:25,textAlign:"center"}}>Call the Doctor</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={{margin:20,borderRadius:15,borderWidth:2,alignItems:"center"}}>
                <View style={{flexDirection:"row",justifyContent:"space-around"}}>
                    <FontAwesome5 name="coins" size={40} color="black" />
                    <Text style={{fontSize:25}}>Buy Credits</Text>
                </View>
            </TouchableOpacity>
            
            {/* <View  style={{width:Dimensions.get('window').width, height:StyleSheet.hairlineWidth,
                backgroundColor:"#000000",marginTop:30
            /> */}
            <View style={{alignItems:"flex-end",marginHorizontal:20}}>
                <Text style={{fontSize:20}}>Credits Available</Text>
                <Text style={{fontSize:15,fontWeight:"bold",color:"red"}}>{credit}</Text>
            </View>
        </View>  
        
    )
}
export default ContactDoctor
