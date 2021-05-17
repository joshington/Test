import React, {useState} from "react";
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {StatusBar,StyleSheet,View,Text,ScrollView,TextInput,TouchableOpacity,ActivityIndicator} from 'react-native';
import Heading from '../components/Heading/Heading';
import ModalUltra from '../components/Modal/ModalUltra';
import { Entypo } from '@expo/vector-icons';
import FillIcon from '../components/FillIcon/FillIcon';
import {ultrascanOrder,change_location,change_contact} from '../actions/ultrascan';
import {useDispatch,useSelector} from 'react-redux';
import {ULTRASCAN_SUCCESS} from '../actions/ultrascan';



const  UltraScan = () => {

    const [location, setlocation] = useState('E.g Entebbe');
    const [contact, setcontact] = useState('E.g 0706626855');
    const [isLoading,setLoading] = useState(false);
    const dispatch = useDispatch();

    let ultraOrder = useSelector(state => {
        return state.ultrascan.ultrascanOrder
    })
        return (
            <View style={{alignItems:"center"}}>
                <StatusBar translucent={false} />
                <View style={{alignItems:"center",justifyContent: "center"}}>
                    <View style={styles.modalView}>
                        <View style={{marginBottom:5}}>
                            <Entypo name="location-pin" size={40} color="black" />
                        </View>
                        <Heading text="Where will the service be offered?" />
                        
                        <TextInput 
                            autoFocus={true}
                            style={{width:180,marginTop:10,height:40}}
                            value={location}
                            onChangeText={text => setlocation(text)}
                            underlineColorAndroid="#000000"
                        />
                        <TextInput 
                            underlineColorAndroid="#000000"
                            keyboardType="numeric"
                            autoFocus={true}
                            value={contact}
                            onChangeText={text => setcontact(text)}
                            style={{width:180,marginTop:10,height:40}}
                        />
                        <Text style={{color:"red",fontWeight:"bold"}}>Note:You will be charged 20,000 after service</Text>
                        <TouchableOpacity style={{...styles.openButton,backgroundColor: "#20B2AA",}}
                            onPress={() => {
                                if(!location.length || !contact.length){
                                    alert('Enter location and contact');
                                    return; 
                                }else{
                                    setLoading(true)
                                    dispatch({type:ULTRASCAN_SUCCESS,payload:{location,contact}})
                                    setLoading(false);
                                }
                            }}
                        >
                            <View style={{flexDirection:"row",justifyContent:"space-around"}}>
                                <Text style={{...styles.textStyle, fontSize:20}}>Place Order</Text>
                                {isLoading ? <ActivityIndicator size="large" /> :
                                    null
                                }
                            </View>
                        </TouchableOpacity>
                    </View>
                    {}

                </View>
            </View>
        )
}
const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 5,
        marginBottom: 5,
    },
    modalView: {
        margin: 20,
        backgroundColor: "#B0E0E6",
        borderRadius: 20,
        padding: 30,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.3,
        shadowRadius: 3.84,
        elevation: 7,
    },
    openButton: {
        backgroundColor: "#F194FF",
        borderRadius: 20,
        padding: 12,
        elevation: 3,
        marginTop:20,
        paddingHorizontal: 50,
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 15,
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center",
    },
    circle:{
        height:20,
        width:20,
        borderRadius:10,
        borderWidth:1,
        borderColor:"#ACACAC",
        alignItems:"center", //center the checked circle
        justifyContent:"center",
        marginHorizontal:10
    },
    checkedCircle:{
        width:14,
        height:14,
        borderRadius:7,
        backgroundColor:"#131313" // You can set it default or with yours one…
    }
});


export default UltraScan;