import {Button, Image, ImageBackground, SafeAreaView, ScrollView, Text, TouchableOpacity, View} from "react-native";
import * as React from "react";
import HomeStyles from "../Styles/HomeStyles";
import LinearGradient from 'react-native-linear-gradient';
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
import {faBars, faSignOut} from '@fortawesome/free-solid-svg-icons';


import imageOne from '../assets/image.png';
import imageTwo from '../assets/imagetwo.png';

function HomeScreen({route,navigation}) {
    return (
        <ScrollView style={HomeStyles.homeView}>
            <LinearGradient start={{x: 1, y: 0}} end={{x: 0, y: 0}} colors={['#11751F', '#064557']}
                            style={HomeStyles.ViewOne}>
                <View style={HomeStyles.ViewTwo}>
                    <FontAwesomeIcon icon={faBars} style={HomeStyles.faBars} size={32}/>
                    <FontAwesomeIcon icon={faSignOut} style={HomeStyles.faSignOut} size={32}/>
                </View>
                <View style={HomeStyles.ViewTwo}>
                    <Image style={HomeStyles.ImageOne} source={imageOne}/>
                    <View style={HomeStyles.ViewThree}>
                        <Text style={HomeStyles.TextStyleOne}>Thamoddya</Text>
                        <Text style={{fontSize: 15, fontWeight: 400}}>0770545234{"\n"}0770545234</Text>
                    </View>
                </View>
            </LinearGradient>
            <View style={HomeStyles.ViewFour}>
                <TouchableOpacity style={{...HomeStyles.buttonOne, marginRight: 25}}>
                    <Text>Carrot</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{...HomeStyles.buttonOne, marginRight: 25}}>
                    <Text>Carrot</Text>
                </TouchableOpacity>
                <TouchableOpacity style={HomeStyles.buttonOne}>
                    <Text>Carrot</Text>
                </TouchableOpacity>
            </View>
            <View style={HomeStyles.ViewFive}>
                <Text style={HomeStyles.TextTwo}>No.134,Kandalama Ed,Dambulla</Text>
                <Text style={HomeStyles.TextThree}>Address</Text>
            </View>
            <View style={HomeStyles.ViewSix}>
                <TouchableOpacity onPress={()=>{navigation.navigate('Details')}} style={HomeStyles.innerViewOne}>
                    <Text style={{fontSize: 19, color: '#FFF'}}>YOUR UPLOADS</Text>
                </TouchableOpacity>
            </View>
            <View style={HomeStyles.ViewSeven}>
                <View style={{padding: 5}}>
                    <ImageBackground source={imageTwo} resizeMode="cover" style={HomeStyles.backgroundImageOne}>
                        <View style={HomeStyles.imageBoxOne}>
                            <Text> Date</Text>
                        </View>
                        <View style={HomeStyles.imageBoxTwo}>
                            <Text>001</Text>
                        </View>
                    </ImageBackground>
                </View>
            </View>
            <View style={HomeStyles.ViewEight}>
                <View style={HomeStyles.innerViewOne}>
                    <Text style={{fontSize: 19, color: '#FFF'}}>YOUR UPLOADS</Text>
                </View>
            </View>
            <View style={HomeStyles.ViewSeven}>
                <View style={HomeStyles.boxView}>
                    <View style={HomeStyles.imageBoxThree}>
                        <Text> Date</Text>
                    </View>
                    <View style={HomeStyles.boxViewTwo}>
                        <Text style={{...HomeStyles.font1}}>PRODUCT NAME</Text>
                        <Text style={{...HomeStyles.font1,marginLeft:'10%'}}>02</Text>
                        <Text style={{...HomeStyles.font1,marginLeft:'15%'}}>RS:1000/=</Text>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
}

export default HomeScreen;