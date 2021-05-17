import React, {useState,useEffect} from "react";
import PropTypes from 'prop-types';
import {StatusBar,StyleSheet,View,ScrollView,
    Image,Dimensions,
    FlatList,Text,
    ActivityIndicator,
    Alert
} from 'react-native';

import  Container  from '../components/Container/Container';
import Header from '../components/Header/Header';
import Heading from '../components/Heading/Heading';
import Bigdiv from '../components/Bigdiv/Bigdiv';
import MamaCard from '../components/ListCard/MamaCard';
import VerticalSeparator from '../components/Wallet/VerticalSeparator';
import {connect} from 'react-redux';
// import {getProductList, GET_PRODUCTS_LIST} from '../actions/products';
import {useNavigation} from '@react-navigation/native';
import {useSelector,useDispatch} from 'react-redux';


const  MamaKitShop = () =>  {
    const [isFetching, setFetching] = useState(true);
    const [data, setData] = useState([]);
    

    //function to handle of displaying images if not from api
    const getImageUrl = () => {
        img_url = require('../../assets/mamakit.png')
        return img_url
    }
    const navigation = useNavigation()
    //ican as well use global dispatch
    const dispatch = useDispatch()
    // const productData = useSelector(state => {
    //     return state.products.productList
    // })
    useEffect(() => {
        let isMount = true;
        setFetching(true);

        const loadData = () => {
            fetch('https://preghealth.pythonanywhere.com/shop/', )//signal from abort
            .then((response) =>  response.json())
            .then((products) => {
                console.log(products)
                if(isMount){
                    setFetching(false);
                    setData(products);//we want to first check if not unmounted to set the
                }
            }).catch(error => {
                console.log("list error",error);
                Alert.alert("Sorry, something went wrong,Please try again",error.message, [
                    {
                        text: "Try Again",
                        onPress:loadData
                    }
                ])
            });
        }
        loadData();
        //cleanup
        return () => {
            console.log('unmounting')
            isMount = false
        }; //return cleanup function to abort.
    }, []);
//+16193675651
        return (
            <>
                <StatusBar translucent={false} barStyle="light-content"/> 
                    <View>
                        {isFetching ?  <ActivityIndicator size="large" color="green" 
                            style={{marginTop:20,fontWeight:"bold"}} 

                        /> : (
                            //<View style={{flexDirection:'row',flexWrap:"wrap",margin:8,display:"flex",flex: 1,}}>
                                <FlatList
                                    data={data}
                                    keyExtractor={({ id }, index) => id.toString()}
                                    renderItem={({ item }) => (
                                        <MamaCard 
                                                name={item.title}
                                                customIcon={
                                                    <Image  style={{resizeMode:"cover",
                                                        width:100,height:100,
                                                        margin:15,marginBottom:20}} 
                                                        source={{uri:item.img}} 
                                                    />
                                                }       
                                                price={item.price}
                                                onPress={() => {
                                                    navigation.navigate("ProductDetails",{
                                                        itemId:item.id,
                                                        itemTitle:item.title,
                                                        itemImg:item.img,
                                                        itemPrice:item.price,
                                                        itemDescription:item.description,
                                                        itemQuantity:item.quantity
                                                        
                                                    })
                                                }}
                                            />
                                        )}
                                        contentContainerStyle={{flexDirection:"row",flexWrap:"wrap"}}
                                        numColumns={2}
                                    />
                            //</View>
                        )}
                    </View>
            </>
        )
}
export default MamaKitShop;