import React from "react";
import PropTypes from 'prop-types';
import {StatusBar,StyleSheet,View,ScrollView,Image,Text,TouchableOpacity} from 'react-native';
import Help_Touchable from '../components/Help_Touchable/Help_Touchable';
import { SimpleLineIcons,AntDesign,MaterialIcons} from '@expo/vector-icons';


const Help = () => {
    return (
        <View style={{margin:20}}>
            <Text style={{fontSize:20}}>WE ARE HAPPY TO HELP</Text>
            <View style={{marginTop:15}}>
                <Help_Touchable 
                    customIcon={
                        <SimpleLineIcons name="call-end" size={40} color="#20B2AA" />
                    }
                    text="Call help line"
                />
                <Help_Touchable 
                    customIcon={
                        <AntDesign name="warning" size={40} color="#20B2AA" />
                    }
                    text="Report a problem"
                />
                <Help_Touchable 
                    customIcon={
                        <MaterialIcons name="feedback" size={40} color="#20B2AA" />
                    }
                    text="Send Feedback"
                />

            </View>
        </View>
    )
}
Help.propTypes={
    navigation:PropTypes.object,
}
Help.navigationOptions = {
    title:"Help",
}
export default Help;