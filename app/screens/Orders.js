import React,{useState,useEffect} from "react";
import {StatusBar,StyleSheet,View,ScrollView,Image,Text,Dimensions,TouchableOpacity,TextInput,ActivityIndicator,Alert} from 'react-native';
import RadioButton from '../components/RadioButton/RadioButton';
import {useDispatch,useSelector} from 'react-redux';

import {placeOrder} from  '../actions/orders';

import { START_ORDER,ORDER_SUCCESS,ORDER_FAIL} from '../actions/orders';


const Orders = ({route, navigation}) => {
    const {cartAmount,data} = route.params;
    const delivery_fee = 7000;
    const Order_total = cartAmount+delivery_fee;  //now this is all i need to push to the order.

    const [username, setUserName] = useState("Enter username here");
    const [myContact, setContact] = useState("Enter Contact here");
    const [location, setLocation] = useState("Enter delivery address here");
    const [deliverMthd, setMethod] = useState([
        {id:1,value:true,name:"Delivery(Delivery fee UGX 7000 as minimum)", selected:true},
        {id:2,value:false,name:"Shop Pickup(Nyanama Zzana)", selected:false},
    ])

    
    const onRadioBtnClick = (item) => {
        let updatedState = deliverMthd.map((isLikedItem) => {
            isLikedItem.id === item.id  ? {...isLikedItem,selected:true}:{...isLikedItem,selected:false}
        });
        setMethod(updatedState);
    }

    //now time to place our order
    const dispatch = useDispatch();

    //now its time to expose my global state
    const start = useSelector(state => {
        return state.ordersReducer.start
    })

    const ordered = useSelector(state => {
        return state.ordersReducer.ordered
    })

 

    const error = useSelector(state => {
        return state.ordersReducer.error
    })
    //after placing order, i want o clear the cart immediately
    const cart = useSelector(state => {
        return state.cartReducer.cartItems
    })

    const changedStyle = [styles.orderButton];
    if(ordered === true){
        changedStyle.push(styles.placeOrder);
    }
    return(
        <>
            <ScrollView>
                <StatusBar barStyle="dark-content" hidden={false} backgroundColor="#20B2AA" translucent={true} />
                
                <View style={{flexDirection:"row",justifyContent:'space-around',paddingTop:25,backgroundColor:"gray",
                    height:80,alignItems:"center"
                }}>
                    <Text style={{fontSize:20,fontWeight:"bold"}}>Order Summary</Text>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Text style={{fontSize:30,fontWeight:"bold"}}>X</Text>
                    </TouchableOpacity>
                    
                    
                </View> 
                <View style={{marginTop:30}}>
                    <View style={{flexDirection:"row",justifyContent:'space-around'}}>
                        <Text style={{fontSize:20,fontWeight:"bold"}}>Subtotal</Text>
                        <Text style={{fontSize:20,color:"green"}}>UGX: {cartAmount}</Text>
                    </View>
                    <View style={{flexDirection:"row",justifyContent:'space-around'}}>
                        <Text style={{fontSize:20,fontWeight:"bold"}}>Delivery fee</Text>
                        <Text style={{fontSize:20,color:"green"}}>UGX {delivery_fee}</Text>
                    </View>
                    <View style={{height:StyleSheet.hairlineWidth,width:400,backgroundColor:"#000",marginTop:10}} />
                </View>
                <View style={{flexDirection:"row",justifyContent:'space-around',marginTop:10}}>
                    <Text style={{fontSize:20,fontWeight:"bold"}}>Total</Text>
                    <Text style={{fontSize:20,color:"green"}}>UGX {cartAmount+delivery_fee}</Text>
                </View>
            {/*
                
                <View style={{
                    borderRadius:10,shadowColor:'rgba(0,0,0, .4',shadowOpacity:1,shadowRadius:1,
                    elevation:2,height:120,width:Dimensions.get('window').width*0.9,marginLeft:20,marginBottom:15,
                    marginTop:10
                    }}>
                        <View style={{flexDirection:"row",marginHorizontal:20,justifyContent:"space-between",
                            alignItems:"center",marginTop:8
                        }}>
                             <Ionicons name="ios-contact" size={70} color="#20B2AA" /> 
                            <Text style={{fontSize:20}}>Username</Text>
                        </View>
                        <View style={{height:StyleSheet.hairlineWidth,width:285,backgroundColor:"#000",marginTop:10}} />
                    <TextInput style={{height:40, fontSize:20,color:"#20B2AA",marginLeft:15}}
                        editable
                        clearTextOnFocus={true}
                        numberOfLines={1}
                        value={username}
                        onChangeText={text =>setUserName(text)}
                        autoFocus={true}
                        blurOnSubmit={true}
                        clearTextOnFocus={true}
                    />
                </View>
            */}
                
                <View style={{
                    borderRadius:10,shadowColor:'rgba(0,0,0, .4',shadowOpacity:1,shadowRadius:1,
                    elevation:2,height:120,width:Dimensions.get('window').width*0.9,marginLeft:20
                    }}>
                        <View style={{flexDirection:"row",marginHorizontal:20,justifyContent:"space-between",
                            alignItems:"center",marginTop:8
                        }}>
                            {/* <Ionicons name="ios-contact" size={70} color="#20B2AA" /> */}
                            <Text style={{fontSize:20}}>My Contact</Text>
                        </View>
                        <View style={{height:StyleSheet.hairlineWidth,width:285,backgroundColor:"#000",marginTop:10}} />
                    <TextInput style={{height:40, fontSize:20,color:"#20B2AA",marginLeft:15}}
                        editable
                        clearTextOnFocus={true}
                        numberOfLines={1}
                        value={myContact}
                        onChangeText={text =>setContact(text)}
                        keyboardType="numeric"
                        autoFocus={true}
                        blurOnSubmit={true}
                        clearTextOnFocus={true}
                    />
                </View>
                <View style={{
                    borderRadius:10,shadowColor:'rgba(0,0,0, .4',shadowOpacity:1,shadowRadius:1,
                    elevation:2,height:120,width:Dimensions.get('window').width*0.9,marginLeft:20,
                    marginTop:20
                }}>
                        <View style={{flexDirection:"row",marginHorizontal:20,justifyContent:"space-between",
                            alignItems:"center",marginTop:8
                        }}>
                            {/* <Ionicons name="ios-contact" size={70} color="#20B2AA" /> */}
                            <Text style={{fontSize:20}}>Delivery Address</Text>
                        </View>
                        <View style={{height:StyleSheet.hairlineWidth,width:285,backgroundColor:"#000",marginTop:10}} />
                    <TextInput style={{height:40, fontSize:20,color:"#20B2AA",marginLeft:15}}
                        editable
                        numberOfLines={1}
                        value={location}
                        onChangeText={text =>setLocation(text)}
                        autoFocus={true}
                        blurOnSubmit={true}
                        clearTextOnFocus={true}
                    />
                </View>
                {/* <View style={{
                    borderRadius:10,shadowColor:'rgba(0,0,0, .4',shadowOpacity:1,shadowRadius:1,
                    elevation:2,height:170,width:Dimensions.get('window').width*0.9,marginLeft:20,
                    marginVertical:20
                }}>
                        <View style={{flexDirection:"row",marginHorizontal:20,justifyContent:"space-between",
                            alignItems:"center",marginTop:8
                        }}>
                            {/* <Ionicons name="ios-contact" size={70} color="#20B2AA" /> */}
                            {/* <Text style={{fontSize:20}}>Delivery method</Text>
                        </View>
                        <View style={{height:StyleSheet.hairlineWidth,width:285,backgroundColor:"#000",marginTop:10}} />
                        {deliverMthd.map((item) => (
                            <RadioButton 
                                onPress={() => onRadioBtnClick(item)}
                                selected={item.selected}
                                key={item.id}
                            >
                                {item.name}
                            </RadioButton>
                        ))}
                </View> */} 
                <TouchableOpacity style={styles.orderButton}
                    onPress={() => {
                            dispatch({type:ORDER_SUCCESS,payload:{
                                location,
                                myContact,
                                data,
                                Order_total
                            }})

                        }
                    }
                >
                    <View style={{flexDirection:"row",justifyContent:"space-around"}}>
                        <Text style={{fontSize:25,textAlign:"center",color:"#fff",fontWeight:"bold"}}>Place Order</Text>
                    </View>
                </TouchableOpacity>
                {
                    ordered ? (
                        <View style={{height:30,width:60}}>
                            <Text>Order placed successfully</Text>
                        </View>
                    ) : (
                        null
                    )
                }
                
            </ScrollView>

        </>
    )
}

const styles = {
    orderButton:{
        borderRadius:20,
        backgroundColor:"#20B2AA",
        marginVertical:10,height:50,width:Dimensions.get("window").width*0.7,
        alignSelf:"center",
        alignItems:"center",
    },
    placeOrder:{
        backgroundColor:"gray"
    },
    radioButtonContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginLeft:10,marginTop:10
    },
    radioButton: {
        height: 20,
        width: 20,
        backgroundColor: "#F8F8F8",
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "#E6E6E6",
        alignItems: "center",
        justifyContent: "center"
    },
    radioButtonIcon: {
        height: 14,
        width: 14,
        borderRadius: 7,
        backgroundColor: "#98CFB6"
    },
    radioButtonText: {
        fontSize: 20,
        marginLeft: 16
    }  
}
export default Orders;