import React from 'react';
import {Text,View,TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';

const About_Cpt = ({customIcon,nameIcon}) => {
    return (
        <TouchableOpacity style={{borderRadius:10,elevation:2,height:120,width:140,margin:8,
            shadowOffset:{width:0,height:2},shadowOpacity:0.5}}>
            <View style={{alignItems:"center"}}>
                <View style={{backgroundColor:"#20B2AA",width:140,alignItems:"center",height:80}}>{customIcon}</View>
                <Text style={{textAlign:"center",fontSize:20}}>{nameIcon}</Text>
            </View>
        </TouchableOpacity>
    )
}


About_Cpt.propTypes = {
    customIcon:PropTypes.element,
    nameIcon:PropTypes.string
}
export default About_Cpt;