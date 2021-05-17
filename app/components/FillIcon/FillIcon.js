import React, { Component } from "react";
import PropTypes from 'prop-types';
import {View,Text} from "react-native";
import Icon from "../List/Icon";


const FillIcon = ({text}) => {
    return(
        <View>
            <Icon checked={false} visible={true} />
            <Text style={{fontSize:20}}>{text}</Text>
           
        </View>
    )
}
FillIcon.propTypes = {
    text:PropTypes.string,
}

export default FillIcon;

