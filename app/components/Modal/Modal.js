import React,{useState,useEffect} from "react";
import PropTypes from "prop-types";
import { MaterialIcons } from '@expo/vector-icons';
import { Text, TouchableHighlight, View,TextInput,KeyboardAvoidingView,Platform,
TouchableOpacity} from "react-native";
import Heading from '../Heading/Heading';
import SmallText from '../Heading/SmallText';
import CustomDatePicker from '../DatePicker/CustomDatePicker';
import styles from "./styles";


const chooseDate =() => {
    return(
        <CustomDatePicker />
    )
}

const Modal = ({customIcon,onPress}) => {
    return (
        <KeyboardAvoidingView style={styles.centeredView} behavior="padding">
                <View style={styles.modalView}>
                    {/* <View>{customIcon}</View> */}
                    <Heading text="Where will the service be offered?" />
                    <SmallText text="locate near care providers"/>
                    <TextInput 
                        placeholder="Enter location  address"
                        placeholderTextColor="#000000"
                        underlineColorAndroid="#000000"
                        autoFocus={true}
                        style={{width:180,marginTop:8,height:40}}
                        keyboardType="default"
                    />
                    <TextInput 
                        placeholder="Enter Phone Contact"
                        placeholderTextColor="#000000"
                        underlineColorAndroid="#000000"
                        autoFocus={true}
                        style={{width:180,marginTop:8,height:40}}
                        keyboardType="numeric"
                    />
                    <TextInput 
                        placeholder="Alternative Contact"
                        placeholderTextColor="#000000"
                        underlineColorAndroid="#000000"
                        autoFocus={true}
                        style={{width:180,marginTop:8,height:40}}
                        keyboardType="numeric"
                    />
                    {/* <TextInput 
                        placeholder="Relevant patient Information"
                        placeholderTextColor="#000000"
                        underlineColorAndroid="#000000"
                        autoFocus={true}
                        style={{width:200,marginTop:8,height:40}}
                        keyboardType="default"
                    /> */}
                    {/* <SmallText text="Enter service start date"/> */}
                        {/* <View style={{flexDirection:"row",marginTop:8}}>
                            <MaterialIcons name="date-range" size={30} color="blue" />
                            <TouchableOpacity style={{backgroundColor:"blue",borderRadius:10,
                                fontSize:15,paddingHorizontal:15,paddingVertical:5,marginLeft:5,
                            }}
                                onPress={() => chooseDate()}
                            >
                                <Text style={{fontSize:15,fontWeight:"bold",color:"#fff"}}>start date</Text>
                            </TouchableOpacity>
                        </View> */}
                    <TouchableHighlight
                        style={{
                            ...styles.openButton,
                            backgroundColor: "#20B2AA",
                        }}
                        onPress={
                            onPress
                            //setModalVisible(!modalVisible);
                        }
                    >
                        <Text style={styles.textStyle}>Place Order</Text>
                    </TouchableHighlight>
                </View>

        </KeyboardAvoidingView>
    );
};

Modal.propTypes={
    customIcon:PropTypes.element,
}
export default Modal;