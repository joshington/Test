import React from "react";
import PropTypes from "prop-types";
import { View, Text, TouchableHighlight } from "react-native";
import color from "color";


const AddCart = ({onPress}) => {
    return(
        <TouchableHighlight style={{backgroundColor:"#6495ed",borderRadius:25,height:50,width:200,
            marginLeft:5}}
            onPress={onPress}    
        >
            <Text style={{color:"#ffffff",fontSize:20,textAlign:"center",marginTop:10}}>AddToCart</Text>
        </TouchableHighlight>
    )
}

export default AddCart;