import React,{useState, useRef, useEffect} from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, View,Text,ActivityIndicator} from 'react-native';
// import RNOtpVerify from 'react-native-otp-verify';
import colors from '../components/common/colors';
import CustomScreenContainer from '../components/lib/CustomScreenContainer';
import CustomTextInput from '../components/lib/CustomTextInput';
import FullButtonComponent from '../components/lib/FullButtonComponent';
import {isAndroid, logErrorWithMessage} from '../components/utilities/helperFunctions';


import {GenericStyles} from '../components/styles/GenericStyles';

const OtpVerification = (props) => {
	const {navigation} =props;
	const [otpArray, setOtpArray] = useState(['','','','']);
	const [submittingOtp, setSubmittingOtp] = useState(false);
	const [errorMessage, setErrorMessage] = useState('');

	const firstTextInputRef = useRef(null);
	const secondTextInputRef = useRef(null);
	const thirdTextInputRef = useRef(null);
	const fourthTextInputRef = useRef(null);


	// const refCallback = textInputRef = node => {
	// 	textInputRef.current = node;
	// }
	const onSubmitButtonPress = () => {
		//API call
		//todo
		() => navigation.navigate('Withdraw From Wallet')
	}
		// this event won't be fired when text changes from '' to '' i.e. backspace is pressed
	  // using onOtpKeyPress for this purpose
	const onOtpChange = index => {
	    return value => {
	      if(isNaN(Number(value))){
	        //do nothing when anon digit is pressed
	        return;
	      }
	      const otpArrayCopy = otpArray.concat();
	      otpArrayCopy[index] = value;
	      setOtpArray(otpArrayCopy);

	      //auto focus to next InputText if value is not blank
	      if (value !== '') {
	        if (index === 0) {
	          secondTextInputRef.current.focus();
	        } else if (index === 1) {
	          thirdTextInputRef.current.focus();
	        } else if (index === 2) {
	          fourthTextInputRef.current.focus();
	        }
	      }

	    }
	}
	// only backspace key press event is fired on Android
	// to have consistency, using this event just to detect backspace key press and
	// onOtpChange for other digits press
	const onOtpKeyPress = index=> {
		return ({nativeEvent: {key:value}}) => {
			//auto focus to previous InputText if value is blank and existing value is also blank
			if(value === 'Backspace' && otpArray[index] === ''){
				if(value === 1){
					firstTextInputRef.current.focus();
				}else if(index === 2){
					secondTextInputRef.current.focus();
				}else if(index === 3){
					thirdTextInputRef.current.focus();
				}
				/**
		         * clear the focused text box as well only on Android because on mweb onOtpChange will be also called
		         * doing this thing for us
		         * todo check this behaviour on ios
		         */
		        if(isAndroid && index > 0){
		        	const otpArrayCopy = otpArray.concat();
		        	otpArrayCopy[index - 1] = ''; //clear the previous box which will be in focus
		        	setOtpArray(otpArrayCopy);
		        }
			}
		}
	}
	return(
		<CustomScreenContainer>
			<View>
				<View style={[GenericStyles.row, GenericStyles.mt12]}>
					{
						[
							firstTextInputRef,
							secondTextInputRef,
							thirdTextInputRef,
							fourthTextInputRef,
						].map((textInputRef,index) =>(
							<CustomTextInput 
								containerStyle={[GenericStyles.fill, GenericStyles.mr12]}
								value={otpArray[index]}
								onKeyPress={onOtpKeyPress(index)}
								onChangeText={onOtpChange(index)}
								keyboardType={'numeric'}
								maxLength={1}
								style={[styles.otpText, GenericStyles.centerAlignedText]}
								autoFocus={index === 0 ? true : undefined}
								// refCallback={refCallback(textInputRef)}
								key={index}
							/>
						))
					}
				</View>
				<View style={GenericStyles.fill} />
				{submittingOtp && <ActivityIndicator />}
				<FullButtonComponent 
	              type={'fill'}
	              text={'Submit'}
	              textStyle={styles.submitButtonText}
	              buttonStyle={GenericStyles.mt24}
	              onPress={() => navigation.navigate('Withdraw From Wallet')}
	              disabled={submittingOtp}
	            />
			</View>
		</CustomScreenContainer>
	)
}
const styles = StyleSheet.create({
  container: {
    padding: 16,
    flex: 1,
  },
  submitButtonText: {
    color: colors.WHITE,
  },
  otpResendButton: {
    alignItems: 'center',
    width: '100%',
    marginTop: 16,
  },
  otpResendButtonText: {
    color: colors.ORANGE,
    textTransform: 'none',
    textDecorationLine: 'underline',
  },
  otpText: {
    fontWeight: 'bold',
    color: colors.BLUE,
    fontSize: 18,
    width: '100%',
  },
});

OtpVerification.defaultProps = {
  attempts: 5,
  otpRequestData: {
    username: 'varunon9',
    email_id: false,
    phone_no: true,
  },
};

OtpVerification.propTypes = {
  otpRequestData: PropTypes.object.isRequired,
  attempts: PropTypes.number.isRequired,
};

export default OtpVerification;