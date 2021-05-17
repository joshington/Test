import React, { useState } from "react";
import PropTypes from "prop-types";
import { View, TextInput, StyleSheet, Text } from "react-native";
import Toast from "react-native-simple-toast";
import { Picker } from "@react-native-community/picker";
import PayWithFlutterwave from "flutterwave-react-native";


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
        borderWidth: 1,
        margin: 3,
        padding: 10,
        width: "60%",
    },
    label: {
        width: "30%",
    },
    payWithFlutterwaveContainer: {
        margin: 10,
    },
});

const TopUpFlutter = () => {
    const [currency, setCurrency] = useState("UGX");
    const [amount, setAmount] = useState("10000");
    const [email,setEmail]  = useState("bbosalj@gmail.com");
    const [name,setName]    = useState("Bbosa");//supposed to use the name from the authentication bit
    const [phonenumber, setPhone] = useState("+256773943826");

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
    return (
        <View style={styles.payWithFlutterwaveContainer}>
            <PayWithFlutterwave
                onRedirect={handleRedirect}
                onInitializeError={handleIntializeError}
                onWillInitialize={handleWillInitialize}
                onDidInitialize={handleDidInitialize}
                onAbort={handleOnAbort}
                options={{
                    tx_ref: makeid(10),
                    authorization:"FLWSECK-fb84a1e44e30ca59201ab63a8f5dca4e-X",
                    customer: {
                            email,
                            name,
                            phonenumber,
                        },
                        amount,
                        currency,
                        payment_options:"mobilemoneyuganda",
                    }}
                />
        </View>
    )
}

TopUpFlutter.propTypes = {
    navigation: PropTypes.object,
    // handleOnComplete: PropTypes.func,
    // transactionReference: PropTypes.string,
}

export default TopUpFlutter;