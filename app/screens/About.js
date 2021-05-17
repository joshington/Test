import React from 'react';
import PropTypes from 'prop-types';
import {View,Text} from 'react-native';
import About_Cpt from '../components/about_cpt/About_cpt';
import { Fontisto,AntDesign,FontAwesome,Ionicons} from '@expo/vector-icons';


const About = () => {
    return (
        <View>
            <Text style={{fontSize:15,fontWeight:"bold",marginVertical:15}}>KNOW MORE ABOUT US</Text>
            <View style={{display:"flex",flexWrap:"wrap",flexDirection: "row"}}>
                <About_Cpt 
                    customIcon={
                        <Fontisto name="world-o" size={60} color="white" style={{marginTop:10}} />
                    }
                    nameIcon="website"
                />
                <About_Cpt 
                    customIcon={
                        <AntDesign name="instagram" size={60} color="white" style={{marginTop:10}} />
                    }
                    nameIcon="Instagram"
                />
                <About_Cpt 
                    customIcon={
                        <FontAwesome name="facebook" size={60} color="white" style={{marginTop:10}} />
                    }
                    nameIcon="Facebook"
                />
                <About_Cpt 
                    customIcon={
                        <Ionicons name="logo-twitter" size={60} color="white" style={{marginTop:10}} />
                    }
                    nameIcon="Twitter"
                />
            </View>
            <Text style={{textAlign:"center",fontSize:20}}>Legal</Text>
        </View>
    )
}

About.propTypes = {
    navigation:PropTypes.object,
}
About.navigationOptions = {
    title:'About Us',
}
export default About;