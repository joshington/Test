import React, {useState} from "react";
import PropTypes from 'prop-types';
import {StatusBar,StyleSheet,View,ScrollView,Image,Text,TouchableOpacity,TouchableHighlight} from 'react-native';
import  Container  from '../components/Container/Container';
import Header from '../components/Header/Header';
import Heading from '../components/Heading/Heading';
import Bigdiv from '../components/Bigdiv/Bigdiv';
import Card from '../components/ListCard/Card';
import { Octicons,MaterialCommunityIcons,Fontisto,FontAwesome,AntDesign,Entypo,MaterialIcons} from '@expo/vector-icons';
// import { Octicons } from '@expo/vector-icons';
import CardContainer from '../components/ListCard/CardContainer';
// import Wallet from '../components/Wallet/Wallet';
import HealthButton from '../components/Buttons/HealthButton'
import {connect} from 'react-redux';
import {useSelector} from 'react-redux';
import BigDiv from '../components/Bigdiv/Bigdiv'


const  Home = ({route,navigation}) => {
    // const {amount} = route.params;
    const [walletBal, setBalance] = useState(0)
    let cartItems = useSelector(state => {
        return state.cartReducer.cartItems.reduce((count, {quantity}) => count + quantity, 0)
    })
        return(
            <Container>
                <StatusBar translucent={false} barStyle="light-content" />
                <Header  lengthItems={cartItems} onPress={() => navigation.navigate('Communications')} />
                <ScrollView style={{backgroundColor:"#B0E0E6",flex:1,display:"flex"}}>
                         <Heading text="My Maternal Wallet" />
                         <View style={{alignSelf:"center",height:140,width:300,borderRadius:5,borderWidth:1,
                            marginTop:5
                        }}>
                            <View style={{flexDirection:"row",justifyContent:"space-around",marginVertical:7,
                                marginHorizontal:6,backgroundColor:"#fff",height:30}}
                            >
                                <Text style={{fontSize:20}}>Wallet Balance:</Text>
                                <Text style={{color:"red",fontSize:20}}>
                                    UGX:  {walletBal}
                                </Text>
                            </View>
                            <View style={{height:StyleSheet.hairlineWidth,width:300,backgroundColor:"#000"}} />
                            <View style={{flexDirection:"row",justifyContent:"space-around",marginTop:10,
                                alignItems:"center",marginHorizontal:5,backgroundColor:"#20B2AA",height:82,width:290
                            }}>
                                <TouchableOpacity onPress={() =>  navigation.navigate('TopUpAmount')}>
                                    <View>
                                        <AntDesign name="pluscircle" size={35} color="black" style={{alignSelf:"center"}} />
                                        <Text>Deposit</Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                                    <View>
                                        <AntDesign name="minuscircle" size={35} color="black" style={{alignSelf:"center"}} />
                                        <Text>Withdraw</Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <View>
                                        <Fontisto name="more-v" size={35} color="black" style={{alignSelf:"center"}} />
                                        <Text style={{textAlign:"center"}}>More</Text>
                                    </View>
                                </TouchableOpacity>   
                            </View>
                         </View>
                        <Heading text="What do you Need?" />
                        <View style={{display:'flex',flexDirection:'row',flexWrap:"wrap",alignSelf:"center"}}>
                            <Card 
                                text="Book Nurse"
                                customIcon={
                                    <MaterialCommunityIcons name="mother-nurse" size={70} color="black" />
                                } 
                                onPress={() => navigation.navigate('Book Nurse')}
                            />
                            <Card 
                                text="Maternal Shop"
                                // customIcon={
                                //     <Fontisto name="shopping-basket" size={70} color="black" />
                                // } 
                                customIcon = {
                                    <Image resizeMode="contain" style={{width:85,height:85}}
                                        source={require("../../assets/mamakit.png")} 
                                    />
                                }
                                onPress={() => navigation.navigate('Mamakits')}

                            />
                            <Card 
                                text="Family Planning services"
                                customIcon={
                                    <Image resizeMode="contain" 
                                        style={{width:80,height:70}}
                                        source={require("../../assets/emerpills.png")} 
                                    />
                                } 
                                onPress={() => navigation.navigate('Family Planning Services')}
                            />
                            <Card 
                                text="Health Blog"
                                customIcon={
                                    <FontAwesome name="newspaper-o" size={70} color="black" />
                                } 
                                onPress={() => navigation.navigate('Healthtips')}
                            />  
                        </View>
                </ScrollView>
            </Container>
        )
    }
export default Home
