import React, { useState,useEffect } from "react";
import {StatusBar,Text,StyleSheet,View,ScrollView,Image,Dimensions,TouchableHighlight,
    TouchableOpacity} from 'react-native';
import Modal from '../components/Modal/Modal';
import { Ionicons,Feather,FontAwesome5 } from '@expo/vector-icons';
import Communications from 'react-native-communications';


const customer_support = '0706626855';

const BookNurse = () => {
    const openContact =() => {
       () =>  Communications.phonecall(customer_support, true)
    }

    return(
        <>
            <StatusBar translucent={false} barStyle="light-content"/>
            <View style={{flexDirection:"row",justifyContent:"space-around",margin:15,
                alignItems:"center"
            }}>
                <View style={{width:Dimensions.get('window').width/2}}>
                    <Text style={{fontSize:20,fontWeight:"bold"}}>Hello</Text>
                    <Text style={{fontSize:16}}>
                        Reach out to our team of professional Nurses and medical paliative care practitioners

                    </Text>
                </View>
                
                <View>
                    <Ionicons name="md-person-circle" size={80} color="black" />
                </View>
            </View>
            <View  style={{width:Dimensions.get('window').width, height:StyleSheet.hairlineWidth,
                    backgroundColor:"#000000",marginTop:8}} 
            />
            <View style={{borderRadius:10,borderWidth:1,margin:15,width:Dimensions.get('window').width*0.91,height:100,alignSelf:"flex-start"}}>
                <Text style={{fontSize:20,fontWeight:"bold",marginHorizontal:10}}>Charges</Text>
                <Text style={{fontSize:15,textAlign:"justify",color:"blue",marginHorizontal:15}}>
                    In home Check-ups by our nurse costs UGX 50,000 per visit.
                </Text>
                <Text  style={{fontSize:15,textAlign:"justify",marginHorizontal:15}}>Within Kampala and Wakiso</Text>
            </View>
            <TouchableOpacity style={{margin:20,borderRadius:15,borderWidth:1,alignItems:"center",
                width:180,backgroundColor:"blue",height:47   
            }} onPress={() => Communications.phonecall(customer_support, true)}
            >
                <View style={{flexDirection:"row",justifyContent:"space-between"}}>
                    <Feather name="phone-call" size={30} color="white" />
                    <Text style={{fontSize:25,textAlign:"center",marginLeft:15,color:"#fff"}}>Order</Text>
                </View>
            </TouchableOpacity>

        </>
    )
}

export default BookNurse;