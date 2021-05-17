import React from "react";
import PropTypes from 'prop-types';
import {StatusBar,StyleSheet,View,ScrollView,Image,Text,TouchableOpacity} from 'react-native';

const Help_Touchable = ({customIcon,text}) => {
    return (
        <TouchableOpacity style={{height:80}}>
            <View style={{flexDirection:"row"}}>
                <View>{customIcon}</View>
                <Text style={{fontSize:20,marginLeft:10}}>{text}</Text>
            </View>
        </TouchableOpacity>
    )
}
Help_Touchable.propTypes = {
    customIcon:PropTypes.element,
    text:PropTypes.string
}
export default Help_Touchable;