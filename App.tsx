import React from "react";
import Sobre from "./src/screens/sobre/Sobre";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from 'react-native-vector-icons/Ionicons';
//Menu produtos
import Exebir from './src/screens/Produto/index'
import ListaProdutos from './src/mocks/listaProdutos'
import { useFonts, Oswald_400Regular } from "@expo-google-fonts/oswald";
import { ScrollView } from "react-native";
import { Exile_400Regular } from "@expo-google-fonts/exile";
import { PoetsenOne_400Regular } from "@expo-google-fonts/poetsen-one";
import {useAudioPlayer} from "expo-audio";

//menu perfil
import Perfil from './src/screens/perfil'

function MenuProdutos(){
  return <Exebir {...ListaProdutos}/>
}

//Audio
function MenuAudio(){
  
}

//configuração do menu
const Tab = createBottomTabNavigator();

function Menu() {
  return <Tab.Navigator screenOptions={({ route }) => ({
    tabBarIcon: ({ focused, color, size }) => {
      let iconName: any;

      if (route.name === "Sobre") {
        iconName = focused
          ? 'home-sharp'
          : 'home-outline';
      }
      if (route.name === "Produtos") {
        iconName = focused
          ? 'bag-handle-sharp'
          : 'bag-handle-outline';
      }
      if (route.name === "treinos") {
        iconName = focused
          ? 'car-sport-sharp'
          : 'car-sport-outline'
      }
      if (route.name === "Perfil") {
        iconName = focused
          ? 'person-circle-sharp'
          : 'person-circle-outline';
      }
      return <Ionicons name={iconName} color={color} size={size} />
    },
    tabBarActiveTintColor: 'Black',
    tabBarInactiveTintColor: "Black",
    headerShown: false,
  })}>

    <Tab.Screen name='Sobre' component={Sobre} />
    <Tab.Screen name="Produtos" component={MenuProdutos} />
    <Tab.Screen name="treinos" component={Sobre} />
    <Tab.Screen name="Perfil" component={Perfil} />
  </Tab.Navigator>

}




export default function App() {
  const [fonteCarregada] = useFonts({"Oswald-Regular": Oswald_400Regular,"Exile-Regular":Exile_400Regular,"Poetsen-Regular":PoetsenOne_400Regular})
  if(!fonteCarregada){
    return<ScrollView/>
  }
  return <NavigationContainer>
    <Menu />
  </NavigationContainer>
}



