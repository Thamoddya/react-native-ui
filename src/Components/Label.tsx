import React, {Component} from 'react';
import {Animated, Text} from "react-native";
import View = Animated.View;


const Label = (props:any)=>{
    return (
        <View>
            <Text style={{
                fontSize:40,
                color:'yellow',
                fontWeight:'700'
            }}>{props.children}</Text>
        </View>
    );
}

export default Label
