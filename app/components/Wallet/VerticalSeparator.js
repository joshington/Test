import React from "react";
import { View,StyleSheet,Dimensions } from "react-native";

import styles from "./styles";

const VerticalSeparator = () => <View style={{backgroundColor: "#000000",
    width: StyleSheet.hairlineWidth,height:Dimensions.get('window').height/2}} />;

export default VerticalSeparator;