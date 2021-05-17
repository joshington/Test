import React, {useState,useEffect} from "react";
import PropTypes from 'prop-types';
import {StatusBar,StyleSheet,View,ScrollView,Image,TouchableOpacity,Dimensions,FlatList,Text,
    ActivityIndicator} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useSelector,useDispatch} from 'react-redux';

const Tip = ({title,img,description,posted}) => {

    return (
        <View>
            <Text style={{fontSize:18,marginHorizontal:15,marginTop:15,fontWeight:"bold"}}>{title}</Text>
            <Image resizeMode="contain" style={{width:300,height:240,resizeMode:"cover"}} source={{uri:img}} />
            <Text style={{fontSize:15,margin:15}} 
                numberOfLines={3}
                ellipsizeMode="tail"
            >{description}</Text>
            <TouchableOpacity style={{backgroundColor:"blue",alignSelf:"flex-end",height:35,
                marginHorizontal:15,borderRadius:15,width:120
            }}>
                <Text style={{fontSize:20,textAlign:"center"}}>Read More</Text>
            </TouchableOpacity>
            <Text style={{fontSize:15,marginTop:15,marginHorizontal:15,fontWeight:"bold"}}
            >
                Posted: {posted}</Text>
            <View  style={{height:StyleSheet.hairlineWidth,width:300,backgroundColor:"#000",
                marginLeft:10
            }} />
        </View>
    )
}


const  Healthtips = ({navigation}) =>  {
    const [isFetching, setFetching] = useState(true);
    const [healthData, setData] = useState([]);
    
    // const dispatch = useDispatch()
    // const productData = useSelector(state => {
    //     return state.products.productList
    // })
    useEffect(() => {
        let isMount = true;
        setFetching(true);

        const _loadData = () => {
            fetch('https://preghealth.pythonanywhere.com/tips/')//signal from abort
                .then((response) => Data = response.json())
                .then((Data) => {
                    if(isMount){
                        setFetching(false);
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
            {
                isFetching ? <ActivityIndicator size="large" color="green" /> : (
                    <FlatList 
                        data={healthData}
                        keyExtractor={({ id }, index) => id.toString()}
                        renderItem={({ item }) => (
                            <Tip 
                                title={item.name}
                                img={item.img}
                                description={item.description}
                                posted={item.posted}
                            />
                        )}
                    />
                )
            }

        </>
    )
}

export default Healthtips;