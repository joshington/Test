// import React, { useState } from "react";
// import PropTypes from "prop-types";
// import { View, TextInput, StyleSheet, Text } from "react-native";
// import Toast from "react-native-simple-toast";
// import { Picker } from "@react-native-community/picker";
// import PayWithFlutterwave from "flutterwave-react-native";

// const styles = StyleSheet.create({
//     amountContainer: {
//         display: "flex",
//         flexDirection: "row",
//         alignItems: "center",
//         margin: 10,
//     },
//     textInput: {
//         height: 40,
//         borderColor: "gray",
//         borderWidth: 1,
//         margin: 3,
//         padding: 10,
//         width: "60%",
//     },
//     label: {
//         width: "30%",
//     },
//     payWithFlutterwaveContainer: {
//         margin: 10,
//     },
// });

// const CustomTextInput = ({
//     label,
//     placeholder,
//     placeholderTextColor,
//     keyboardType,
//     handleChangeText,
//     value,
// }) => {
//     return (
//         <View style={styles.amountContainer}>
//             <Text style={styles.label}>{label}:</Text>
//             <TextInput
//                 style={styles.textInput}
//                 placeholder={placeholder}
//                 placeholderTextColor={placeholderTextColor}
//                 keyboardType={keyboardType}
//                 onChangeText={handleChangeText}
//                 value={value}
//             />
//         </View>
//     );
// };

// CustomTextInput.propTypes = {
//     label: PropTypes.string,
//     placeholder: PropTypes.string,
//     placeholderTextColor: PropTypes.string,
//     keyboardType: PropTypes.string,
//     handleChangeText: PropTypes.func,
//     value: PropTypes.string,
// };

// const CurrencyPicker = ({ currency, onValueChange }) => (
//     <Picker
//         selectedValue={currency}
//         style={{ height: 50, width: 200 }}
//         onValueChange={onValueChange}
//     >
//         <Picker.Item label="Burundi Franc" value="BIF" />
//         <Picker.Item label="Canadian Dollar" value="CAD" />
//         <Picker.Item label="Congolese Franc" value="CDF" />
//         <Picker.Item label="Cape Verdean Escudo" value="CVE" />
//         <Picker.Item label="Euro" value="EUR" />
//         <Picker.Item label="British Pound Sterling" value="GBP" />
//         <Picker.Item label="Ghanaian Cedi" value="GHS" />
//         <Picker.Item label="Gambian Dalasi" value="GMD" />
//         <Picker.Item label="Guinean Franc" value="GNF" />
//         <Picker.Item label="Kenyan Shilling" value="KES" />
//         <Picker.Item label="Liberian Dollar" value="LRD" />
//         <Picker.Item label="Malawian Kwacha" value="MWK" />
//         <Picker.Item label="Mozambican Metical" value="MZN" />
//         <Picker.Item label="Nigerian Naira" value="NGN" />
//         <Picker.Item label="Rwandan Franc" value="RWF" />
//         <Picker.Item label="Sierra Leonean Leone" value="SLL" />
//         <Picker.Item label="São Tomé and Príncipe Dobra" value="STD" />
//         <Picker.Item label="Tanzanian Shilling" value="TZS" />
//         <Picker.Item label="Ugandan Shilling" value="UGX" />
//         <Picker.Item label="United States Dollar" value="USD" />
//         <Picker.Item label="CFA Franc BEAC" value="XAF" />
//         <Picker.Item label="CFA Franc BCEAO" value="XOF" />
//         <Picker.Item label="Zambian Kwacha" value="ZMW" />
//         <Picker.Item label="Zimbabwean Dollar" value="ZWD" />
//     </Picker>
// );

// CurrencyPicker.propTypes = {
//     currency: PropTypes.string,
//     onValueChange: PropTypes.func,
// };

// const DonateScreen = () => {
//     const [currency, setCurrency] = useState("UGX");
//     const [amount, setAmount] = useState("10000");
//     const [email, setEmail] = useState("");
//     const [name, setName] = useState("");
//     const [phonenumber, setPhone] = useState("");

//     const makeid = (length) => {
//         let result = "";
//         const characters =
//             "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
//         const charactersLength = characters.length;
//         for (let i = 0; i < length; i += 1) {
//             result += characters.charAt(
//                 Math.floor(Math.random() * charactersLength)
//             );
//         }
//         return result;
//     };

//     const handleRedirect = ({ status, transaction_id, tx_ref }) => {
//         // You can store these values in a database
//         console.log(
//             `Status: ${status}\n ID: ${transaction_id}\n Ref: ${tx_ref}`
//         );
//     };

//     const handleIntializeError = ({ code, message, errorId, errors }) => {
//         // You can use these for debugging
//         Toast.show("Payment could not be initialized");
//         console.log(
//             "Code: %s\nMessage: %s\nID: %s\nErrors: %O",
//             code,
//             message,
//             errorId,
//             errors
//         );
//     };

//     const handleWillInitialize = () => {
//         Toast.show("Payment initializing...");
//     };

//     const handleDidInitialize = () => {
//         Toast.show("Payment initialized...");
//     };

//     const handleOnAbort = () => {
//         Toast.show("Payment cancelled...");
//     };

//     const handleChangeCurrency = (itemValue) => {
//         setCurrency(itemValue);
//     };

//     const handleChangeAmount = (text) => setAmount(text);

//     const handleChangeEmail = (text) => setEmail(text);

//     const handleChangeName = (text) => setName(text);

//     const handleChangePhone = (text) => setPhone(text);

//     return (
//         <View>
//             {/* AMOUNT */}
//             <CustomTextInput
//                 label="AMOUNT"
//                 placeholder="ENTER AMOUNT"
//                 placeholderTextColor="gray"
//                 keyboardType="numeric"
//                 handleChangeText={handleChangeAmount}
//                 value={amount}
//             />

//             {/* CURRENCY */}
//             <View style={styles.amountContainer}>
//                 <Text style={styles.label}>CURRENCY:</Text>
//                 <CurrencyPicker
//                     currency={currency}
//                     onValueChange={handleChangeCurrency}
//                 />
//             </View>

//             {/* NAME */}
//             <CustomTextInput
//                 label="NAME"
//                 placeholder="JOHN DOE"
//                 placeholderTextColor="gray"
//                 keyboardType="email-address"
//                 handleChangeText={handleChangeName}
//                 value={name}
//             />

//             {/* EMAIL */}
//             <CustomTextInput
//                 label="EMAIL"
//                 placeholder="john@nup.com"
//                 placeholderTextColor="gray"
//                 keyboardType="email-address"
//                 handleChangeText={handleChangeEmail}
//                 value={email}
//             />

//             {/* PHONE NUMBER */}
//             <CustomTextInput
//                 label="PHONE"
//                 placeholder="+256771233788"
//                 placeholderTextColor="gray"
//                 keyboardType="phone-pad"
//                 handleChangeText={handleChangePhone}
//                 value={phonenumber}
//             />

//             <View style={styles.payWithFlutterwaveContainer}>
//                 <PayWithFlutterwave
//                     onRedirect={handleRedirect}
//                     onInitializeError={handleIntializeError}
//                     onWillInitialize={handleWillInitialize}
//                     onDidInitialize={handleDidInitialize}
//                     onAbort={handleOnAbort}
//                     options={{
//                         tx_ref: makeid(10),
//                         authorization:
//                             "FLWSECK-fb84a1e44e30ca59201ab63a8f5dca4e-X",
//                         customer: {
//                             email,
//                             name,
//                             phonenumber,
//                         },
//                         amount,
//                         currency,
//                         payment_options:
//                             "card, account, ussd, qr, mpesa, mobilemoneyghana, mobilemoneyuganda, mobilemoneyrwanda, mobilemoneyzambia. mobilemoneytanzania, barter, bank transfer, wechat",
//                     }}
//                 />
//             </View>
//         </View>
//     // );
// };

// DonateScreen.propTypes = {
//     navigation: PropTypes.object,
//     handleOnComplete: PropTypes.func,
//     transactionReference: PropTypes.string,
// };
// export default DonateScreen;
