import React, { useState,useEffect } from "react";
import {StatusBar,Text,StyleSheet,View,ScrollView,Image,Dimensions,TouchableHighlight,
    TouchableOpacity,FlatList,ActivityIndicator} from 'react-native';
import Modal from '../components/Modal/Modal';
import { Ionicons,Feather,FontAwesome5 } from '@expo/vector-icons';
import Communications from 'react-native-communications';
import ListFamily from '../components/ListFamily/ListFamily';
import Separator from '../components/Separator/Separator';


const customer_support = '0706626855';

const UltraScan = ({navigation}) => {
    const [isGetting, setGetting] = useState(true);
    const [familyData, setData] = useState([]);
    
    // const dispatch = useDispatch()
    // const productData = useSelector(state => {
    //     return state.products.productList
    // })
    useEffect(() => {
        let isMount = true;
        setGetting(true);

        const _loadData = () => {
            fetch('https://preghealth2.herokuapp.com/family/')//signal from abort
                .then((response) => Data = response.json())
                .then((Data) => {
                    if(isMount){
                        setGetting(false);
                        //setData(products);//we want to first check if not unmounted to set the
                        setData(Data);
                    }
                    //we want to first check if not unmounted to set the
                })
        }
        
            //.catch((error) => console.error(error))
            //.finally(() => setFetching(false));
        _loadData();
        return () => {
            isMount = false
        }
    },[])

    return (
        <>
            {isGetting ? 
                <ActivityIndicator size="large" color="blue" /> : (
                    <View style={{marginBottom:15}}>
                        <FlatList 
                            data={familyData}
                            keyExtractor={({ id }, index) => id.toString()}
                            renderItem={({ item }) => (
                                <ListFamily 
                                    title={item.method_name}
                                    text={item.description}
                                    onPress={() => {navigation.navigate('Method Details',{
                                            itemTitle:item.method_name,
                                            itemDescr:item.description,
                                        })}
                                    }
                                />
                            )}
                        />
                    </View>
                    
                )
            }
        </>
        
    )
}

export default UltraScan;