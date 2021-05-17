import React, {useState,useLayoutEffect} from 'react';
import PropTypes from 'prop-types';
import {StyleSheet,View,Text,ScrollView,Image,TouchableOpacity,ActivityIndicator} from 'react-native';
import Communications from 'react-native-communications';



const customer_support = '0706626855';
const  FamilyDetails = ({route, navigation}) => {
	const openContact =() => {
       () =>  Communications.phonecall(customer_support, true)
    }

	const {itemTitle,itemDescr} = route.params;
	return(
		<ScrollView>
			<View style={{marginTop:30}}>
				<Text style={{textAlign:"center",fontSize:20,color:"blue"}}>{itemTitle}</Text>
				<View style={{backgroundColor:"#000",height:StyleSheet.hairlineWidth,width:290,marginLeft:10,
				marginBottom:10}} />
				<View style={{alignItems:"center",marginBottom:20}}>
					<Text style={{marginHorizontal:15,fontSize:15}}>{itemDescr}</Text>
					<TouchableOpacity style={{borderRadius:10,marginTop:15,backgroundColor:"#20B2AA",width:180,
						height:40,justifyContent:"center"
					}} onPress={() => Communications.phonecall(customer_support, true)}>
						<Text style={{textAlign:"center",fontSize:17}}>Place Inquiry</Text>
					</TouchableOpacity>
				</View>
			</View>
		</ScrollView>
	)
}

export default FamilyDetails;