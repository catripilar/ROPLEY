import React from "react";
import Feather from 'react-native-vector-icons/Feather'
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import Home from "./Principal";
import Perfil from "./Perfil";
import Loja from './loja'
const Tab = createBottomTabNavigator();
export default function Main(){
    return(
        <Tab.Navigator screenOptions={
            ({route})=>({
                tabBarIcon:({focused,color,size})=>{
                    let iconName;
                    if(route.name == 'Alimentos'){iconName = 'coffee';}
                    if(route.name == 'Perfil'){iconName = 'user';}
                    if(route.name == 'Produtos'){iconName = 'shopping-bag';}
                    return <Feather name={iconName} size={size} color={color}/>
                },
            })
        }
        tabBarOptions={{activeTintColor:'#4169E1',inactiveTintColor:'gray'}}>
            <Tab.Screen name='Alimentos' component={Home}/>
            <Tab.Screen name='Produtos' component={Loja}/>
            <Tab.Screen name='Perfil' component={Perfil}/>
        </Tab.Navigator>
    )
}