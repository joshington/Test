import React, {useState,useEffect} from 'react';
import PropTypes from 'prop-types';
import {StyleSheet,View,Text,FlatList,StatusBar,ScrollView,Image,TouchableOpacity,ActivityIndicator} from 'react-native';
import {useDispatch,useSelector} from 'react-redux';
import Increment from '../components/CartButton/Increment_decrement'
import Header from '../components/Header/Header';

import  {DELETE_ITEM,SUB_QUANTITY,ADD_QUANTITY} from '../actions/cartItems';
import { MaterialIcons } from '@expo/vector-icons';

const CartScreen = ({navigation}) => {

    const [data, setData] = useState([]);
    const cartData = useSelector(state => {
        return state.cartReducer.cartItems
    })
    //need to get he product name,image and quantity
    const count = useSelector(state => {
        return state.cartReducer.cartItems.reduce((count, {quantity}) => count + quantity, 0)
    })

    const cartAmount = useSelector(state => {
        return state.cartReducer.cartItems.reduce((totalAmount, {price, quantity}) => totalAmount + quantity * price, 0,)
    })

    //since we have to dispatch some cart actions
    const dispatch = useDispatch();
    useEffect(() => {
        setData(cartData);
    },[])

    const ListItem = ({name,image,quantity,increase,decrease,amount,onPress}) => {
        // const {name,id,quantity} = getProps;//not sure yet about this,though its about destructuring
        return (
            <View style={{margin:15}}>
                <View style={{flexDirection:"row",justifyContent:"space-around"}}>
                    <View>
                        <Text style={{fontSize:20}}>{name}</Text>
                        <Image 
                            resizeMode="contain" 
                            style={{width:100,height:100}} 
                            source={{uri:image}} 
                        />
                    </View>
                    <View style={{alignSelf:"center"}}>
                        <Increment 
                            quantity={quantity} 
                            increment={increase}
                            decrement={decrease}
                        />

                    </View>
                    <View style={{flexDirection:"row",justifyContent:"space-around",alignSelf:"center"}}>
                        <Text style={{fontSize:20,textAlign:"center",marginHorizontal:10}}>{amount}</Text>
                        <TouchableOpacity
                            onPress={onPress}
                        >
                            <MaterialIcons name="delete" size={35} color="black" />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
    
    return(
        <View>
            <StatusBar translucent={false} barStyle="light-content"/> 
            <Header  lengthItems={count} />
            {
                count > 0 ? 
                (
                    <ScrollView>
                        <FlatList 
                            data={data}
                            keyExtractor={({ id }, index) => id.toString()}
                            renderItem={({ item }) => (
                                <ListItem 
                                    name={item.name}
                                    image={item.image}
                                    quantity={item.quantity}
                                    amount={item.amount}
                                    increase={() => 
                                        dispatch({type:ADD_QUANTITY,payload:{Itemid:item.id,itemQuant:item.quantity}})
                                    }
                                    decrease={() => 
                                        dispatch({type:SUB_QUANTITY,payload:{Itid:item.id,itemQua:item.quantity}})
                                    }
                                    onPress={() => 
                                        dispatch({type:DELETE_ITEM,payload:{Item:item.id,itemQ:item.quantity}})
                                    }
                                />
                            )}
                        /> 
                        <View  style={{height:StyleSheet.hairlineWidth,width:300,backgroundColor:"#000",
                            marginLeft:10
                        }} />
                        <View>
                            <Text style={{fontSize:18,marginHorizontal:15,marginTop:10,fontWeight:"bold",color:"green"}}>
                                Total Amount:    UGX {cartAmount}
                            </Text>
                        </View>
                        <TouchableOpacity style={{alignItems:"center",alignSelf:"center",
                            marginTop:25,backgroundColor:"#B0E0E6",width:130,height:35,borderRadius:15
                        }}
                            onPress={() => {
                                navigation.navigate('Order Summary',{cartAmount:cartAmount,data:data})}}
                        >
                            <Text style={{textAlign:"center",fontSize:18,fontWeight:"bold",color:"#000"}}>Check Out</Text>
                        </TouchableOpacity>
                    </ScrollView>
                    
                )
                    : 
                    <View>
                        <Text style={{fontSize:20,textAlign:"center",marginTop:20}}>No Items fond in cart</Text>
                    </View>
            }
            
        </View>
    )
}
export default CartScreen;