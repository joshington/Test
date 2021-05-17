import { StyleSheet } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";

const styles = EStyleSheet.create({
    // $underlayColor: "$border",
    touchable: {
        height: 120,
        width: 140,
        borderRadius: 20,
        backgroundColor: "#ffffff",
        opacity: 2,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3.84,
        elevation: 9,
    },
    touchableMama:{
        height: 120,
        width: 140,
        borderRadius: 20,
        
        backgroundColor: "#ffffff",
        opacity: 8,
        shadowColor: "black",
        shadowOffset: {
            width: 3,
            height: 2,
            borderWidth:3,
            borderColor:"black",
        },
        shadowOpacity: 1,
        shadowRadius: 20,
        elevation: 15,
    },
    touchIcon:{
        alignItems:"center",

    },
    containerList: {
        display:"flex",
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        flexWrap: "wrap",
        marginTop: 10,
        backgroundColor: "#ffffff",
    },
})


export default styles;
