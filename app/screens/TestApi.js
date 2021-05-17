import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View,Image} from 'react-native';

export default TestApi = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://hero-pregbackend.herokuapp.com/shop/')
      .then((response) => products = response.json())
      .then((products) => setData(products))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <View style={{ flex: 1, padding: 24 }}>
      {isLoading ? <ActivityIndicator/> : (
        <FlatList
          data={data}
          keyExtractor={({ id }, index) => id}
          renderItem={({ item }) => (
          <Text>{item.title}, {item.price}, {item.img}</Text>
            <View>
            <View>
          )}
        />
      )}
    </View>
  );
};

 <View style={{borderRadius:10,borderWidth:1,margin:15,width:Dimensions.get('window').width*0.91,height:120,alignSelf:"flex-start"}}>
                <Text style={{fontSize:20,fontWeight:"bold",marginHorizontal:10}}>Charges</Text>
                <Text style={{fontSize:15,textAlign:"justify",color:"blue",marginHorizontal:15,fontWeight:"bold"}}>
                    In home ultrasound scan services 
                    => UGX 30000 (inclusive of medical analysis)
                </Text>
                <Text  style={{fontSize:15,textAlign:"justify",marginHorizontal:15}}>Within Kampala and Wakiso</Text>
            </View>
            <TouchableOpacity style={{margin:20,borderRadius:15,borderWidth:1,alignItems:"center",
                width:180,backgroundColor:"blue",height:45   
            }} onPress={() => Communications.phonecall(customer_support, true)}
            >
                <View style={{flexDirection:"row",justifyContent:"space-between"}}>
                    <Feather name="phone-call" size={40} color="white" />
                    <Text style={{fontSize:25,textAlign:"center",marginLeft:15,color:"#fff"}}>Order</Text>
                </View>
            </TouchableOpacity>