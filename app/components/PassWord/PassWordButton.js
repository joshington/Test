import React from 'react';
import PropTypes from 'prop-types'
import EStyleSheet from 'react-native-extended-stylesheet'
import { StyleSheet, Text, View, Button,TouchableHighlight } from 'react-native';

const PassWordButton = ({onPress, textOtp}) => (
    <TouchableHighlight onPress={onPress} style={styles.button}>
        <Text style={styles.text}>{textOtp}</Text>
    </TouchableHighlight>
)

PassWordButton.propTypes = {
    onPress:PropTypes.func,
    textOtp:PropTypes.string,
}
const styles = EStyleSheet.create({
    button:{
        margin:15,
        backgroundColor:'$primaryBlue',
        paddingHorizontal:15,
        paddingVertical:10,
        borderRadius:13,
    },
    text:{
        fontSize:22,
        color:'#fff'

    }
})
export default PassWordButton;