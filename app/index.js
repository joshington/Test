import React from "react";
import EStyleSheet from "react-native-extended-stylesheet";
import { Provider} from 'react-redux';
import Navigator from "./config/routes";
import Home from './screens/Home';
import BookNurse from './screens/BookNurse';
import Packages from './screens/Packages';
import MamaKitShop from './screens/MamaKitShop'
import ProductDetail from './screens/ProductDetails';
import UltraScan from './screens/UltraScan';
import ContactDoctor from './screens/ContactDoctor';
import Register from './screens/Register';
// import TopUpAmount from './screens/TopUpAmount';
// import { DarkTheme } from "react-native-paper";
// import TopForAnother from './screens/TopForAnother';
// import CautionPin from './screens/CautionPin';
// import OtpFill from './screens/OTPFill';
// import  OtpVerification from './screens/OtpVerification';
// import Orders from './screens/Orders';
// import TestApi from './screens/TestApi';
import RegisterWallet from './screens/RegisterWallet';

import configureStore from './config/configureStore';

EStyleSheet.build({
    $primaryGreen: "#20B2AA",
    $primaryBlue:"#6495ed",
});

const store = configureStore()

export default () => (
    <Provider store={store}>
        <Navigator />
    </Provider>
)