import React,{useState} from "react";
import PropTypes from "prop-types";
import { Text, TouchableHighlight, View,TextInput} from "react-native";
import Heading from '../Heading/Heading';
import SmallText from '../Heading/SmallText';
import RadioButton from './RadioButton';
import styles from "./styles";

const ModalPack = ({customIcon,onPress}) => {
    const [InHome, setHomeVisit] = useState(false);
    const [recomendPackage, setRecommendPackage] = useState(false);
    const [customPlan, setCustomPlan] = useState(false);
    return (
        <View style={styles.modalView}>
            <Heading text="Choose service package" />
            <View style={{flexDirection:"row",marginTop:20}}>
                <RadioButton  />
                <Text>In home visit</Text>
            </View>
            <View style={{flexDirection:"row",alignItems:"center"}}>
                <RadioButton />
                <Text>Recommended package</Text>
            </View>
            <View style={{flexDirection:"row"}}>
                <RadioButton  />
                <Text>Custom Plan</Text>
            </View>
            <TouchableHighlight
                style={{borderRadius:10,paddingVertical:12,paddingHorizontal:20,marginTop:20,
                    backgroundColor: "#20B2AA",}}
                onPress={
                    onPress
                            //setModalVisible(!modalVisible);
                    }
            >
                <Text style={{...styles.textStyle,fontSize:15}}>Select service start date</Text>
            </TouchableHighlight>
        </View>

    );
};

ModalPack.propTypes={
    customIcon:PropTypes.element,
}
export default ModalPack;