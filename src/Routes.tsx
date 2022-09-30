import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Servicos from "./telas/Servicos";
import Carrinho from "./telas/Carrinho";

import { cores } from './styles';
import Icon from "react-native-vector-icons/AntDesign";

const Tab = createBottomTabNavigator();

export default function Rotas() {
    return <NavigationContainer  >
        <Tab.Navigator tabBarOptions={{
            activeTintColor: cores.roxo,
            inactiveTintColor: cores.claro,
     
            style: {
                height: 70,
                backgroundColor: cores.laranja
            },
            labelStyle: {
                width: '100%',
                flex: 1,
                backgroundColor: cores.laranja,
                fontWeight: 'bold',
                fontSize: 16,
                lineHeight: 21
            }
        }}>
            <Tab.Screen name="Servicos" component={Servicos}  options={{
                tabBarLabel: 'Serviços',
                tabBarIcon: ({ color }) => (
                    <Icon name="setting" color={color} size={26} />
                )
            }} />
            <Tab.Screen name="Carrinho" component={Carrinho} options={{
                tabBarLabel: 'Carrinho',
                tabBarIcon: ({ color }) => (
                    <Icon name="shoppingcart" color={color} size={26} />
                )
            }} />
        </Tab.Navigator>
    </NavigationContainer>
}
