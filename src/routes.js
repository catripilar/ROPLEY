import React from "react";
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import Home from './pages/inicio';
import Main from "./pages/Main";
import Perfil from "./pages/Perfil";
const Stack = createNativeStackNavigator();
const screenOptions = {headerShown:false}
const Routes = ()=>{
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Início' screenOptions={screenOptions}>
                <Stack.Screen name='Início' component={Home}/>
                <Stack.Screen name='Main' component={Main}/>
                <Stack.Screen name='Perfil' component={Perfil}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default Routes