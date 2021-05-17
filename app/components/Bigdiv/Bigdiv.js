import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import styles from './styles';

const Bigdiv = ({children}) => {
    return (
        <View style={styles.div}>
            {children}
        </View>
    );
};

Bigdiv.propTypes = {
    children: PropTypes.any,
};

export default Bigdiv