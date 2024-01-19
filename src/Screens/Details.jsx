import {Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View} from "react-native";
import * as React from "react";
import DetailStyles from "../Styles/DetailStyles";

function DetailScreen() {
    return (
        <ScrollView style={DetailStyles.scrollView} alwaysBounceHorizontal={false} >
            <View style={DetailStyles.view1}>
                <Image source={require('../assets/brodcast.png')}/>
            </View>
            <View style={DetailStyles.view2}>
                <View style={DetailStyles.innerView1}>
                    <View style={DetailStyles.box}>
                        <Image style={DetailStyles.innerImage1} source={require('../assets/products.png')}/>
                        <TouchableOpacity style={DetailStyles.innerBoxText}>
                            <Text style={{
                                color: '#FFF',
                                fontWeight: 'bold',
                            }}>PRODUCTS</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{...DetailStyles.box, marginLeft: '13%'}}>
                        <Image style={DetailStyles.innerImage1} source={require('../assets/farmer.png')}/>
                        <TouchableOpacity style={DetailStyles.innerBoxText}>
                            <Text style={{
                                color: '#FFF',
                                fontWeight: 'bold',
                            }}>FARMER</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{...DetailStyles.innerView1, marginTop: 15}}>
                    <View style={DetailStyles.box}>
                        <Image style={DetailStyles.innerImage1} source={require('../assets/upload.png')}/>
                        <TouchableOpacity style={DetailStyles.innerBoxText}>
                            <Text style={{
                                color: '#FFF',
                                fontWeight: 'bold',
                                fontSize: 13
                            }}>UPLOAD IMAGE</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{...DetailStyles.box, marginLeft: '13%'}}>
                        <Image style={DetailStyles.innerImage1} source={require('../assets/store.png')}/>
                        <TouchableOpacity style={DetailStyles.innerBoxText}>
                            <Text style={{
                                color: '#FFF',
                                fontWeight: 'bold',
                            }}>STORE</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <View style={DetailStyles.view3}>
                <View style={{...DetailStyles.box2}}>
                    <Image style={DetailStyles.innerImage2} source={require('../assets/plant.png')}/>
                    <Text style={{
                        color: '#000',
                        fontWeight: 'bold',
                        fontSize:28
                    }}>How To Cultivate</Text>
                </View>
            </View>
            <View style={DetailStyles.view4}>
                <View style={DetailStyles.supportView}>
                    <Image style={DetailStyles.innerImage3} source={require('../assets/call.png')}/>
                    <Text style={{
                        color: '#FFF',
                        fontWeight: 'bold',
                        fontSize:27,
                        marginLeft:20
                    }}>GET A SUPPORT</Text>
                </View>
            </View>
        </ScrollView>
    );
}

export default DetailScreen