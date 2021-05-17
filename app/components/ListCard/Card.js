import React from "react";
import PropTypes from "prop-types";
import {View, Text, TouchableHighlight,TouchableOpacity} from "react-native";
import styles from "./styles";


const Card = ({onPress, customIcon=null, text}) => {
    return(
        <TouchableOpacity onPress={onPress} style={{...styles.touchable,backgroundColor:"#ffffff",
            width:130,height:120,borderRadius:10,margin:10
        }}
            underlayColor="#fff"
        >
            <View style={{alignItems:'center',marginTop:5}}>
                {customIcon}
                <Text style={{fontSize:17,marginLeft:5,marginBottom:3,alignItems:"center"}}>{text}</Text>
            </View>
        </TouchableOpacity>
    )
}
Card.propTypes={
    text:PropTypes.string,
    customIcon:PropTypes.element,
}

export default Card