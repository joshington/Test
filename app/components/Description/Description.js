import React from 'react';
import PropTypes from 'prop-types'
import { View,Text} from 'react-native';
import styles from './styles';

const Description = ({text}) => (
    <Text style={{fontSize:18,color:"#000000",marginTop:15,
        
    }}>{text}
    </Text>
)

Description.propTypes={
    text:PropTypes.string,
}

export default Description;