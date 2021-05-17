import React from "react";
import PropTypes from "prop-types";
import {View, Text, TouchableHighlight,TouchableOpacity} from "react-native";
import styles from "./styles";


const MamaCard = ({onPress, customIcon=null, name,price}) => {
    return(
        <View>
            <TouchableOpacity onPress={onPress} style={{...styles.touchable,backgroundColor:"#ffffff",
                width:130,height:150,borderRadius:10,marginTop:20,marginBottom:60,marginHorizontal:15
            }}>
                <View style={{alignItems:'center'}}>
                    {customIcon}
                    <Text style={{fontSize:15,marginTop:10,textAlign:"center",fontWeight:"bold"}}>{name}</Text>
                    <Text style={{fontSize:22,marginBottom:20,textAlign:"center",fontWeight:"bold",color:"#6495ed"}}>UGX {price}</Text>
                </View>
            </TouchableOpacity>
            {/* <View style={{width:1,height:160,backgroundColor:"#000",marginHorizontal:5}} /> */}
        </View>
    )
}
MamaCard.propTypes={
    name:PropTypes.string,
    customIcon:PropTypes.element,
    price:PropTypes.number,
}

export default MamaCard;