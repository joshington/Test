import React from "react";
import PropTypes from "prop-types";
import { View, Text, TouchableHighlight} from "react-native";
import color from "color";



const Increment = ({quantity,increment,decrement}) => {
    return (
        <View>
            <View style={{flexDirection:"row",marginLeft:10,borderWidth:1,borderStyle:"solid",
                borderColor:"#6495ed"
            }}>
                <TouchableHighlight style={{backgroundColor:"#6495ed",height:35,width:25}}
                    onPress={decrement}
                >
                    <Text style={{color:"#ffffff",fontSize:20,textAlign:"center",fontWeight:"bold"}}>-</Text>
                </TouchableHighlight>
                <Text style={{color:"#000000",fontSize:25,textAlign:"center",marginHorizontal:5}}>{quantity}</Text>
                <TouchableHighlight style={{backgroundColor:"#6495ed",height:35,width:25}}
                    onPress={increment}
                >
                    <Text style={{color:"#ffffff",fontSize:20,textAlign:"center",fontWeight:"bold"}}>+</Text>
                </TouchableHighlight>
            </View>
        </View>
    );
};

Increment.propTypes = {
    quantity:PropTypes.number,
    increment:PropTypes.func,
    decrement:PropTypes.func,
    buttonText: PropTypes.string,

};
export default Increment;
