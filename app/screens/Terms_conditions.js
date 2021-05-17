import React,{Component} from 'react';
import PropTypes from 'prop-types';
import {View,Text,SafeAreaView,ScrollView,TouchableOpacity} from 'react-native';

//useNavigationis from  react-navigation v5, so let me stick to class cpts

class  Terms_Conditions extends Component{
    static propTypes = {
        navigation: PropTypes.object,
        // addedItems:PropTypes.array,
    };
    topUp = () => this.props.navigation.navigate("TopUpAmount");
    render(){
        return (
        
            <ScrollView>
                <SafeAreaView style={{flex:1}}>
                    <Text style={{fontSize:19,fontWeight:"bold",textAlign:"center",marginVertical:15}}>
                        Read and Accept the Terms and Conditions below
                    </Text>
                    <View>
                        <Text style={{fontSize:20,marginLeft:10,marginBottom:15}}>How does the wallet work?</Text>
                        <Text style={{fontSize:15,marginLeft:10}}>1. The Wallet advocates for saving for a good birth</Text>
                        <Text  style={{fontSize:15,marginLeft:10}}>2. This curbs the problem of lack of funds on birth day hence preventing
                            inconveniences for the birth of the long awaited baby.
                        </Text>
                        <Text  style={{fontSize:15,marginLeft:10}}>
                            3. Note that u can save on your wallet account from as low as 1000 UGX.
                        </Text>
                        <Text  style={{fontSize:15,marginLeft:10}}>4. Another person can deposit on your account</Text>
                        <Text   style={{fontSize:15,marginLeft:10}}>5. You can only withdraw from your wallet within aperiod of one month 
                            to expected due date
                        </Text>
                    </View>
                    <TouchableOpacity style={{borderRadius:18,backgroundColor:"#20B2AA",
                        width:200,height:40,alignItems:"center",alignSelf:"center",marginTop:20}}
                        onPress={this.topUp}
                    >
                        <Text style={{fontSize:22,fontWeight:"bold"}}>Accept</Text>
    
                    </TouchableOpacity>
                </SafeAreaView>
            </ScrollView>
        )

    }
}
Terms_Conditions.navigationOptions = {
    title:"Terms And Conditions",
}
export default Terms_Conditions