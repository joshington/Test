import React, { Component } from "react";
import {StatusBar,StyleSheet,View,ScrollView,Image} from 'react-native';
import ModalPack from '../components/Modal/ModalPack';
import { Entypo } from '@expo/vector-icons';
import FillIcon from '../components/FillIcon/FillIcon';

const Packages = () => {
    return(
        <>
            <StatusBar translucent={false} barStyle="light-content"/>
            <ModalPack />

        </>
    )
}

export default Packages;