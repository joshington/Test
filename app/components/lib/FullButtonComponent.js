import React from 'react';
import {StyleSheet} from 'react-native';


import CustomButton from './CustomButton';

const FullButtonComponent = props => {
	return (
		<CustomButton  {...props} buttonStyle={[styles.button, props.buttonStyle]} />
	)
}

const styles = StyleSheet.create({
	button:{
		width:'70%',
		alignItems:'center',
		paddingTop:12,
		alignSelf:'center',
		borderRadius:15,
	}
});

export default FullButtonComponent;