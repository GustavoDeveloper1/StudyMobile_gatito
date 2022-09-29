import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Servicos from "./telas/Servicos";
import Carrinho from "./telas/Carrinho";

import { cores } from './styles';


const Tab = createBottomTabNavigator();

export default function Rotas() {
    return <NavigationContainer >
        <Tab.Navigator tabBarOptions={{
            activeTintColor: cores.roxo,
            inactiveTintColor: cores.claro,
            style: {
                height: 70
            },
            labelStyle: {
                width: '100%',
                flex: 1,
                marginTop: 3,
                paddingTop: 21,
                backgroundColor: cores.laranja,
                fontWeight: 'bold',
                fontSize: 16,
                lineHeight: 21
            }
        }} screenOptions={({ route }: any) => ({
            tabBarIcon:({focused, color,size}) =>{
                let iconName;
                if(route.name == 'Servicos') {
                    iconName = focused ? 'ios-information-circle' : 'ios-information-circle-outline'
                } else if( route.name === 'CARR)
            }
        })}>
            <Tab.Screen name="Servicos" component={Servicos} />
            <Tab.Screen name="Carrinho" component={Carrinho} />
        </Tab.Navigator>
    </NavigationContainer>
}