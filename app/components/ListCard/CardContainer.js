import React from "react";
import PropTypes from "prop-types";
import { View } from "react-native";
import styles from "./styles";

const CardContainer = ({ children }) => (
    <View style={styles.containerList}>{children}</View>
);

CardContainer.propTypes = {
    children: PropTypes.any,
};

export default CardContainer;
    