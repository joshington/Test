import React from 'react';
import PropTypes from 'prop-types'
import { View,Text,TouchableOpacity} from 'react-native';

const RadioButton = ({ onPress, selected, children,description }) => {
    return (
      <View style={styles.radioButtonContainer}>
        <TouchableOpacity onPress={onPress} style={styles.radioButton}>
          {selected ? <View style={styles.radioButtonIcon} /> : null}
        </TouchableOpacity>
        <TouchableOpacity onPress={onPress}>
          <Text style={styles.radioButtonText}>{children}</Text>
        </TouchableOpacity>
        <Text>{description}</Text>
      </View>
    );
};

const styles = {
    radioButtonContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginLeft:10,marginTop:10
    },
    radioButton: {
        height: 20,
        width: 20,
        backgroundColor: "#F8F8F8",
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "#E6E6E6",
        alignItems: "center",
        justifyContent: "center"
    },
    radioButtonIcon: {
        height: 14,
        width: 14,
        borderRadius: 7,
        backgroundColor: "#98CFB6"
    },
    radioButtonText: {
        fontSize: 20,
        marginLeft: 16
    }  
}

export default RadioButton;