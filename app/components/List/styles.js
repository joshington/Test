import { StyleSheet } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';


export default EStyleSheet.create({
    icon: {
        backgroundColor: 'transparent',
        width: 30,
        height: 30,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
    },
    iconVisible: {
        backgroundColor: '$primaryBlue'
    },
    checkIcon: {
        width: 18,
    }
})