import React from "react";
import PropTypes from "prop-types";
import { View, Text,TouchableOpacity, TouchableHighlight } from "react-native";

const HealthButton = ({onPress}) => {
    return(
        <TouchableOpacity style={{backgroundColor:"#03254c",borderRadius:22,justifyContent:"center",
            height:40,width:130
        }}
            onPress={onPress}
        >
            <Text style={{fontSize:20,color:"#fff",fontWeight:"bold",textAlign:"center"}}>Order Now</Text>
        </TouchableOpacity>
    )
}
HealthButton.propTypes={
    onPress:PropTypes.func,
}
export default HealthButton