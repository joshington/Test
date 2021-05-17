import React from 'react';
import {Text,View,TextInput} from 'react-native';
import Heading from '../Heading/Heading';
import SmallText from '../Heading/SmallText';
import ButtonGroup from '../Buttons/ButtonGroup';


const GoodDiv = ({customIcon}) => {
    return(
        <View >
            <View style={{backgroundColor:"#ffffff",opacity:3,shadowColor:"#000",shadowOpacity:0.1,
                shadowOffset:{width:0,height:2},shadowRadius:3.84,elevation:9,alignItems:"center",
                paddingTop:100,
            }}
            >
                {customIcon}
                <Heading text="Where will the service be offered?" />
                <SmallText text="Your location helps us find care providers to serve you in your area"/>
                <TextInput 
                    placeholder="Search for address"
                    placeholderTextColor="#000000"
                    underlineColorAndroid="#000000"
                    autoFocus={true}
                    style={{width:220,marginTop:15,}}
                />
                <ButtonGroup buttonText="Next" 
                    onPress={console.log("hey")}
                />
            </View>
        </View>
    )
}

export default GoodDiv;