import React from "react";
import Login from "./src/screens/telalogin/login";
import Cadastro from "./src/screens/telaCadastro/Cadastro";
import { Text } from "react-native-svg";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { useEffect } from "react";
import { useState } from "react";
import { useFonts } from "expo-font";

const Stack = createNativeStackNavigator()

export default function App(){
  const [fontsLoaded] = useFonts({
    'MBFSpace': require('./assets/fonts/MBFSpace.ttf'),
    'GothamLight': require('./assets/fonts/Gotham/GothamLight.ttf')

  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  if (!fontsLoaded || isLoading) {
    return <Text>Loading...</Text>;
  }

  return(
    <NavigationContainer >
      <Stack.Navigator initialRouteName="Login" >
        <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
        <Stack.Screen name="Cadastro" component={Cadastro} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}