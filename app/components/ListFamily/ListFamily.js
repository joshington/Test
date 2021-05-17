import React from "react";
import PropTypes from "prop-types";
import {View, Text, TouchableHighlight,TouchableOpacity} from "react-native";
import Separator from '../Separator/Separator';
import styles from './styles';

const ListFamily = ({onPress,text,title}) => {
    return(
        <View style={{width:290,height:180,borderRadius:6,marginTop:25,backgroundColor:"#20639B",marginHorizontal:15

        }}
        >
            <View style={{alignItems:'center',marginTop:5}}>
                <Text style={{color:"#000",fontSize:17}}>{title}</Text>
                <Separator />
                <Text style={{fontSize:17,marginLeft:5,marginBottom:3,alignItems:"center",color:"white"}}
                    numberOfLines={5}
                    ellipsizeMode="tail"
                >{text}</Text>

            </View>
            <TouchableOpacity style={{marginTop:10,marginLeft:5}} onPress={onPress}>
                <Text>FIND OUT MORE</Text>
            </TouchableOpacity>
        </View>
    )
}
ListFamily.propTypes={
    title:PropTypes.string,
    text:PropTypes.string,
    onPress:PropTypes.func,
}

export default ListFamily