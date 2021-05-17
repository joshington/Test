import React, {useState} from 'react'
import PropTypes from "prop-types";
import {MaterialCommunityIcons,AntDesign} from '@expo/vector-icons'
import {View,Text,TextInput,StatusBar,TouchableOpacity,StyleSheet} from 'react-native';
import LoginTextInput from '../components/LoginTextInput/LoginTextInput';
// import PhoneInput from "react-native-phone-number-input";
import Toast from "react-native-simple-toast";
import { Picker } from "@react-native-community/picker";
import PayWithFlutterwave from "flutterwave-react-native";

const TopUpAmount = ({navigation}) => {
   const [currency, setCurrency] = useState("UGX");
    const [amount, setAmount] = useState(2000);
    const [email, setEmail] = useState("preghealth0@gmail.com");
    const [name, setName] = useState("customer");
    const [phonenumber, setPhone] = useState("");

    const makeid = (length) => {
        let result = "";
        const characters = 
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        const charactersLength = characters.length;
        for (let i = 0; i < length; i += 1) {
            result += characters.charAt(
                Math.floor(Math.random() * charactersLength)
            );
        }
        return result;
    };
    const handleRedirect = ({ status, transaction_id, tx_ref }) => {
        // You can store these values in a database
        console.log(
            `Status: ${status}\n ID: ${transaction_id}\n Ref: ${tx_ref}`
        );
    };

    const handleIntializeError = ({ code, message, errorId, errors }) => {
        // You can use these for debugging
        Toast.show("Payment could not be initialized");
        console.log(
            "Code: %s\nMessage: %s\nID: %s\nErrors: %O",
            code,
            message,
            errorId,
            errors
        );
    };

    const handleWillInitialize = () => {
        Toast.show("Payment initializing...");
    };

    const handleDidInitialize = () => {
        Toast.show("Payment initialized...");
    };

    const handleOnAbort = () => {
        Toast.show("Payment cancelled...");
    };


    const handleChangeCurrency = (itemValue) => {
        setCurrency(itemValue);
    };


    const handleChangeAmount = (text) => setAmount(text);

    const handleChangeEmail = (text) => setEmail(text);

    const handleChangeName = (text) => setName(text);

    const handleChangePhone = (text) => setPhone(text);

    const CustomTextInput = ({
        label,
        placeholder,
        placeholderTextColor,
        keyboardType,
        handleChangeText,
        value,
    }) => {
        return (
            <View style={styles.amountContainer}>
                <Text style={styles.label}>{label}:</Text>
                <TextInput
                    style={styles.textInput}
                    placeholder={placeholder}
                    placeholderTextColor={placeholderTextColor}
                    keyboardType={keyboardType}
                    onChangeText={handleChangeText}
                    value={value}
                />
            </View>
        );
    };
    CustomTextInput.propTypes = {
        label: PropTypes.string,
        placeholder: PropTypes.string,
        placeholderTextColor: PropTypes.string,
        keyboardType: PropTypes.string,
        handleChangeText: PropTypes.func,
        value: PropTypes.number,
    };

    const CustomAmountInput = ({label,placeholder,placeholderTextColor,keyboardType,handleChangeText,value}) => {
        return (
            <View style={styles.amountContainer}>
                <Text style={styles.label}>{label}:</Text>
                <TextInput
                    style={{...styles.textInput,alignItems:"center"}}
                    placeholder={placeholder}
                    placeholderTextColor={placeholderTextColor}
                    keyboardType={keyboardType}
                    onChangeText={handleChangeText}
                    underlineColorAndroid="#000"
                    value={value}
                     autoFocus={true}
                />
            </View>
        );
    }
    CustomAmountInput.propTypes = {
        label: PropTypes.string,
        placeholder: PropTypes.string,
        placeholderTextColor: PropTypes.string,
        keyboardType: PropTypes.string,
        handleChangeText: PropTypes.func,
        value: PropTypes.number,
    };
        return (
            <>
                <StatusBar translucent={false} barStyle="light-content"/>
                <View style={{marginHorizontal:30,marginTop:30}}>
                    <Text style={{fontSize:20}}>ENTER AMOUNT</Text>
                
                    <CustomAmountInput 
                        label="UGX"
                        placeholder="ENTER AMOUNT"
                        placeholderTextColor="gray"
                        keyboardType="numeric"
                        handleChangeText={handleChangeAmount}
                        value={amount}

                    />
                    <Text style={{fontSize:15,textAlign:"right"}}>Min 2000 & Max 1,000,000</Text>
                    <Text style={{textAlign:"center",marginVertical:40,fontSize:15,color:"#20B2AA",fontWeight:"bold"}}>
                        MOBILE MONEY NUMBER
                    </Text>
                    <TextInput 
                            editable={true}
                            value={phonenumber}
                            onChangeText={text => setPhone(text)}
                            placeholder="E.g +256773943826"
                            placeholderTextColor="#000"
                            underlineColorAndroid="#000"
                            width={180}
                            height={35}
                            textAlign="center"
                            keyboardType="numeric"
                            autoFocus={true}
                            style={{alignSelf:"center"}}
                    />
                    <View style={{marginTop:50}}>
                        <PayWithFlutterwave
                            onRedirect={handleRedirect}
                            onInitializeError={handleIntializeError}
                            onWillInitialize={handleWillInitialize}
                            onDidInitialize={handleDidInitialize}
                            onAbort={handleOnAbort}
                            options={{
                                tx_ref: makeid(10),
                                authorization:
                                    "FLWPUBK-d50a6bd2bfaf10d0e6773199605d1c8a-X",
                                customer: {
                                    email,
                                    name,
                                    phonenumber,
                                },
                                amount,
                                currency,
                                payment_options:
                                    "mobilemoneyuganda",
                            }}
                        />
                    </View>
                    
                    
                </View>
            
            </>
        )
}

const styles = StyleSheet.create({
    amountContainer: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        margin: 10,
    },
    textInput: {
        height: 40,
        borderColor: "gray",
        // borderWidth: 1,
        margin: 3,
        padding: 10,
        width: "60%",
    },
    label: {
        width: "30%",
        fontSize:25
    },
    payWithFlutterwaveContainer: {
        margin: 10,
    },
});


export default TopUpAmount;
 