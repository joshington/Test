import React from "react";
import PropTypes from "prop-types";
import { Text, TouchableHighlight, View,TextInput} from "react-native";
import Heading from '../Heading/Heading';
import SmallText from '../Heading/SmallText';
import styles from "./styles";

const ModalUltra = ({customIcon,onPress}) => {
    return (
        <View style={{alignItems:"center",justifyContent: "center"}}>
            <View style={styles.modalView}>
                <View style={{marginBottom:5}}>{customIcon}</View>
                <Heading text="Where will the service be offered?" />
                
                <TextInput 
                    placeholder="location e.g Kla ZZana"
                    placeholderTextColor="#000000"
                    underlineColorAndroid="#000000"
                    autoFocus={true}
                    style={{width:180,marginTop:10,height:40}}
                />
                <TextInput 
                    placeholder="Contact e.g 0706626855"
                    placeholderTextColor="#000000"
                    placeholderTex
                    placeholderFont
                    underlineColorAndroid="#000000"
                    autoFocus={true}
                    style={{width:180,marginTop:10,height:40}}
                />
                <Text style={{color:"red",fontWeight:"bold"}}>Note:You will be charged 20,000 after service</Text>
                <TouchableHighlight style={{...styles.openButton,backgroundColor: "#20B2AA",}}
                    onPress={onPress
                            //setModalVisible(!modalVisible);
                        }
                >
                    <Text style={{...styles.textStyle, fontSize:20}}>Place Order</Text>
                </TouchableHighlight>
            </View>

        </View>
    );
};

ModalUltra.propTypes={
    customIcon:PropTypes.element,
    onPress:PropTypes.func,
}
export default ModalUltra;