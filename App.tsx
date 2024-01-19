import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from "./src/Screens/Home.jsx";
import DetailScreen from "./src/Screens/Details.jsx";




const Stack = createNativeStackNavigator();
function App() {

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={'Home'}  screenOptions={{headerShown:false}}>
                    <Stack.Screen  name="Home" component={HomeScreen} />
                    <Stack.Screen name="Details" component={DetailScreen} />
            </Stack.Navigator>
        </NavigationContainer>

    );
}


export default App;
