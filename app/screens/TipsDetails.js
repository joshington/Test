import React, {useState,useLayoutEffect} from 'react';
import PropTypes from 'prop-types';
import {StyleSheet,View,Text,ScrollView,Image,TouchableOpacity,ActivityIndicator} from 'react-native';



const  TipsDetails = ({route, navigation}) => {

    const {itemTitle,itemDescr} = route.params;
    return(
        <ScrollView>
            <View style={{borderRadius:10}}>
                <Text style={{textAlign:"center"}}>{itemTitle}</Text>
                <View style={{backgroundColor:"#000",height:StyleSheet.hairlineWidth,width:290}} />
                <View>
                    <Text>{itemDescr}</Text>
                    <TouchableOpacity style={{borderRadius:5}}>
                        <Text style={{textAlign:"center"}}>Book Appointment</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    )
}

export default TipsDetails;