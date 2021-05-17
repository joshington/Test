import React from 'react';
import PropTypes from 'prop-types'
import { View,Text} from 'react-native';
import styles from './styles';

const Heading = ({text}) => (
    <Text style={{fontSize:18,color:"#000000",fontWeight:'bold',marginTop:15,
        textAlign:"center"
    }}>{text}</Text>
)

Heading.propTypes={
    text:PropTypes.string,
}

export default Heading;