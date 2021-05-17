import React, {useState,useLayoutEffect} from 'react';
import PropTypes from 'prop-types';
import {StyleSheet,View,Text,ScrollView,Image,TouchableOpacity,ActivityIndicator} from 'react-native';
import Separator_descr from  '../components/Wallet/Separator';
import Description from '../components/Description/Description';
import Increment from '../components/CartButton/Increment_decrement'
import AddCart from '../components/CartButton/AddCart';
import {connect} from 'react-redux';
import {useSelector,useDispatch} from 'react-redux';

import { Entypo,Ionicons,FontAwesome } from '@expo/vector-icons';
import { ADD_TO_CART} from '../actions/cartItems';


// const productid = {JSON.stringify(navigation.getParam('itemDescr','description'))}
// const mapDispatchToProps = (dispatch) => {
//     return {
//        addToCart:(id) => {dispatch(addToCart(id))}
//     }
// }
const  ProductDetails = ({route, navigation}) => {

    const [isLoading, setLoading] = useState(false);
    const {itemId,itemTitle,itemImg,itemPrice,itemDescription,itemQuantity} = route.params;
    const [alert, setBanner] = useState(false)
    const [quantity,setQuantity] = useState(itemQuantity);//handle increasing and decreasing quantity.
    const dispatch = useDispatch();

    //now i want to make available my cart 
        return(
            <ScrollView>
                <Image resizeMode="contain" style={{width:400,height:250, resizeMode:"cover"}} 
                    source={{uri:itemImg}} 
                />
                <View style={{marginTop:20,backgroundColor: "#000000",width: 500,height: StyleSheet.hairlineWidth,
                }} />
                <Text style={{fontSize:22,color:"green",fontWeight:"bold"}}>
                    {itemTitle}
                </Text>
                <Text style={{fontSize:20,color:"black",fontWeight:"bold"}}>
                    UGX {itemPrice}
                </Text>
                {/* <Separator_descr /> */}
                    <Description  text={itemDescription} />
                    {/* <Separator_descr /> */}
                <View style={{flexDirection:"row",marginTop:20}}>
                    <Increment 
                        quantity={quantity > 0 ? quantity : 1} //SO
                        increment={() => setQuantity(quantity+1)}
                        decrement={() => setQuantity(quantity-1)}
                    />
                   <TouchableOpacity style={{backgroundColor:"#6495ed",borderRadius:25,height:50,width:200,
                        marginLeft:5}}
                        onPress={
                            () => dispatch({type:ADD_TO_CART,
                                payload:{
                                    itemId,
                                    itemTitle,
                                    itemImg,
                                    itemPrice,
                                    itemDescription,
                                    quantity,
                                }
                            })

                        }    
                    >
                        <View style={{flexDirection:"row",justifyContent:"space-around"}}>
                            <Text style={{color:"#ffffff",fontSize:20,textAlign:"center",marginTop:10}}>AddToCart</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </ScrollView>
    
        )
}
// const mapStateToProps = (state) => {
//     const items = state.cartReducer.items
//     return {
//         items
//     }
// }


export default ProductDetails;