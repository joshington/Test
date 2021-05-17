import React from "react";
import PropTypes from "prop-types";
import {StyleSheet,Text,Image,TouchableOpacity,View,TextInput} from "react-native";
import styles from './styles';


const RadioButton = props => {
    return(
        <TouchableOpacity style={styles.circle} onPress={props.onPress}>
            {props.checked ? (<View style={styles.checkedCircle} />) : (<View />)}
        </TouchableOpacity>
    )
}

export default RadioButton;