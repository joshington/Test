import React from "react";
import PropTypes from "prop-types";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { Ionicons,MaterialIcons,FontAwesome } from '@expo/vector-icons';
import styles from "./styles";

const Header = ({lengthItems,onPress}) => (
    <>
        <View style={{height:60,backgroundColor:'#20B2AA',paddingTop:5}}>
            <View style={{flexDirection:'row',justifyContent:'space-around'}} >
                <View>
                    <Image 
                    source={require('../../../assets/splash.png')}
                    style={{width:130, height:50,resizeMode:"contain"}}   
                />
                </View>
                
                <View>
                    <View style={{position:'absolute', height:35,width:35,borderRadius:15,
                        backgroundColor:'rgba(95,300,200,0.8)',alignItems:'center',justifyContent:'center',
                        zIndex:3000,left:25,bottom:10
                    }}>
                        <Text style={{fontSize:25,color:'black',fontWeight:"bold"}}>{lengthItems}</Text>
                    </View>
                    <TouchableOpacity >
                        <Text><FontAwesome name="shopping-basket" size={30} color="white" /></Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity onPress={() => onPress}>
                    <MaterialIcons name="notifications" size={30} color="white" />
                </TouchableOpacity>
            </View>
        </View>
    </>
)
Header.propTypes = {
    lengthItems:PropTypes.any,
    onPress:PropTypes.func,
}
export default Header;