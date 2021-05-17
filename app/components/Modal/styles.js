import { StyleSheet } from "react-native";

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

export default styles;
