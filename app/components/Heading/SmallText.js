import React from 'react';
import PropTypes from 'prop-types'
import { View,Text} from 'react-native';
import styles from './styles';

const SmallText = ({text}) => (
    <Text style={{fontSize:15,color:"#011000",marginTop:8,marginLeft:15,marginRight:15}}>{text}</Text>
)

SmallText.propTypes={
    text:PropTypes.string,
}

export default SmallText;