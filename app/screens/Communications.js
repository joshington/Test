import React from 'react';
import {View,Text} from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import PropTypes from 'prop-types';


const Communications = () => {
    return (
        <>
            <View style={{alignItems:"center",marginTop:50}}>
                <FontAwesome5 name="envelope-open-text" size={60} color="#20B2AA" />
            </View>
            <View style={{alignItems:"center",marginHorizontal:20,marginTop:20}}>
                <Text style={{fontSize:20}}>You havent received any communications from us yet</Text>
            </View>
        </>
    )
}

export default Communications;