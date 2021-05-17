/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
import React from "react";
import { StyleSheet, Text, View,Button,TouchableOpacity} from 'react-native';
// import { createStackNavigator } from "react-navigation-stack";
// import { createAppContainer } from "react-navigation"; //remember its different
// import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";

import {NavigationContainer,DefaultTheme,DarkTheme, useTheme} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';


import { Entypo,Ionicons,FontAwesome } from '@expo/vector-icons';

import Home from '../screens/Home';
import BookNurse from '../screens/BookNurse';
import  UltraScan from '../screens/UltraScan';
import MamaKitShop from '../screens/MamaKitShop';
import MyAccount from '../screens/MyAccount';
import Orders from '../screens/Orders';
import  ContactDoctor from '../screens/ContactDoctor';
// eslint-disable-next-line no-unused-vars
import ProductDetails from '../screens/ProductDetails';
// import MyAccount from '../screens/MyAccount';
import About from '../screens/About';
import Help from '../screens/Help';
import Communications from '../screens/Communications';
import Register from '../screens/Register';
import Terms_Conditions from '../screens/Terms_conditions';
import TopUpAmount from '../screens/TopUpAmount';
import TopUpFlutter from '../screens/TopUpflutter';
import {useSelector} from 'react-redux';
import CartScreen from '../screens/CartScreen';
import Healthtips from '../screens/Healthtips';
import FamilyDetails from '../screens/FamilyDetails';

// import OtpVerification from   '../screens/OtpVerification';
import TopForAnother from '../screens/TopForAnother';
import Share from '../screens/Share';
import SendToAnother from '../screens/SendToAnother';

import OtpVerification from '../screens/RegisterOtp';
import WithdrawAmount from '../screens/WithdrawAmount'; 
import Login from '../screens/Login'; 
import RegisterWallet from '../screens/RegisterWallet';
import LoginWallet from '../screens/LoginWallet';


const Stack = createStackNavigator()
const Tabs  = createBottomTabNavigator()


const RootHome = () => {
    return (
    <Tabs.Navigator
        screenOptions={({route}) => ({
            tabBarIcon:({color}) => {
                let iconName;
                if(route.name === 'PregHealth'){
                    iconName = "home";
                }else if (route.name === 'My Cart'){
                    iconName = "cart"
                }else if(route.name === 'MyAccount'){
                    iconName = "person";
                }
                return (
                        <Ionicons name={iconName} size={32} color="black" />
                    )
            },
        })}
        tabBarOptions={{
            activeTintColor:"#20B2AA",
            inactiveTintColor: 'black',
        }}
    >
        <Tabs.Screen name="PregHealth" component={HomeScreenStack} />
        <Tabs.Screen  name="MyAccount" component={MyAccountStack} />
        <Tabs.Screen name="My Cart" component={CartScreen} />
    </Tabs.Navigator>

    )
}

const MyAccountStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="MyAccount" component={MyAccount} />
            <Stack.Screen name="About" component={About} />
            <Stack.Screen name="Help" component={Help} />
            <Stack.Screen name="Communications" component={Communications} />
        </Stack.Navigator>
    )
}

const TipStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Healthtips" component={Healthtips} />
        </Stack.Navigator>
    )
}


const MamaKitStack = ({navigation}) => {
    let cartItems = useSelector(state => {
        //use the global state here
        return state.cartReducer.cartItems.reduce((count, {quantity}) => count + quantity, 0)
    })
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name="MamaKitshop" 
                component={MamaKitShop} 
                options={{headerRight:() => (
                    <TouchableOpacity style={{marginRight:15}}
                        onPress={() => {navigation.navigate('CartScreen')}}
                    >
                        <View>
                            <View style={{position:'absolute', height:30,width:35,borderRadius:15,
                                backgroundColor:'rgba(95,300,200,0.8)',alignItems:'center',justifyContent:'center',
                                zIndex:3000,left:7,bottom:10,
                            }}>
                                <Text style={{fontSize:25,color:'black',fontWeight:"bold"}}>
                                    {cartItems}
                                </Text>
                            </View>
                            <FontAwesome name="shopping-basket" size={24} color="#000" />
                        </View>
                    </TouchableOpacity>
                )}}
            />
            <Stack.Screen 
                name="ProductDetails" 
                component={ProductDetails} 
                options={{headerRight:() => (
                    <TouchableOpacity style={{marginRight:40,marginTop:20}}
                        onPress={() => {navigation.navigate('CartScreen')}}
                    >
                        <View>
                            <View style={{position:'absolute', height:30,width:35,borderRadius:15,
                                backgroundColor:'rgba(95,300,200,0.8)',alignItems:'center',justifyContent:'center',
                                zIndex:3000,left:10,bottom:10
                            }}>
                                <Text style={{fontSize:25,color:'black',fontWeight:"bold"}}>
                                    {cartItems}
                                </Text>
                            </View>
                            <FontAwesome name="shopping-basket" size={24} color="#000" />
                        </View>
                    </TouchableOpacity>
                )}}
            />
        </Stack.Navigator>
    )
}
function HomeScreenStack(){
    return (
        <Stack.Navigator>
            <Stack.Screen options={{headerShown:false}} name="Home" component={Home} />
            <Stack.Screen name="MamaKitshop" component={MamaKitStack} />
            <Stack.Screen name="Book Nurse" component={BookNurse} />
            <Stack.Screen name="Family Planning Services" component={UltraScan} />
            <Stack.Screen name="Healthtips" component={Healthtips} />
            <Stack.Screen name="Method Details" component={FamilyDetails} />
            <Stack.Screen name="TopUpAmount" component={TopUpAmount} />
            <Stack.Screen name="TopForAnother" component={TopForAnother} />
            <Stack.Screen name="Select Beneficiary" component={Share} />
            <Stack.Screen name="To:Beneficiary" component={SendToAnother} />
            <Stack.Screen name="Verify Otp" component={OtpVerification} />
            <Stack.Screen name="Withdraw From Wallet" component={WithdrawAmount} />
            <Stack.Screen name="Login" component={LoginWallet} />
            <Stack.Screen name="Register" component={RegisterWallet} />
        </Stack.Navigator>
    )
}




const Navigator = () => {
    return (
        <NavigationContainer >
            <Stack.Navigator headerMode="none">
                <Stack.Screen name="rootHome" component={RootHome} />
                <Stack.Screen  name="Home" component={HomeScreenStack} />
                <Stack.Screen  name="Mamakits" component={MamaKitStack} />
                <Stack.Screen  name="My Cart" component={CartScreen} />
                <Stack.Screen  name="Order Summary" component={Orders} />
                <Stack.Screen  name="My Account" component={MyAccountStack} />
                <Stack.Screen name="Method Details" component={FamilyDetails} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigator;

